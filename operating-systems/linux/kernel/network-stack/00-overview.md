# Linux Kernel TCP/IP Stack

## Introduction

* __PAcket Ingress - High Level Overview__

    1. `Driver` is loaded and initialized.

    2. `Packet` arrives at the `NIC` from the network.

    3. Packet is copied (via `DMA`) to a `ring buffer` in `kernel memory`.

    4. `Hardware interrupt` is generated to let the system know a packet is in memory.

    5. Driver calls into `NAPI` to start a poll loop if one was not running already.

    6. `ksoftirqd` processes run on each CPU on the system. They are registered at boot time. 
    
        * The ksoftirqd processes pull packets off the ring buffer by calling the NAPI poll function that the device driver registered during initialization.

    7. Memory regions in the ring buffer that have had network data written to them are unmapped.

    8. Data that was DMA’d into memory is passed up the networking layer as an `skb` for more processing.

    9. `Packet steering` happens to distribute packet processing load to multiple CPUs (in lieu of a NIC with multiple `receive queues`), if enabled.

    10. Packets are handed to the `protocol layers` from the queues.

    11. Protocol layers add them to `receive buffers` attached to `sockets`.


---

## References

* [Linux Kernel Network Documentation](https://www.kernel.org/doc/html/latest/networking/index.html)

* __Linux Networking Stack - From the Ground Up__

    * [Part 1](https://www.privateinternetaccess.com/blog/linux-networking-stack-from-the-ground-up-part-1/)
    * [Part 2](https://www.privateinternetaccess.com/blog/linux-networking-stack-from-the-ground-up-part-2/)
    * [Part 3](https://www.privateinternetaccess.com/blog/linux-networking-stack-from-the-ground-up-part-3/)
    * [Part 4](https://www.privateinternetaccess.com/blog/linux-networking-stack-from-the-ground-up-part-4/)
    * [Part 5](https://www.privateinternetaccess.com/blog/linux-networking-stack-from-the-ground-up-part-4-2/)

* __Monitoring and Tuning the Linux Network Stack - Package Cloud__

    * [Sending Data](https://blog.packagecloud.io/eng/2017/02/06/monitoring-tuning-linux-networking-stack-sending-data/)
    * [Receiving Data](https://blog.packagecloud.io/eng/2016/06/22/monitoring-tuning-linux-networking-stack-receiving-data/)
    * [Receiving Data - Illustrated](https://blog.packagecloud.io/eng/2016/10/11/monitoring-tuning-linux-networking-stack-receiving-data-illustrated/)


* __Linux Network Stack - Linux Journal__

    * [Linux Network Stack Queues - Linux Journal](https://www.linuxjournal.com/content/queueing-linux-network-stack)

* __Linux Network Stack - Cloud Flare__

    * [Linux Kernel Network Stack -  Advantages](https://blog.cloudflare.com/why-we-use-the-linux-kernels-tcp-stack/)
    * [Linux Kernel Network Stack -  Low Latency](https://blog.cloudflare.com/how-to-achieve-low-latency/)
