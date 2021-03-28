# Web Server

## Overview

* Create a type by using the `struct` keyword.

* Add behaviour to a type by using an `impl` block.

* `Newtype Pattern`

* `Fluent API Pattern`

* __`Option` Type__

    * A special type to handle if a value is exists and is not null or undefined.

    * Can be used to specify fields that are `optional`.

* __Associated Function Syntax__ - `::`  - Invoke an `impl` method on a `struct`.

    * Dont need a `self` parameter. Used for `constructors` on structs

    * `<SomeStruct>::<SomeMethod>(<Params>);`

* __Method Syntax__ - `.` - Invoke an `impl` method on a `struct`.

    * Required a `self` parameter as first argument.

* __Strings__

    * __String Type__ : `String` - Is resizeable. Own and modify text. Used mostly with `structs`.

    * __string slice__ : `&str` - Is fixed size. Access text. Used mostly with test in a `function`.

    > Have different types of stack pointer op the stack.

* __Rust Stack and Heap__

    * __Stack__ - Stores fixed size types: `primitive types`, `complex type heap pointers`.

        * `bool`, `char`, `usize`, `i16`, etc.

    * __Heap__ - Stores dynamic sized typed: `complex types`.

        * `Vec`, `HashMap`, `Arc`, `String`, `Box`, etc.

        * `Vev` is like an `array` in other languages,

* __Ownership__

    * Primitive types have the `Copy` trait implemented by default.

    * Passing a value is moving the ownership.

* __Traits__

    * Like `interfaces`.

    * `Display` trait is implemented on all primitive types in Rust.

    * `Debug` trait can be used for complex structures via the `#[derive()]` traits on structs.
    

