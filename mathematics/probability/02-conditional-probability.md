# Conditional Probability

---

## Dependencies

* Multiple `events` may sometimes be `dependent`.

    * `P(BecomingAProfessor)` probably depends on `P(BeingBornSmart)`. 

---

## Conditional Probability

* __Probability of cancer__

    ```
    P(Cancer) =  0.1
    P(¬Cancer) = 0.9
    ```

* __Conditional probability of the accuracy of a test to determine if a patient has cancer__

    ```
    P(Positive | Cancer) = 0.9
    P(Negative | Cancer) = 0.1
    P(Positive | ¬Cancer) = 0.2
    P(Negative | ¬Cancer) = 0.8
    ```

    > `P(A | B)` - Read the `probability of B given A`.

* __Truth Table__

    ```
    Condition | Test        P(Cancer | Test)
    ----------+----------
    Cancer    | Positive    0.09    (0.1 * 0.9)
    Cancer    | Negative    0.01    (0.1 * 0.1)
    ¬Cancer   | Positive    0.18    (0.9 * 0.2)
    ¬Cancer   | Negative    0.72    (0.9 * 0.8)
    ```

---

* __Total Probability__

    * `P(T) = P(T|C)) * P(C) + P(T|¬C) * P(¬C)`

    ```
    P(PositiveTestResult) = (0.1 * 0.9) + (0.9 * 0.2) = 0.09 + 0.18 = 0.27
    ```

    > The 'Law of Total Probability' is derived from the underlying 'truth table'.



