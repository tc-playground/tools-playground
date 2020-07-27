# Enums

## Introduction

* `enums` allow an exhaustive set of value tokens to be specified.

* `enums` by default are implicitly assigned an integer based on the order they are declared starting at 0.

* `enums` token integer values can be explicitly defined if desired.

---

## Example

```c
enum primaryColour = { RED, GREEN, BLUE };
```

```c
enum direction = { NORTH = 10, EAST = 20, SOUTH = 30, WEST = 40 };
heading = NORTH;
```

```c
enum cardsuit {
   Clubs,
   Diamonds,
   Hearts,
   Spades
};

struct card {
   enum cardsuit suit;
   short int value;
} hand[13];

enum cardsuit trump;
```

---

## References

* [Enumerated Types - Wikipedia](https://en.wikipedia.org/wiki/Enumerated_type)