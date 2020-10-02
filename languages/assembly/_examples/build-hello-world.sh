#!/bin/bash

# Compile to object file.
nasm -f elf64 hello-world.asm

# Link to executable.
ld -s -o hello-world hello-world.o

# Run...
./hello-world
