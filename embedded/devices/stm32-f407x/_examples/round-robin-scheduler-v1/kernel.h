#ifndef KERNEL_H
#define KERNEL_H

#include <stdint.h>

#include "stm32f4xx.h"                  // Device header


void kernelLaunch(uint32_t quanta);

void kernelInit(void);

// A 'task' (or 'thread') is jsut a (void/void) function pointer.
uint8_t kernelAddThreads(void(*task0)(void), void(*task1)(void), void(*task2)(void));

#endif
