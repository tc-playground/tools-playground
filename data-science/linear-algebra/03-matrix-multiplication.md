# Matrix Multiplication

## Overview

* `Matrix multiplication` has the `geometric interpretation` of __applying one transformation and then another__.

* `Matrix Multiplication` is not `commutative`.

    * e.g. `M1 * M2 !== M2 * M1`

* `Matrix Multiplication` is `associative`

    * e.g. `A * B * C === (A * B) * C === A * (B * C)`

---

## `Matrix Vector Multiplication`

    ```
    | 1 -3 |  | 5 |  =  | (1)(5) + (-3)(7) |
    | 2  4 |  | 7 |     | (2)(5) + (4)(7)) |
    ```

    ```
    ```
    | a  c |  *  | x |  =  x * | a |  +  y * | c |  =  | ax + yc |
    | b  d |     | y |         | b |         | d |     | nx + yd |
    ``` 
    ```

---

## `Matrix Multiplication`

    1. Multiply

        ```
        | a  c |  *  | v  x |
        | b  d |     | w  y |

        (M2)         (M1)
        ``` 

    2. Where does `i-hat` go? Look at the first colum of M1

        ```
        | a  c |  *  | v |  =  v * | a | + w * | c |  =  | va + wc |
        | b  d |     | w |         | b |       | d |     | vb + wd |
        ```

        > Take the first column of M1, multiply by M2 and add to first column of result.

    2. Where does `j-hat` go? Look at the first colum of M1

        ```
        | a  c |  *  | x |  =  x * | a | + y * | c |  =  | xa + yc |
        | b  d |     | y |         | b |       | d |     | xb + yd |
        ```

        > Take the second column of M1, multiply by M2 and add to second column of result.

    3. Add partial result to final matrix.

    ```
    | a  c |  *  | v  x |  =  | (va + wc)  (xa + yc) |
    | b  d |     | w  y |     | (vb + wd)  (xb + yd) |
    ```

---

## References

* [Essence of linear algebra - 3blue1brown](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)

* [Linear transformations and matrices](https://www.youtube.com/watch?v=kYB8IZa5AuE&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=3)

* [Matrix multiplication as composition](https://www.youtube.com/watch?v=XkY2DOUCWMU&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=4)