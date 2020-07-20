# Source Maps

1. `source maps` map `minified`, `transpiled` code, back to the `original source file` and `location`.

    1. `source maps` are like `debug symbols` for `JavaScript`.

2. `source maps` are designed for `efficient transmission` over the internet:

    1. `Base 64` encoding.

    2. ``Variable Length Quantity (VLQ)` encoding.

3. `source maps` are stored in the `mappings` element of a `source map file`.

    1. `source maps` map `files`, `lines`, and, `columns`.

    2. `source maps` can map `any kind of text` - JavaScript, Sass, Css, etc.

    3. `source maps` map `1 output file` to `N input files`.

    4. `source maps` are referenced from the bottom of the main `output file` on a relative path.

        * `//# sourceMappingURL=/path/to/file.js.map`

    5. `source maps` can also be referenced by setting a special header on the main `output file`.

        * `X-SourceMap: /path/to/file.js.map`

4. `source maps` are split in `groups`

    1. Each `group` is delimited by `;`.

    2. There is one group `per-line in the transpiled file.`.

5. `source map groups` are split into `segments`.

    1. Each `segment` is delimited by `,`.

    2. Each `segment` contains some information about mapping location between `original` file and `transpiled` file.

    3. Every character of each `segment` is a `Base64 VLQ` encoded character encoding:

        1. Column number in `transpiled file`.

        2. Corresponding `source file`.

        3. Line number in `source file`.

        4. Column number in `source file`.

6. `Base64 VLQ` encoding is used because a large project that ahs been minified into single file, may, have large integer indexes!

---

## References

* [Source Maps - Deep Dive](https://medium.com/@trungutt/yet-another-explanation-on-sourcemap-669797e418ce)

* [Source Maps - Specification](https://sourcemaps.info/spec.html)

* [Source Maps - HTML5 Rocks](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)

* [Source Maps Mozilla - GitHub](https://github.com/mozilla/source-map)

* [VLQ - GitHub](https://github.com/Rich-Harris/vlq)

* [Base64 - YouTube](https://www.youtube.com/watch?time_continue=221&v=8qkxeZmKmOY&feature=emb_titlee)

* [Source Maps - YouTube](https://www.youtube.com/watch?3&v=6LI0BJIiamg)

