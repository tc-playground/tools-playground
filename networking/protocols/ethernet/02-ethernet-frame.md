# Ethernet Frame

## Introduction

* The `ethernet frame` standard allows transmission of ethernet frames over various heterogenous mediums.

---

## Basic Ethernet Frame

```
+-----------------+------+------------------+
| Ethernet Header | DATA | Ethernet Trailer |
+-----------------+------+------------------+
```

---

## Basic Ethernet Header

```
+----------+-----------------------------+-------------------------+--------------------+---------------+
| Preamble | Start Frame Delimiter (SFD) | Destination MAC Address | Source MAC Address | Protocol Type |
+----------+-----------------------------+-------------------------+--------------------+---------------+
```

1. `Preamble` - __7 byte sets of 10101010__. Used to `synchronize` the bits transmitted in the `frame`.

2. `Start Frame Delimiter` - __1 byte 10101011__. Used to indicate the `preambles` end. 

3. `Destination MAC Address` - L2 Address of destination.

4. `Source MAC Address` - L2 Address of source.

5. `Protocol Type` - Indicates `IPv4` or `IPv6`.

---

## Basic Ethernet Trailer

```
+----------------------------+
| Frame Check Sequence (FCS) |
+----------------------------+
```

1. `Frame Check Sequence (FCS)` - Allows the computation of `cyclic redundancy check` against the `data` in the frame for `error detection`.

    * NB: Only detects errors. Higher level protocols must deal with `error correction`.

