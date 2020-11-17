// Scheduler

// Thread Control Block (TCB)

// Stack

#include "kernel.h"

#define NUM_THREADS	3
#define STACK_SIZE	100

void schedulerLaunch(void);

// Define 'Thread Control Block' Type
struct tcb {
	int32_t *stackPtr;
	struct tcb *nextPtr;
};
typedef struct tcb tcbType;

// Create space to allocate the TCBs.
tcbType tcbs[NUM_THREADS];
// Create a pointer to store the current TCB.
tcbType *currentPtr;
// Create space for the thread stacks. Each stack slot is 32 bits for Cortex-M.
int32_t tcbStack[NUM_THREADS][STACK_SIZE];

void kernelStackInit(int stackIdx) 
{
	// Initialise each TCB stack pointer to point to it's stack.
	tcbs[stackIdx].stackPtr = &tcbStack[stackIdx][STACK_SIZE-16];
	// Initialise XPSR register bit 24	to enabler 'Thumb Mode'.
	tcbStack[stackIdx][STACK_SIZE-1] = 0x01000000;
}

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

#define BUS_FREQ 16000000	// 16 MHz
uint32_t millisPrescaler;

void kernelInit(void)
{
	// START - Critical Section
	__disable_irq();
	
	// Define prescaler
	millisPrescaler = BUS_FREQ / 1000;
}

// The SysTick 'priority register' address.
#define SYSPRI3 (*((volatile uint32_t *) 0xE000ED20))

void kernelLaunch(uint32_t quanta)
{
	// Initialise CMSIS SysTick and set priority.
	SysTick->CTRL = 0;
	SysTick->VAL = 0;
	SysTick->LOAD = (quanta * millisPrescaler) - 1;
	SYSPRI3 = (SYSPRI3 & 0x00FFFFFF) | 0xE0000000; // Priority 7.

	SysTick->CTRL = 0x00000007;
	schedulerLaunch();

}
