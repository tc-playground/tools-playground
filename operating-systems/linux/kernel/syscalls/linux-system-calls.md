# Linux System Call

## Processes

* __fork__

* __exec__

* __exit__

* __wait__


---

## Files

* __fcntl__

    * The `fcntl` system call is the access point for several advanced `operations` on `file descriptors`. 

    * `fcntl(<file_descriptor>. <operation>)`

    * `fcntl` allows a program to place a `read lock` or a `write lock` on a file.

    * [Example](https://www.informit.com/articles/article.aspx?p=23618&seqNum=4)

* __select__ - synchronous I/O multiplexing

    * __syscalls__ - `select`, `pselect`.

    * Allow a program to `monitor multiple file descriptors`, waiting until one or more of the file descriptors become "ready" for some class of I/O operation.

* __poll__

* __read__

* __close__

* __shutdown__

* __open__

* __pipe__

* __socket__

* __dup__ - Duplicate a `file descriptor`.

    * __variants__ - `dup`, `dup2`, `dup3`.

    * `dup` creates a copy of a `file descriptor`, using the `lowest-numbered unused file descriptor` for the new descriptor.

    * `dup2` creates a copy of a `file descriptor`, using the `specified file descriptor` for the new descriptor.

    * `dup2` creates a copy of a `file descriptor`, using the `specified file descriptor` for the new descriptor, with the specified `flag` configuration (e.g. `close-on-exec`)

---

## async i/o POSIX

* __io_setup__ 

* __io_submit__ 

* __io_getevents__ 

* __io_destroy__

* [eventfd](https://man7.org/linux/man-pages/man2/eventfd.2.html) - `create a file descriptor for event notification`

    * Creates  an  `eventfd  object` that can be used as an event `wait/notify` mechanism by _user-space applications_.

    * Can be used by the kernel to `notify` _user-space_ applications of `events`.


* [aio](https://linux.die.net/man/7/aio) - POSIX asynchronous I/O overview

    * Allows applications to initiate one or more I/O operations that are performed asynchronously (i.e., in the background). 
    
    * The application can elect to be notified of completion of the I/O operation in a variety of ways: 
    
        * by delivery of a signal.
        
        * by instantiation of a thread.
        
        * no notification at all. 






---

## Sockets

* [socket - man](https://man7.org/linux/man-pages/man7/socket.7.html)

* [bind - man](https://man7.org/linux/man-pages/man2/bind.2.html)

---

## References

* [Definitive Guide to System Calls](https://blog.packagecloud.io/eng/2016/04/05/the-definitive-guide-to-linux-system-calls)