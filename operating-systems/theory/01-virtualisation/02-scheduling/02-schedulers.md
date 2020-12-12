# Schedulers

## Process vs Thread

---

## Scheduler Classification

1. `Co-operative Scheduler` (Non-preemptive)

    * Threads `cooperate`. Threads pass control to other threads as applicable.

2. `Preemptive Scheduler`

    * Threads `interrupt`. Threads can be interrupted at any time.

---

## Work Loads

* Batch vs Interactive

* I/O

---

## Metrics

* __Turn Around Time__ - `T(turnaround) = T(completion) − T(arrival)`

* __Response Time__ - `T(response) = T(first-run) − T(arrival)`

* __Fairness__ - Jain’s Fairness Index

    > `Performance` and `Fairness` are often at odds in scheduling.

---

## Interrupts and Quanta

---

## First In, First Out (FIFO) Scheduler / First Come First Served (FCFS) Scheduler

---

## Shortest Job First (SJF) Scheduler

---

## Shortest Time-to-Completion First (STCF) Scheduler

---

## Round Robin (RR) Scheduler

---

## Weighted Round Robin (WRR) Scheduler

---

## Multi-level Feed-back Queue (MLFQ)

---

## Lottery / Ticket Based Scheduling

* `strides`

---

## The Linux Completely Fair Scheduler (CFS)

* __Virtual Runtime__ - `vruntime`.

---

## References

* __OSTEP__

    * [Basic Scheduling - OSTEP](http://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf)

    * [MLFQ Scheduling - OSTEP](http://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-mlfq.pdf)

    * [Lottery Scheduling - OSTEP](http://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-lottery.pdf)

    * [Multi-Processor Scheduling - OSTEP](http://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-multi.pdf)

* [AN EXPERIMENTAL TIME-SHARING SYSTEM - Fernando J. Corbató,](https://users.soe.ucsc.edu/~sbrandt/221/Papers/History/corbato-sjcc62.pdf)


