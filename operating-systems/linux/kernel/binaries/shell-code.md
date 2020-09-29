# Shellcode

## Introduction

---

## Example C Shellcode

```c
#include<stdio.h>
#include<string.h>

unsigned char code[] = 
"\x31\xc0\x50\x68\x6e\x2f\x73\x68\x68\x2f\x2f\x62\x69\x89\xe3\x50\x89\xe2\x53\x89\xe1\xb0\x0b\xcd\x80";

main()
{
    printf("Shellcode Length: %d\n", strlen(code));
    int (*ret)() = (int(*)())code;
    ret();
}
```

1. `int (*ret)()` defines `ret` as a `pointer to a function` which has `no parameters ()` and returns `int`.

2. `(int(*)())code` casts `code` to a `pointer to a function` which has `no parameters ()` and returns `int`.

---

## References

* [Shellcode - Wikipedia](https://en.wikipedia.org/wiki/Shellcode)

* [Demystifying the Execve Shellcode (Stack Method)](http://hackoftheday.securitytube.net/2013/04/demystifying-execve-shellcode-stack.html)

* [Python Win32 Shellcode](http://www.debasish.in/2012/04/execute-shellcode-using-python.html)
