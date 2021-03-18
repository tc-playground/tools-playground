# Lecture 1: The geometry of linear equations 

* [Video](https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/video-lectures/lecture-1-the-geometry-of-linear-equations/)

---

## Introduction

* __Linear Equations__ - `n` equations, `n` unknowns. `Linear` means the solutions define straights line in geometric space.

* __Matrix Picture__ - Is a `dataset` of multiple `entities` with `attributes/dimensions`. 

    * There are two fundamental `matrix operations`:

        * __Addition__

        * __Multiplication__

* __Row Picture__ - Each `row` defines an `equation` in `geometric space`.

* __Column Picture__ - Each `column` is a `vector`. Defines the `linear combinations` of each `dimension`.

* __Geometric Interpretation__ - As each `column` is a `vector` there is a `geometric interpretation`.

---

## Matrices for Linear Equations

* __Example__

    ```
    2x -  y = 0
    -x  + 2y = 3

    |  2  -1 | | x |  =  | 2 |
    | -1   2 | | y |     | 3 |

       A        x    =     b
    ```

* __Matrix Definition__ - `Ax = b`.

* __Row Picture (Equations)__ - The geometric interpretation defining `lines` for each `equation`. 

    ```
    |  2  -1 | | x |  =  | 2 |
    | -1   2 | | y |     | 3 |
    ```

    * Each `row` gives an `equation` for a `geometric` `line` (`plane`, `cube`, etc).

    * If the `lines` (`planes`, `cubes`. etc.) intersect at a `point` then that is a solution.

    > Complicated to visualize in more than two dimension

* __Column Picture (Linear Combinations)__ 

    ```
    x |  2 |  + y | -1 |  = | 2 | 
      | -1 |      |  3 |    | 3 |
    ``` 

    * The `factorization` of the `row picture equations`.
    
    * The equation is asking us to find the `right amount (values)` of the `columns (vectors)` to get the correct `answer`.
    
    * Each `column` gives a `linear combination` of `vectors`.

        > `Linear combinations` are a fundamental concept.

    * The `column view` is performing `vector addition` for a specific `value`. The correct values produce the `result vector`.

    * __All Linear combinations__ define a `line (1D)`, `plane (2D)`, `cube (3D)`, etc. 

    * Cane we solve `Ax = b` for all `b's`?

        * Do the `linear combination` fill the full `n-dimensional` space?

            * __YES__ - Is the matrix is invertible? If so then `yes`. 
            
            * __NO__ - If `some column vectors share  the same plane` i.e. if one `column vector` is the `addition` or `multiple` of another then a _dimension collapses_ and the answer is `no`.


---

## Multiply a Matrix by a Vector

* There are several way to do it: `column ways` and `row ways`.

> Multiplying a `matrix` but a `vector` will result in a `vector`.

* __Column Ways (Linear Combinations of A)__

    1. Iterate through each `i-th element` in the `vector` and use it to multiply each corresponding `i-th column vector`.

    2. __Sum__ the resulting column vectors.

    ```
    | 2 5 | | 1 |  =  1 * | 2 | + 2 * | 5 |  =  | 2 | + | 10 |  =  | 12 |
    | 1 3 | | 2 |         | 1 !       | 3 |     | 1 |   |  6 |     |  7 |
    ```

* __Row Ways (Dot Product)__

    1. Iterate through each `i-th row` in the `matrix` and multiply it by the `vector` 

        * Multiply corresponding `i-th elements` in each `vector` and `sum` the results. __Dot Product__.

    > This is the `dot product`.

    ```
    | 2 5 | | 1 |  =  | (1 * 2) + (2 * 5) |  =  | 2 + 10 |  =  | 12 |
    | 1 3 | | 2 |     | (1 * 1) + (2 * 3) |     | 1 +  6 |  =  |  7 |
    ```

---

## References

* [Linear Algebra - Video Lectures](https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/video-lectures/)
