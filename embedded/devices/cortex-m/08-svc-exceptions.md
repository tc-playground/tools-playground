# Supervisor Call (SVC) Exceptions

## Introduction

* `SVC Exceptions` allow `application tasks` to gain `system level privilege`.

* `SVC Exceptions` allow `application tasks` to be developed independently of the `OS`.

    * Application task do not need to know the exact address of OS service functions.

* The `SVC Exception` is generated by teh `SVC Instruction`.

* `SVC_Handler` is an `Interrupt Service Routine (ISR)` for handling `SVC Exceptions`.

* `SVC`s can be use to implement `schedulers`.

---

## SVC_Handler - Implementation

1. Read `Link Register` - `EXC_RETURN` code register defines where to return to:

    * `EXC_RETURN[2] = 0` - Return to process stack.
    * `EXC_RETURN[2] = 1` - Return to main stack.

    > Bit 4 (EXC_RETURN[3]) can be used to define which stack to return to.

2. Read `PC Register`

3. Determine `SVC Number`.

4. Run `SVC Service`.



