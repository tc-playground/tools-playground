# less

## Introduction

* `less` is a `terminal pager`.

---

## Usage

* `cat some-file | less` - Pipe content into less.

* `cat some-file | less -R` - Interpret input as `raw data`. e.g. interpret colour escape sequences.

* `/pattern` - Search and highlight a specified term. (`?pattern` for reverse search)

    * `n/N` - Goto `next`/`previous` term.

* `g/G` - Go to `top`/`bottom`. 