# jq Command

## Introduction

* `jq` is a command line tool for processing `JSON` format data.

---

## Examples

* __Filtering using `select`__

    ```bash
    $ json='[{"genre":"deep house"}, {"genre": "progressive house"}, {"genre": "dubstep"}]'
    $ echo "$json" | jq -c '.[] | select(.genre | contains("house"))'
    ```

* __Filtering using `select` and using `array constructor` to create a new list__

    ```bash
    $ json='[{"genre":"deep house"}, {"genre": "progressive house"}, {"genre": "dubstep"}]'
    $ echo "$json" | jq -c '[ .[] | select( .genre | contains("house")) ]'
    ```

* __Filtering using `select` and using `map operator` to create a new list__

    ```bash
    $ json='[{"genre":"deep house"}, {"genre": "progressive house"}, {"genre": "dubstep"}]'
    $ echo "$json" | jq -c '.[] | map(select( .genre | contains("house")))'
    ```
---

## References

* [jq - Github](https://github.com/stedolan/jq)

* [jq - Manual](https://stedolan.github.io/jq/manual)

* [jq - Tutorial](https://stedolan.github.io/jq/tutorial)

* [jq - Cookbook](https://github.com/stedolan/jq/wiki/Cookbook)