# TCP/IP Model

## Introductions

## TCP/IP Layers

1. The _modern_ `TCP/IP` has __5 layers__.

```
+--------------+
| Application  |    Layer 7                 L7 Header                   |
|              |                                                        |
|              |    (Presentation)                                      |
|              |                                                        | 
|              |    (Session)                                           |
+--------------+                                                        |
|  Transport   |    Layer 4     `Segments`  L4 Header                   |   Decreasing data size.
+--------------+                                                        |
|   Network    |    Layer 3     `Packets`   L3 Header                   |
+--------------+                                                        |
|  Data Link   |    Layer 2     `Frames`    L2 Header + L2 Trailer      |
+--------------+                                                        |
|   Physical   |    Layer 1     `Bits`                                  V
+--------------+
```

2. `Layers 5, 6, and 7` of the `OSI Model` are combined into a single `Application` level. 