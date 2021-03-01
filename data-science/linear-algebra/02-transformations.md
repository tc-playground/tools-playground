# Linear Transformations

## Overview

* `Matrices` define a `linear transformation` of `space`.

---

## Linear Transformation

1. A `function` that takes in a `vector` as `input` and return a `vector` as `output`.

    ```
    | x-in |  f  =  | x-out |
    | y-in |        | y-out |
    ```

    * Where:

        * All `straight lines` remain straight after the transformation.

            > `Parallel` and `uniformly` spaced.

        * The `origin` is not moved and remains the same.

2. The `linear transformation` is defined as a `matrix` whose scalar values define where the `basis vector` would move to:

    * e.g. 2D example

        ```
        |  3  2 |
        | -2  1 |
        ```

        * The first column defines where the `i-hat` basis vectors would land.

        * The second column defines where the `j-hat` basis vectors would land.

3. The `linear transformation` can be applied to an input `vector` via `matrix multiplication` to determine the output.

    ```
    | a  c |  *  | x |  =  x * | a |  +  y * | c |  =  | ax + yc |
    | b  d |     | y |         | b |         | d |     | nx + yd |
    ```

* `Linear transformations` can be conceptualised as a `movement` or a set of vector points.

* __Examples__

    * `Identity` - `i-hat` and `j-hat` stay the same:

        ```
        | 1  0 |
        | 0  1 |
        ``` 

    * `Rotation` - (anti-clockwise 90 degrees) `i-hat` and `j-hat` become:

        ```
        | 0 -1 |
        | 1  0 |
        ```

    * `Shear` - `i-hat` remains the same, `j-hat` becomes: 

        ```
        | 1  1 |
        | 0  1 |
        ```

---

## Linear Transformation Compositions

* `Linear Transformations` can be applied in order.

* `Linear Transformation` can be `composed`:

    e.g rotate 90 degrees anti-clockwise + sheer = composition (product).

    ```
    | 1  1 |  *  | 0  -1 |  =  | 1  -1 |
    | 0  1 |     | 1   0 |     | 1   0 |
    
    (shear)     (rotation)     (composition)
    ```
    > `Multiplying matrices` has the `geometric interpretation` of applying one transformation and then another.

    * NB: `function composition` is read right to left.

---

## References

* [Essence of linear algebra - 3blue1brown](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)

* [Linear combinations, span, and basis vectors ](https://www.youtube.com/watch?v=k7RM-ot2NWY&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=2)

* [Linear transformations and matrices ](https://www.youtube.com/watch?v=kYB8IZa5AuE&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=3)


