# Configuration

## Introduction

1. `vscode` stores settings in `json files`, and, has a `settings editor` to search and configure these files.

2. There are `user` (_global_) settings that can overridden by `workspace` (_project_) settings.

   1. `user settings` are located at `${HOME}/.config/Code/User/settings.json`.

   2. `project settings` are located at `${WORKSPACE_DIR}/.vscode/settings.json`.

3. The `settings editor` can be accessed via `Preferences` - `Settings` (or `ctrl+,`).

   1. Perform a _fuzzy search_ to find the desired `setting`.

   2. In the `settings editor` you can switch between the `user` and `workspace` configurations.

   3. When in the `settings editor` the button at the top-right can be used to open the `json settings file` for the settings.

---

## Language Specific Setting

- `Language specific settings` can be managed by typing the `language key name` in the fuzzy search:

  - e.g. `markdown settings`

- `Language specific settings` can be managed in the `json setting file` under the `language key name`.

  ```md
  "[markdown]": {
    "editor.formatOnSave": false
  }
  ```

---

## References

- [VSCode - User and Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings)
