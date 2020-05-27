# `OOP` - object-oriented programming.

## Introduction

* `class` - a blueprint consisting of `methods` and `attributes`.

* `object` - an instance of a class.

* `attribute` - a descriptor or characteristic. _Characteristics_. _Nouns_.

* `value` - of an `attribute`.

* `method` - an action that a class or object could take. _Actions_. _Verbs_.

* `encapsulation` - allows you to hide implementation details of a class.

* `inheritance` - denoted one class extends another.

* `composition and delegation` - an alternative to `inheritance`.

* `instantiation` - when a `claas` is `instantiated` via a `constructor` to create a new `object` in memory.

* `function vs method`

    * `functions` are free standing.

    * `methods` are `function` that are `bound` to an `object`. This object is always implicitly passed in as a parameter called `self`.

* `private variables, functions, and methods`

    * By convention Python prefixes private structures with an underscore: e.g. `_some_function(self)`

* `direct attribute access vs accessors`

    * Python allows `direct access` of `attributes` in an `object`.

    * It may preferable to only access attributes via `getters` and `setters` to provide an `interception point` on access. 
