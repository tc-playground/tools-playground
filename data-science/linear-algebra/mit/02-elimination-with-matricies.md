# Lecture 2: Elimination with matrice 

* [Video](https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/video-lectures/lecture-2-elimination-with-matrices/)

---

## Introduction

* __Elimination__ A method to solve a set of linear equations. Usually expressed as `matrix operations`.

    * Will `succeed` if the matrix is good.

    * Will `fail` if one or more `column vectors` lie on same `n-dimensional plane`.

* __Back Substitution__

* __Elimination Matrices__

* __Matrix Multiplication__

---

## Elimination

```
 x + 2y + z = 2
3x + 8y + z = 12
     4y + z = 2

| 1 2 1 | | x |       | 2  |
| 3 8 1 | | y |    =  | 12 |
| 0 4 1 | | z |       | 2  |

    A         x    =    b

| 1 2  1 |  | x |     | 2  |  <-- First row first column selected as pivot (1,1).
| 0 2 -2 |  | y |  =  | 6  |  <-- (2, 1) Step - Subtract 3 times the first row from the second. This eliminates (2,1).
| 0 4  1 |  | z |     | 2  |  <-- (3, 1) Step - Subtract 0 times the first row from the third. This is already 0. So, nothing to do.

| 1 2  1 |  | x |     |  2 |  <-- Done.
| 0 2 -2 |  | y |  =  |  6 |  <-- Second row first column selected as pivot (2,1).
| 0 0  5 |  | z |     | -2 |  <-- (3, 2) Step - Subtract 2 times the second row from the third. This eliminates (3,2).

    U         x

```

> The equations can be re-ordered.

> The equations can be multiplied. Use this to eliminate variable by finding the correct

1. Select the first equation.

2. Select the `pivot` in that equation.

3. For each other equation. Find a mulitple of the `pivot` that when `subtracted` will `eliminate` the value (make it 0).

4. Recursively apply this method to pivots (2, 2), (3, 3), etc.

---

## References

* [Linear Algebra - Video Lectures](https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/video-lectures/)
