# Dereferencing

## Introduction

* `Dereferencing` is the act of getting or setting a value in a nested structure.

---

## Syntax

* `as` - Type cast

    * e.g. `const castObj = obj.prop1 as SomeType` - Cast an `object` to a different type if applicable by `duck typing`.

* `?` - Optional.

    * e.g. `obj?.prop1.prop2` - Access 'prop2' returning `Undefined` if 'prop1' does not exist.

* `!` - Assert exists.

    * e.g. `obj.prop1.prop2!` - Assert 'prop2' will exist and not be `Undefined`.