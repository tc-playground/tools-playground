# Lecture 2: Elimination with matrice 

* [Video](https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/video-lectures/lecture-2-elimination-with-matrices/)

---

## Introduction

* __Elimination__ A method to solve a set of linear equations. Usually expressed as `matrix operations`.

    * Will `succeed` if the matrix is 'good'. Has linear combination in all dimension.

    * Will `fail` if one or more `column vectors` lie on same `n-dimensional plane`.

* __Back Substitution__

* __Elimination Matrices__

    * Express `Gaussian elimination steps` in terms of `matrices` and `matrix multiplication`.

    * The set of stepwise  `elimination matrices` required to solve an initial matrix can be combined into a single `elimination matrix` 

        * This is achieved by multiplying the `elimination matrices` together in order.

* __Matrix Multiplication__


    * `Associative` - The `brackets` around matrix algebra expressions can be moved.

    * `Non-Commutative` - The `order` of the matrices matters when multiplying them.

---

## Gaussian Elimination

```
# Equations

 x + 2y + z = 2
3x + 8y + z = 12
     4y + z = 2

# Matrix Form

| 1 2 1 | | x |       | 2  |
| 3 8 1 | | y |    =  | 12 |
| 0 4 1 | | z |       | 2  |

    A         x    =    b

# Gaussian Elimination

## Steps (2,1) and (3,1)

| 1 2  1 |  | x |     | 2  |   <-- First row first column selected as pivot (1,1).
| 0 2 -2 |  | y |  =  | 6  |   <-- (2, 1) Step - Subtract 3 times the first row from the second. This eliminates (2,1).
| 0 4  1 |  | z |     | 2  |   <-- (3, 1) Step - Subtract 0 times the first row from the third. This is already 0. So, nothing to do.

## Step (2,2)

| 1 2  1 |  | x |     |   2 |  <-- Done.
| 0 2 -2 |  | y |  =  |   6 |  <-- Second row first column selected as pivot (2,1).
| 0 0  5 |  | z |     | -10 |  <-- (3, 2) Step - Subtract 2 times the second row from the third. This eliminates (3,2).

    U         x    =     c

# Back Substitution

 x + 2y +  z = 2
     8y - 2z = 6
          5z = -10

z = -2
y =  1
x =  2
```

1. Select the first equation.

2. Select the `pivot` in that equation. Pivots cannot be `0`.

3. For each other equation. Find a mulitple of the `pivot` that when `subtracted` will `eliminate` the value (make it 0).

4. Recursively apply this method to pivots (2, 2), (3, 3), etc.

> The equations can be multiplied and one subtracted from another.

> The equations can be re-ordered - `row exchange`.

> There may be no result or solution. This will happen if there are not `n pivots`.

> If there is a solution a diagonal of `1s` with everything 'underneath' being `0` - `upper triangular form` - `U`.

> The sum of the resulting pivots is the `determinant`.

> `Augmented Matrix` - Equation Matrix with the result appended as an additional column.

---

## Matrix Elimination - What are elimination steps expressed as matrix operations?

* `Row Vector` - `1 x n` matrix.

> `Row Vector * Matrix  =>  Row Vector` 

    * order matters: (RV1 * MRow1) + (RV2 * MRow2) +  ... + (RVN + MRowN) 

    * Linear Combination of Rows

> `Column Vector` - `n x 1 matrix.

> `Matrix * Column Vector =>  Column Vector` 

    * (order matters): (MCol1 * CV1) + (MCol2 * CV2) +  ... + (MColN + CVN) 

    * Linear Combination of Columns

* What is the matrix that performs the first step of Gaussian elimination?

    * What is the matrix that subtracts `n multiples of row 1 from row 2` (and leaves the other rows the same)?

```
## Elimination Step (2,1) - What is the Matrix?

| ? ? ? |     | 1 2 1 |     | 1 2  1 |
| ? ? ? |  *  | 3 8 1 |  =  | 0 2 -2 |
| ? ? ? |     | 0 4 1 |     | 0 4  1 |

|  1 0 0 |     | 1 2 1 |     | 1 2  1 |
| -3 1 0 |  *  | 3 8 1 |  =  | 0 2 -2 |
|  0 0 1 |     | 0 4 1 |     | 0 4  1 |

  E(2, 1)

|  1 0 0 |  < E(2,1) is the elimination matrix that will perform the elimination step on equation 2 entry (2,1) for the pivot (1,1).
| -3 1 0 |
|  0 0 1 |
```

* Check/Recompute a single entry in the result matrix using the Dot Product.

    ```
    ## Check R(2, 3)

    |  1 0 0 |     | 1 2 1 |     | 1 2  1 |
    | -3 1 0 |  *  | 3 8 1 |  =  | 0 2 -2 |
    |  0 0 1 |     | 0 4 1 |     | 0 4  1 |

        M1             M2           R

    * Check Row 2 of M1 and Col 3 of M2.

    * Calculate Dot Product - (-3 * 1) + (1 * 1) + (1 * 0) = -3 + 1 + 0 = -2  
    ```


---

## Identity MAtrix

```
| 1 0 0 |
| 0 1 0 |
| 0 0 1 |
```

---

## References

* [Linear Algebra - Video Lectures](https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/video-lectures/)
