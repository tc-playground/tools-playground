# Probability Mass Function

* A `probability mass function (PMF)` is a function that:

    * Gives the `probability` that a `discrete random variable` is _exactly equal_ to some `value`.

* `probability mass functions` instantiations are essentiality `histograms` for a set of `discrete values`.
    
* `probability mass functions` are a primary means of defining a `discrete probability distribution`.

* `probability mass functions` exist for either scalar or multivariate random variables whose domain is __discrete__.
    
* `probability mass functions` are sometimes named `discrete density function`.

* `probability mass function` are different from a `probability density function (PDF)`:

    * `probability mass function` are only for `discrete random variables`.

    * __NB__: `probability density functions ` are for `continuous random variables`.

        * These must be `integrated over an interval` to yield a probability. 

* The `mode` of a `probability mass function` is the `value` of the `random variable` having the `largest probability mass`.

    * The biggest column in the `histogram`.

* A `univariate probability mass function` is for a `single discrete random variable`.

* A `multivariate probability mass function` is a joint probability distribution for `two or more discrete random variables`:

    * The joint probability mass function assigns a probability to `each possible combination of values` for the random variables. 

---

## Models

* `bernoulli distribution` - model an experiment with 2 possible discrete outcomes. 

    * e.g. 2-sided coin toss.

    * The experiment is only run once.

* `categorical distribution` - model an experiment with `k` possible discrete outcomes. 

    * e.g. k-sided dice roll.

* `binomial distribution` - model the `number of successes` when someone draws `n` times with replacement with `2` possible discrete outcomes.

    * e.g. toss a 2-sided coin N times.

    * What is the probability of obtaining a given number x of successes given N tosses?

* `multinomial distribution` - model the `number of ks` when someone draws `n` times with replacement with `k` possible discrete outcomes. 

    * e.g. the probability of counts for each side of a `k`-sided die rolled `n` times.

    * When `k` is 2 and `n` is 1, the `multinomial distribution` is the `bernoulli distribution`.

---

## References

* [Bernoulli Distribution- Wikipedia](https://en.wikipedia.org/wiki/Bernoulli_distribution)

* [Categorical Distribution- Wikipedia](https://en.wikipedia.org/wiki/Categorical_distribution)

* [Binomial Distribution- Wikipedia](https://en.wikipedia.org/wiki/Binomial_distribution)

* [Multinomial Distribution- Wikipedia](https://en.wikipedia.org/wiki/Multinomial_distribution)

* [Probability Mass Function - Wikipedia](https://en.wikipedia.org/wiki/Probability_mass_function)

* [Joint Probability Distributions- Wikipedia](https://en.wikipedia.org/wiki/Joint_probability_distribution)

* [Bernoulli vs Binomial](https://towardsdatascience.com/understanding-bernoulli-and-binomial-distributions-a1eef4e0da8f)