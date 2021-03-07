# Determinants

## Overview

* `Linear Transformations` can stretch and squish space.

* The `basis vectors` define an `area` or `volume` for a co-ordinate system.

    * The ratio of this `area` or `volume` _before_ and _after_ of a the `transformation` is the `determinant`.

        * The `determinant` is the __scaling factor__ of a transformation. 

* A `transformation` is defined by a `matrix` so `matrices` have `determinants`.

* `determinants` describe what transformation do to a co-ordinate system.

    * `det > 1` - The co-ordinate space is _stretched_ in one or more directions. 

    * `det = 1` - No change,

    * `det > 0 < 1` - The co-ordinate space is _squished_ in one or more directions.

    * `det = 0` - The co-ordinate space is _squished_ onto a single plane, line, point, etc.

        > Squishes everything into a smaller dimension.

    * `det i negative` - The co-ordinate space `orientation` is flipped for that dimension.

        > j-hat moves from the left to the right of i-hat.
    
---

## Calculating the Determinant

* __2D Determinant__

    ```
    det | a  x |  =  ay - bx
        | b  y |
    ```

---

## Laws

* `det(M1, M2)  =  det(M1) * det(M2)`





---

## Resources

* [Essence of linear algebra - 3blue1brown](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)

* [The determinant | Essence of linear algebra](https://www.youtube.com/watch?v=Ip3X9LOh2dk&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=6)