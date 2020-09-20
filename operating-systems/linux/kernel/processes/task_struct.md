# task_struct - Linux Process struct

## Introduction

* Each `Linux process` is represented by a `task_struct` C data structure. 

* `task_struct`is found in the `<linux/sched.h>`.

* `task vector` is an `array of pointers` to every `task_struct` data structure in the system.

* All active processes are represented using a `doubly linked list` of `task struct` within the Linux kernel. 

* A pointer is maintained by Kernel to the `task struct` of the process currently executing on the system.

* Each `task_struct` reference their `parent` and `children` process structures.

---

## Anatomy - task_struct

* `long state;` - Denote __state__ of the process.

* `struct sched_entity se;` - Denote __scheduling information__.

* `struct files_struct *files;` - Denotes list of __open files__.

* `struct mm struct *mm;` - Denotes __address space__ of this process.

* `struct task_struct *parent;` - Denotes this process’s __parent__.

* `struct list_head children;` - Denotes this process’s __children__.

* ``struct task struct *p_opptr,*p_pptr,*p_cptr,*p_ysptr,*p_osptr` - Denotes: 
    
    * `op` - Original parent.
    * `p` - Parent.
    * `c` - Youngest child.
    * `ys` - Youngest sibling.
    * `os` - Older sibling.

---

## References

* [task_struct - source code definition](https://elixir.bootlin.com/linux/latest/source/include/linux/sched.h#L629)

* [Process representation in Linux](https://www.tutorialspoint.com/process-representation-in-linux-system)

* [Process and Interrupt Management](https://tldp.org/LDP/lki/lki-2.html)
