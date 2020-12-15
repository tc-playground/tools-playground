# Endianess

## Introduction

* Integers are stored as sequences of bytes.

* Integers byte representations can be interpreted as the first bit being the `most significant` or `least significant`.

---

## Big-Endian

* __Most Significant First__ - `Most Significant Bit` to `Least Significant Bit` 

    * __1__ : `00 00 00 01`

* __Advantages__

    * This is the intuitive encoding.

    * This is the encoding used byt eh `TCP` protocol.

* __Usage__ - `Motorola`, `IBM`, etc.

---

## Little-Endian

* __Least Significant First__ - `Least Significant Bit` to `Most Significant Bit`.

    * __1__ : `01 00 00 00`

    * The `bytes` are in `reverser order`.

* __Advantages__

    * Makes it easy to change the size of integers, without requiring any address arithmetic.

        * e.g. You can increase or reduce the size of integer by adding or removing bytes.
    
    * This is the encoding used by `Linux`.

* __Usage__ - `Intel`, `IBM`, etc.

> The individual bytes still have the least significant bit last.

---

## Bi-Endian

* Both `Little Endian` and `Big Endian`.

* e.g. `ARM`.
