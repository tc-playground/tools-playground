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

    * `select`, `pselect`

    * Allow a program to `monitor multiple file descriptors`, waiting until one or more of the file descriptors become "ready" for some class of I/O operation.

* __poll__

* __read__

* __close__

* __shutdown__

* __open__

* __pipe__

* __socket__



---

## Sockets

* [socket - man](https://man7.org/linux/man-pages/man7/socket.7.html)

* [bind - man](https://man7.org/linux/man-pages/man2/bind.2.html)

---

## References

* [Definitive Guide to System Calls](https://blog.packagecloud.io/eng/2016/04/05/the-definitive-guide-to-linux-system-calls)