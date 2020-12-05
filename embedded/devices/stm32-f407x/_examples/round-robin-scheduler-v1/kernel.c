// Scheduler
// Thread Control Block (TCB)
// Stack

#include "kernel.h"

// Support 3 thread.
#define NUM_THREADS	3


#define STACK_FRAME_SIZE	16

// #define MAX_STACK_FRAMES	1

// As these very simple threads make no procedure calls we can have a stack
// size of 1 frame. 16 should be enough for the registers in the CortexM with 
// floating point disabled.
// #define STACK_SIZE	STACK_FRAME_SIZE * MAX_STACK_FRAMES
#define STACK_SIZE 100

// The scheduler launch function is defined in assembler and imported.
// This essentially is a new thread state loader. See kernel.s
//
void schedulerLaunch(void);

// Thread Control Block -------------------------------------------------------
//
// A simple TCB that implements a circular list of 3 threads.
//
// Each TCB eelement maintains a reference to the thread stack and a pointer 
// to the next thread. 
//
// Each stack contains a 'frame' that is used to store the state of the 
// processor registers when another thread is running. 
// 
// When a thread is halted the contents of the processors registers are pushed 
// onto their stack in memory.
//
// When a thread is started the contents their stack in memory is popped off 
// the stack and loaded into the processors registers.
//
// The TCB is circular. The last thread points to firat as the next thread.
//
// A pointer is declared to keep track of the currently executing thread.

// Define 'Thread Control Block' TCB
//
struct tcb {
	// A reference to a function pointer to the function to execute.
	int32_t *stackPtr;
	// A reference to the next TCB process. (Round-Robin scheduling').
	struct tcb *nextPtr;
};
typedef struct tcb tcbType;

// Create space to allocate the TCBs.
//
tcbType tcbs[NUM_THREADS];

// Create a pointer to store the current TCB.
//
tcbType *currentPtr;

// Create space for the thread stacks. Each stack slot is 32 bits for Cortex-M.
int32_t tcbStack[NUM_THREADS][STACK_SIZE];

// Support function to initialise the kernel thread stack at the specified index.
//
// 1. Create the stack structure.
// 2. Initilaise the prcoessor 'Thumb Mode' via the XPSR register.
//
void kernelStackInit(int stackIdx) 
{
	// Initialise each TCB stack pointer to point to it's stack.
	tcbs[stackIdx].stackPtr = &tcbStack[stackIdx][STACK_SIZE - STACK_FRAME_SIZE];
	// tcbs[stackIdx].stackPtr = &tcbStack[stackIdx][STACK_SIZE - 16];
	// Initialise XPSR register bit 24	to enabler 'Thumb Mode'.
	tcbStack[stackIdx][STACK_SIZE-1] = 0x01000000;
}

// Initialise the TCB.
//
// 1. Take 3 functions pointers to the funcitons to execute.
// 2. Initilaise the TCB 'next' pointers to form a circular array.
// 3. Set each 'task/thread' function pointer to the PCB.
// 4. Initialise the current pointer.
//
uint8_t kernelAddThreads(void(*task0)(void), void(*task1)(void), void(*task2)(void)) 
{
	// START - Critical Section
	__disable_irq();
	
	// Manually collect the threads in TCB to form a circular array.
	tcbs[0].nextPtr = &tcbs[1];
	tcbs[1].nextPtr = &tcbs[2];
	tcbs[2].nextPtr = &tcbs[0];
	
	// Initialise the 'stack' for Thread 0. 
	// 'StackSize-2' is the 'Instruction Pointer' register. Set it to the address of the function pointer for each thread.
	kernelStackInit(0);
	tcbStack[0][STACK_SIZE-2] = (int32_t) (task0);
	
	// Initialise the 'stack' for Thread 1. 
	// 'StackSize-2' is the 'Instruction Pointer' register. Set it to the address of the function pointer for each thread.
	kernelStackInit(1);
	tcbStack[1][STACK_SIZE-2] = (int32_t) (task1);

	// Initialise the 'stack' for Thread 2. 
	// 'StackSize-2' is the 'Instruction Pointer' register. Set it to the address of the function pointer for each thread.
	kernelStackInit(2);
	tcbStack[2][STACK_SIZE-2] = (int32_t) (task2);
	
	currentPtr = &tcbs[0];
	
	__enable_irq();
	// END - Critical Section
		
	return 1;
}

// The bus frequency of the STM32F.
//
#define BUS_FREQ 16000000	// 16 MHz
uint32_t millisPrescaler;
// Initialise kernel parameters.
//
// 1. Determine the prescaler for 1ms clock granularity.
//
void kernelInit(void)
{
	// START - Critical Section
	// __disable_irq();
	
	// Define prescaler - Defines 1ms SysTick granularity.
	//
	millisPrescaler = BUS_FREQ / 1000;
	
	// __enable_irq();
	// END - Critical Section
}

// The SysTick 'priority register' address.
//
#define SYSPRI3 (*((volatile uint32_t *) 0xE000ED20))
// Launch the Kernel
//
// 1. Configure SysTick with the specified qunata based frequecy (e.g. 10ms)
// 2. Set the SysTick priorty to 7 to give SysTick interupts high priority.
//
void kernelLaunch(uint32_t quanta)
{
	// Initialise CMSIS SysTick interupt frequency.
	//
	SysTick->CTRL = 0;
	SysTick->VAL = 0;
	SysTick->LOAD = (quanta * millisPrescaler) - 1;
	
	// Set CMSIS SysTick priority to 7
	//
	SYSPRI3 = (SYSPRI3 & 0x00FFFFFF) | 0xE0000000; // Priority 7.
	SysTick->CTRL = 0x00000007;
	
	schedulerLaunch();
}
