# Continuously Refactored Code

> Optimise of Understandability

* [Effective Mental Models for Code and Systems](https://medium.com/@copyconstruct/effective-mental-models-for-code-and-systems-7c55918f1b3e)

## Introduction

> `code reviews` catch errors, ensure standards are met, and, spread knowledge.

> `refactoring code` should be a continual process to re-visit and re-modularise code to promote `clean`, `re-usable`, `efficient`, `tested` code. 

* Catch errors.

* Ensure readability.

* Check standards are met.

* Share knowledge.

---

## Best Practices

1. `refactor` as the project changes and as part of code review.

2. Consider all other aspects of best practice: `clean`, `modular`, `reliable`, `graceful`, `instrumented`, `secure`, `documented`, etc.

    ```text
    Is the code clean and modular?

        Can I understand the code easily?
        Does it use meaningful names and whitespace?
        Is there duplicated code?
        Can you provide another layer of abstraction?
        Is each function and module necessary?
        Is each function or module too long?

    Is the code efficient?

        Are there loops or other steps we can vectorize?
        Can we use better data structures to optimize any steps?
        Can we shorten the number of calculations needed for any steps?
        Can we use generators or multiprocessing to optimize any steps?

    Is documentation effective?

        Are in-line comments concise and meaningful?
        Is there complex code that's missing documentation?
        Do function use effective docstrings?
        Is the necessary project documentation provided?

    Is the code well tested?

        Does the code high test coverage?
        Do tests check for interesting cases?
        Are the tests readable?
        Can the tests be made more efficient?

    Is the logging effective?

        Are log messages clear, concise, and professional?
        Do they include all relevant and useful information?
        Do they use the appropriate logging level?
    ```

3. Use a code linter.

4. Explain issues and make suggestions.

5. Keep your comments objective.

6. Provide code examples.
---

## References

* [Code Reviews](https://github.com/lyst/MakingLyst/tree/master/code-reviews)

* [Code Reviews](https://www.kevinlondon.com/2015/05/05/code-review-best-practices.html)