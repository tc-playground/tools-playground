# Vectors

## Overview

* Vectors

* Vector Arithmetic

* Basis Vectors

* Linear Combination, Spans and Linear Dependence

---

## Vectors

1. `vectors` have an `origin`, `direction`, and `length`.

2. `vectors` are `arrows in space`.

3. `vectors` are `ordered lists of numbers`.

4. `vectors` are normally written in a vertical format. 

    ```
    +- -+
    | 1 |
    | 2 |
    | 3 |
    +- -+
    ```

* __Spatial Interpretation__ :  `vectors` have a `spatial` interpretation in a cartesian n-dimensional space.

* __Geometric (Numerical) Interpretation__ : `vectors` can be handled algebraically.

> Easier to think of `individual vectors as arrows` and `sets of vectors as points`.

---

## Vector Arithmetic

1. __Vector Addition__ - Vectors of the same size (dimensionality) can be added by adding the corresponding elements together.

    ```
    +- -+   +- -+   +- -+
    | 1 |   | 2 |   | 3 |
    | 2 | + | 3 | = | 5 |
    | 3 |   | 4 |   | 7 |
    +- -+   +- -+   +- -+
    ```

2. __Scalar Multiplication__ - All elements in a vector can be `scaled` by a constant.

    ```
    +- -+         +- -+
    | 1 |         | 3 |
    | 2 | *  3  = | 6 |
    | 3 |         | 9 |
    +- -+         +- -+
    ```

---

## Basis Vectors and Co-ordinate Systems

1. The scalar values in a vector represent a scalar multiplication operation on each dimensions `basis vector`.

2. A set of `basis vectors` defines a co-ordinate system:

    * e.g. 2D `i-hat` `[1 0]t` and `j-hat` `[1 0]t`.

> A `vector` can be interpreted as the `scalar multiplication` of the `unit basis`.

    ```
    +- -+     +-         -+
    | 1 |     | 1 * x-hat |
    | 2 |  =  | 2 * y-hat |
    | 3 |     | 3 * z-hat |
    +- -+     +-         -+
    ```
---

## Linear Combinations, Spans, and Linear Dependencies.

1. A `linear combination` is the `scaling` and `addition` of two vectors `V` and `W`:

    > e.g. `aV + bW`

    * If one scalar is fixed the tip of the result must lie a straight line.

    * If zero scalars are fixed the tip of the result can lie at any point in the plane, except:

        * When the two vectors occupy the same line. (they are `linearly dependent`)

        * When we have a zero vector.

2. The `span` of `V` and `W` is the set of all their `linear combinations`.

    > e.g. `aV + bW` - Let `a` and `b` vary across all the `real numbers`.

3. If a vector sits on the `span` of another set of vectors then they are `linearly dependent`.

    > e.g. 2D: Both vector occupy the same line.
    > e.g. 3D: A vector occupies the plane created by the other two vector.

    * __Linearly Dependent__ - One of the vectors can be expressed as a `linear combination` of the others.

        > e.g. `U = aV + bW` - for some values of `a` and `b`.

4. If a vector add a `new dimension` to the `span` of another set of vectors then they are `linearly independent`.

* `linear combinations` and `spans` can be `n-dimensional`:

    > e.g. `aV + bW + cX` for 3 dimensions. The `span` here forms a `plane`.

---

## Basis

1. The `basis` of a vector space is a set of `linearly independent` vectors that `span` the full space.

2. Any vector can be described as a `linear combination` of the `basis` vectors.

---

## References

* [Essence of linear algebra - 3blue1brown](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)

* [Vectors, what even are they?](https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=1)

* [Linear combinations, span, and basis vectors ](https://www.youtube.com/watch?v=k7RM-ot2NWY&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=2)