# Manual Context Switch

## Introduciton

* A simple LED blinky program with two threads.

* Manually breakpoint the `SysTick exception handler` and perform a `manual context switch` from one LED colour to another, by, changing the `SP register` to point to the `stack pointer` of an `LED thread routine` that will execute returning from the handler.

---

## Requirements

* [STM32407x](https://www.st.com/en/evaluation-tools/stm32f4discovery.html)

* [uVision 5 - IDE](http://www2.keil.com/mdk5/uvision/)