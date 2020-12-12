#ifndef KERNEL_H
#define KERNEL_H

#include <stdint.h>

#include "stm32f4xx.h"                  // Device header

// An interface to initialise the kernel
//
void kernelInit(void);

// An interface to initialise 3 tasks.
//
// A 'task' (or 'thread') is jsut a (void/void) function pointer.
//
uint8_t kernelAddThreads(void(*task0)(void), void(*task1)(void), void(*task2)(void));

// An interface to launch the kernel.
//
// 'quanta' define a scaling factor for the specified clock tick frequency.
//
void kernelLaunch(uint32_t quanta);

#endif
