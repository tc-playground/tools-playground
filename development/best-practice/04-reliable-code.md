# Reliable Tested Code

## Introduction

> `reliable code` is code that is tested and proven to behave in a certain manner.

1. Test functions in a way that is `repeatable` and `automated`.

2. It is easier to test `pure functions` that have no `side-effects`.

3. A program can often be `refactored` into `pure functions` that are more easily tested.

4. Running a `test suite` should run all tests and return any that failed.

5. In `test driven development` the tests are written before the code.

6. Test all functions interact correctly and return good error messages.

7. Tests can check for all the different scenarios and edge cases.

8. Tests can check that good errors are returned in the event of failure.

9. When refactoring or adding to code, tests help ensure existing functionality does not regress.

---

## Best Practices - Code

1. __Unit Tests__

    1. `Unit Tests` test functions that are isolated from the rest of your program with no `dependencies` are involved.

        1. The `code` can be `refactored` into `pure functions` that have no `side-effects` and have consistent `outputs`. based on `inputs`. 

        2. The `tests` can use `mocks` and `canned-data` to ensure functions with `side-effects` have consistent `outputs`.
    
    2. `Mocks and Canned Data` can be used to make functions with side-effects deterministic.

    3. `Spies` can be used to asset on metrics about runtime behaviour, e.g. _How many times function is invoked_.

    4. `Generative Testing` is where a supporting library is used to generate `input` for the code under test based on a `generator` and some `criteria`.
    
    5. `Test Driven Development` is where writing tests is done __before__ you writing the code under test.


2. __Integration Tests__

    1. `Integration Tests` show that the `components` in a program work together correctly.


---

## Best Practices - Data Models

1. __Data Provenance__

    * Understand where the data came from and how it was gathered.

2. __Data Cleanliness__

    * Correct Encoding

    * Appropriate Features


---

## References - Code Testing

* __Python__

    * [Testing Code](https://docs.python-guide.org/writing/tests/)

    * [Unit Testing - Python](https://www.fullstackpython.com/unit-testing.html)

    * [Integration Testing - Python](https://www.fullstackpython.com/integration-testing.html)


---

## Reference - Data Science Testing

* [Data Science and Test Driven Development](https://www.linkedin.com/pulse/data-science-test-driven-development-sam-savage/)

* [Test-Driven Development for Data Science ](http://engineering.pivotal.io/post/test-driven-development-for-data-science/)

* [Test Driven Development is essential for good data science. Here’s why.](https://medium.com/uk-hydrographic-office/test-driven-development-is-essential-for-good-data-science-heres-why-db7975a03a44)


