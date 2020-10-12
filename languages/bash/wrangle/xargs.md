# xargs

## Introduction

* `xargs` builds and execute command lines from standard input.

* `xargs` reads items from the standard input, delimited by blanks and executes a `command`.

    * The default `delimiter` is a space.

    * The default command is `/bin/echo`

* `xargs` will execute the `command` enough times to use up all the input.

* `xargs` can be used as part of a `pipeline` to pass the input to a `command`.

---

## Selected Options

* `-0` - Input items are terminated by a null character instead of by whitespace, and the quotes and backslash are not special.

---

## Example

1. `cut -d: -f1 < /etc/passwd | sort | xargs echo` Generate a list of users
