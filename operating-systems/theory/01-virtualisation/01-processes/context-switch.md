# Process Context Switch

## Introduction

* `Context switching` is the process of changing the currently running thread on the processor to a different thread in such a way that it can be resumed later on.

* `Context switching` has 3 main phases:

    1. __Saving__ - Saving the `current thread state`.

    2. __Scheduling__ - Selecting a thread to resume.

    3. __Loading__ - the `new thread state`.

* `Thread state` consists of the current contents of `all registers in the processor`.

    1. __General purpose registers__ - x86 (`rax`, `rbx`, etc); ARM (`r0`, `r1`, etc). 
    
    2. __Floating point registers__

* `Multitasking` is performing `context switches` between mulitple `processes` so they appear to all be running at once:

    * `Cooperative multitasking` is switching threads by the current thread explicitly telling the OS to do so.

        1. Ask a controlling scheduling thread to determine what thread to run next.

        2. The current thread decides what thread to run next.

        3. The current thread executes a `system call`.

    * `Preemptive multitasking` is switching threads without the current thread explicitly telling the OS to do so.

        1. A `timer-based interrupt` is issued on a fixed frequency and a `interrupt handler` catches it and asks a scheduler what to execute next.

---

## Timer Interrupt Handlers

1. This is required for `preemptive scheduling`. 

2. The implementation will depend on the hardware and support libraries:

    1. __Programmable Interval Timer__

    2. __CMSIS SysTick__

3. An `interrupt vector table` is usually used to configure the interrupt.

4. The `interrupt handler` will invoke the scheduler to perform the `context switch`.

---

## Saving the current thread processor state

1. Push processor registers onto to `stack` for the thread.

    > Sometimes this operation can be implement with `register clobbering`.

2. Store the current `SP` in the `Thread Control Buffer (TCB)` for the thread.

---

## Loading the new thread processor state

1. Pop `stored stack register values` from the `stack` into the processor registers.

2. Retrieve the `stored SP` from the `Thread Control Buffer (TCB)` for the thread.

3. Set the `current thread` in the `Thread Control Buffer`.

---

## References

* [Context Switching on x86](https://samwho.dev/blog/context-switching-on-x86/) - xv

* [Context switching and preemptive multitasking](https://techno-coder.github.io/example_os/2018/06/05/Context-switching-and-preemptive-multitasking-0.html) - exampleOS
