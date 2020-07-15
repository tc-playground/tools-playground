# Inheritance vs Composition

## Introductions

* `inheritance` use the `extends` keyword.

* `composition` uses a `reference` to another object and requests are `delegated` to that object.

* __favour object composition over inheritance__.


---

## Inheritance

* `base class` is `extended via inheritance` to add custom functionality.

* Classes are bound by a `is a` relationship.

* `static` - extension can only be used once, so, this can prevent re-use if the base type precludes certain extensions.

* NB: `multiple inheritance` can be emulated by copying methods from multiple source object onto a new object.

    * This is done via `Object.assign()`.

    * This is bad practice as it may lead to errors and other issues associated with multiple inheritance.

---

## Composition

* `base class` contains a `reference` and `delegates` to that to implement custom functionality.

* Classes are bound by a `has a` relationship.

* `dynamic` - can plugin in requirements.

* `favour object composition over inheritance`.

* NB: Do not confused this with `concatenative composition` which is fact `multiple inheritance`.
