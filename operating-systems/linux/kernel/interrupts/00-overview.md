# Interrupts

## Introduction

* An `interrupt request (IRQ)` is requested by the `programmable interrupt controller (PIC)` with the aim of `interrupting the CPU` and executing the `interrupt service routine (ISR)`.

* __Programmable Interrupt Controllers (PIC)__

    * __PIC__ - When an `IRQ` occurs, the `PIC` writes the data to the CPU and raises a signal on `interrupt request (INTR) pin`.

    * __APIC__ - Modern processors have an `advanced programmable interrupt controller (PIC)` built into each `core`.

* __Interrupt Types__

    * __Hardware interrupts__ - Keyboard pressed, data available in network buffer, etc.

        * At `kernel` start-up, `hardware device driver` registers an `ISR`.

        * Hardware device sends an IRQ to signal the CPU when data is available. 
        
        * CPU invokes specific ISR.

    * __Software interrupts__ - Synchronise video and music playback with a software timer.

    * __Exceptions__ - Handle 'Divide by Zero', page fault, etc.

        * __Faults__ - Faults are an exception that the system can correct.

            * `page fault exception handler`.
        
        * __Traps__ - Traps are mainly used for debugging. System calls.

            * Traps can trigger a context switch that allows your debugger to read and display values of local variables.
        
        * __Aborts__ - Aborts are caused by hardware failure or inconsistent values in system tables.

            * `abort exception handler` - Terminate the process that caused it.

---

## Hardware Interrupt Line Implementations

* There are two main types of `interrupt`: 

    * __Edge Triggered__ - An `interrupt` signaled by a `level transition` on the `interrupt line`.

    * __Level Triggered__ - An `interrupt` signaled by `holding a level`  on the `interrupt line`.

---

## Commands

* View Kernel interrupts

    ```bash
    cat /proc/interrupts
    ```

---

## Resources

* [Linux Kernel Interrupts - linux-insides](https://0xax.gitbooks.io/linux-insides/content/Interrupts/)

* [Linux Kernel Interrupts - Linux Kernel](https://linux-kernel-labs.github.io/refs/heads/master/lectures/interrupts.html#)

* [How the Linux kernel handles interrupts](https://opensource.com/article/20/10/linux-kernel-interrupts)

 [Linux IRQ vector table](https://github.com/torvalds/linux/blob/master/arch/x86/include/asm/irq_vectors.h)

* [CPU Exceptions - osdev](https://wiki.osdev.org/Exceptions)

* [Interrupts - Wikipedia](https://en.wikipedia.org/wiki/Interrupt)

    * [Edge Triggered](https://en.wikipedia.org/wiki/Interrupt#Edge-triggered)

    * [Level Triggered](https://en.wikipedia.org/wiki/Interrupt#Level-triggered)





