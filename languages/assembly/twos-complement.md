# Twos Complement

## Overview

* `twos complement` is a __representation of negative numbers__ that is efficient for processor to manipulate.

* `twos complement` is based on the affect of `overflow` on `addition` in `fixed sized registers`.

    * __No Overflow__ -  `0x01 + 0xFF = 0x100` (1 + 155 = 256)

    * __Overflow (1 byte numbers)__ - `0x01 + 0xFF = 0x00` (1 + 155 = 0)

* The mathematical definition of a `negative number` is a number that when added to it's `complement` results in `zero`.

    > `0xFF (255)` is `-1` in a `1 byte` integer representation.

* `twos complement` can be calculated by: 

    * `2^N - number`.

    * Where `N` is `number of bits in the integer representation`.

* `twos complement` can be calculated by:

    * `Inverting the bits in the number`.

    * `Adding 1`.

* `twos-complement` allows `addition` and `subtraction` to be performed efficiently via the `addition operation`.