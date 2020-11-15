# Capture interrupt stack frame.

## Capture Stack frame from an interrupt

1. Break point last brace of target `interrupt handler`.

2. Open `register view`. Look at C-M4 `SP` register to get the `address` of the next instruction.

3. Open `memory view`. Arrange the view to show 32 bits (8 hex chars). Navigate to `SP` stack frame address.

4. This is the captured `stack frame`.

---

## Manipulate `in memory stack frame PC value` in memory to return to a different execution point.

1. Capture a stack frame from an interrupt.

2. Determine which address is the captured `PC` program counter register.

    > For the `C-M4` (with floating point disabled) this should be 7 items down.

5. Step `into` in the debugger. It should move to that address. That address should get set in the `PC` register.

> This can be altered to point to another another function by setting the `PC` register to the address of that function. Although this leave the stack in an inconistant state.

---

## Manipulate `register SP value` and `in memory `thread stack frame SP values` to return to manually context switch.

1. Capture a stack frame from an interrupt.

2. Find the in memory `stack pointers` for the _current thread_ and _other thread_. e.g. use a `watch`.

3. Take the _current thread_s `register SP` and save it to the `in memory stack frame SP` for that thread.

    > As this thread has been running it might have a different `top of stack`.

4. Take the _other thread_s `in memory stack frame SP` and save it to the `register SP` for that thread.

> When returning from the interrupts exception handler the new stack frame will be used.

