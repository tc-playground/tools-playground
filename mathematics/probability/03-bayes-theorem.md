# Bayes Theorem

## Introduction

* Calculate an estimate of the probability of a hidden variable based on the evidence of a test.

* When we have uncertainty of the reliability of the even generation process itself.

* Probability of a probability.

---

## Bayes Rule

* `P(A|B) = P(B|A) * P(A) / P(B)`

    * where `A` and `B` are events and `P(B) ≠ 0`

    * `P(A∣B)` is a `conditional probability`: the likelihood of event `A` occurring given that `B` is true.
    * `P(B∣A)` is a `conditional probability`: the likelihood of event `B` occurring given that `A` is true.
    * `P(A)` the (`marginal`) probability of observing `A`.
    * `P(B)` the (`marginal`) probability of observing `B`.

---

## False Positives

* `sensitivity` - probability a test is a `true positive`.

* `specificity` - probability a test is a `true negative`.

---

## Probabilistic Inference

* `prior probability` * `test evidence` -> `posterior probability`

    * `prior probability` is the initial belief.

    * `test evidence` is some data from an experiment related to your initial belief. 

    * `posterior probability` is the probability after the evidence.

* __Algorithm__

    1. `Given`:

        1. `hidden variable prior` - `P(C)`
        2. `test sensitivity probability` - `P(T+|C)`
        3. `test specificity probability` - `P(T-|¬C)`

    2. `Calculate Complements`:

        1. `P(¬C)`
        2. `P(T+|¬C)`
        3. `P(T-|C)`
    
    3. `Calculate joint probabilities fo T+` (or `T-`):

        1. `P(C,T+)  = P(C) * P(T+|C)`
        2. `P(¬C,T+) = P(¬C) * P(T+|¬C)`
    
    4. `Calculate the normaliser`:

        1. `P(T+) = P(C,T+) + P(¬C,T+)`
    
    5. `Calculate the posterior probabilities`

        1. `P(C|T+)  = P(C,T+)  / P(T+)`
        2. `P(¬C|T+) = P(¬C,T+) / P(T+)`


* __Example Cancer__

    * `percentage of cancer in population`: 1%
    
    * `percentage of true positive tests`: 90%

        > `sensitivity` - `P(T+|C)`

    * `percentage of true negative tests`: 90%

        > `specificity` - `P(T-|¬C)`

    * __priors__

        ```
        P(C)     = 0.01, P(¬C)    = 0.99
        P(T+|C)  = 0.9,  P(T+|¬C) = 0.1
        P(T-|C)  = 0.1,  P(T-|¬C) = 0.9
        ```

    * __joint probability__

        ```
        P(C,T+)  = P(C) * P(T+|C)   = 0.01 * 0.9 = 0.009
        P(¬C,T+) = P(¬C) * P(T+|¬C) = 0.99 * 0.1 = 0.099
        ```
    
    * __total probability normaliser__

        ```
        P(T+) = P(C,T+) + P(¬C,T+) = P(C) * P(T+|C) + P(¬C) * P(T+|¬C) = 0.009 + 0.099 = 0.108
        ```
    
    * __Posterior__

        ```
        P(C|T+)  = P(C,T+) / P(T+)  = 0.009 / 0.108 = 0.08333333333
        P(¬C|T+) = P(¬C,T+) / P(T+) = 0.099 / 0.108 = 0.91666666666
        ```

---

## References

* [Bayes Theorem - 3Blue`Brown](https://www.youtube.com/watch?v=HZGCoVF3YvM)

* [A Bayesian Review of Amazon Resellers](https://www.johndcook.com/blog/2011/09/27/bayesian-amazon/)

* [Bayes Theorem - Wikipedia](https://en.wikipedia.org/wiki/Bayes%27_theorem)