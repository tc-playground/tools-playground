# Probability

---

## Random Variables

* `random variables` are an entity representing a sequence of `events` or `experiments`.

    * __Discrete binary events__ 

        * `coin flip` - `{Head | Tail}`.

    * __Discrete categorical events__ 

        * `dice roll` - `{1, 2, 3, 4, 5, 6}`.

        * `marble from bag` - `{red, red, green, blue}`.

    * __Continuous events__

        * `measure temperature` - `real numbers`.

* `distribution function` of a random variable `X` is the probability of an `event XN` occuring when performing an `experiment`.

* `bernoulli trial` - Is a single experiment.

---

## Independence

* `composite events` are a sequence of events in a particular order.

    * `coin flips`

    * `dice rolls`.

    * `marble from bag`

* `independent composite events` have no affect on each other:

    * `coin flips`

    * `marble from bag with replacement`

* `dependent composite events` have an effect on each other:

    * `marble from bag without replacement`

---

## Laws of Probability

* `P(X1) + ... + P(XN) === 1` - The sum of probabilities for a `random variable` is `1`.

* `P(X)` - The probability of an event `X` occurring.

* `1 - P(X)` - The probability of an event `X` NOT occuring. __Complement Rule__.

* `P(X1) * ... * P(XN)` - The probability of a `composite event` occuring. __Product Rule__.


---

## __Truth Tables__

* `truth tables` and the `product rule` can be used to determine the probabilities of `composite` events when the `distribution function` of a random variable `X` is known.

* `permutations` and `combinations` on `discrete random variable` can be used to determine the `truth table` as applicable.

* __Product Rule__ - `P(H, H) === P(H) * P(H)`

* __Example__

    * Distribution function: `P(H) = 0.6` `P(T) = 0.4`

    * Truth Table

        ```
        Flip-1  Flip-2
        H       H       0.36
        H       T       0.24
        T       H       0.24
        T       T       0.16
        ```

---

## References

* [Introduction to Probability - Charles M. Grinstead](https://www.dartmouth.edu/~chance/teaching_aids/books_articles/probability_book/amsbook.mac.pdf)

* [Probability and Statistics - Toronto](http://www.utstat.toronto.edu/mikevans/jeffrosenthal/book.pdf)