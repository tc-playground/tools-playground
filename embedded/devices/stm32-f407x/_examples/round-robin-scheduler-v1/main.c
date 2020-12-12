#include "kernel.h"

// If the default SysTick granularity is 1ms, this, will defined interupts every 10ms.
//
#define QUANTA 10

// Start 3 thread counters

uint32_t count0 = 0;
void task0(void) {
	while(1) {
		count0++;
	};
}

uint32_t count1 = 0;
void task1(void) {
	while(1) {
		count1++;
	};
}

uint32_t count2 = 0;
void task2(void) {
	while(1) {
		count2++;
	};
}

int main() 
{
	kernelInit();
	kernelAddThreads(&task0, &task1, &task2);
	kernelLaunch(QUANTA);
}
