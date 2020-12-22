# Cross Compilation and Emulation

## Introduciton

* Compile to produce `executables for different architectures`.

* `GNU Assembler` and the `Linux linker/loader` can be compiled to run on any system. 

* The `GNU Assembler` source code contains support for many CPU architectures.

* `Cross compilation` is achieved by obtaining the required `tools and libraries for the target systems`.

    * Tools installed on different path.

* `QEMU` is a tool that allows:

    1. __Full Emulation__ of a target machine and architecture.

    2. __Linux KVM Virtualisation__.

---

## Cross-Compilation

* __Linux x86 Host to ARM64 Target__

    * __Tool Installation__

        * __Install__ - `sudo apt-get install gcc-aarch64-linux-gnu g++-aarch64-linux-gnu`

        * __Location__ -  `/usr/aarch64-linux-gnu/bin` 

    * __Makefile__

        ```Makefile
        TOOLPATH = /usr/aarch64-linux-gnu/bin
        
        HelloWorld: HelloWorld.o
            $(TOOLPATH)/ld -o HelloWorld HelloWorld.o
        
        HelloWorld.o: HelloWorld.s
            $(TOOLPATH)/as -o HelloWorld.o HelloWorld.s
        ```

        * __Command__ - `make`

---

## Emulation

## __QEMU__

* __Install QEMU__ - `sudo apt-get install qemu qemu-user`

* __Run ARM64 Executable__ - `qemu-aarch64 <executable>`


