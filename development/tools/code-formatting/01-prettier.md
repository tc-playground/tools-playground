# Prettier

## Introduction

- `prettier` is a code formatting tool.

- `prettier` can be installed via `npx`, `npm`, `yarn`.

  - The **version should be pinned** to prevent upgrades causing unplanned errors in linting.

  - `npx prettier@2.0.5 . --write`

- `prettier` can be run from the command line:

  - __General__ - `prettier [options] [file/dir/glob ...]`

  - __Format Files__ - `prettier --write .`

- `prettier` can be integrated with `linting` tools.

- `prettier` can be integrated with `pre-commit` tools.

- `prettier` has integration extensions for various editors.

---

## Ignore Configuration

- `ignore comment directives` can be specified in various [languages](https://prettier.io/docs/en/ignore.html).

- A `.prettierignore` file can be defined in a project to ignore certain files types.

  ```bash .prettierignore
  # Do not format markdown files.
  *.md
  ```

---

## References

* [Prettier - Home](https://prettier.io/)

* [Prettier - Docs](https://prettier.io/docs/en/index.html)
