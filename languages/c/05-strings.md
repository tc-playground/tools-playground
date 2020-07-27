# Strings

## Introduction

* `strings` are an array characters that are _terminated_ by the `null character` - `\n`.

* `strings` can be displayed to the terminal using the `printf` functions from `stdio.h`.

    * `format specifiers` can be used `interpolate` variable and control how they are displayed.

* `strings` can be read from the terminal using the `scanf` functions from `stdio.h`.

---

## Format Specifiers

* `format specifiers` can be used to denote the display format of a variable when converting it to a string.

    * `%s` - string

    * `%d` - integer

    * `%c` - character.

---

## Escape Characters

* `escape characters` allow special character to be defined

    * `\n` - New line.

    * `\/` - Forward slash.

    * `\\` - Back slash.

---

## Example - User Input/Output

```c
#include <stdio.h>

public static void main(int argc, char *argv[]) {
    int value = 0;
    printf("Enter a value:");
    scanf("%d", *value);
    printf("\nYou entered: %d\n", value);
}
```


## References

* [printf format specifiers](https://en.wikipedia.org/wiki/Printf_format_string)

