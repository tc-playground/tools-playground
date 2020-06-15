# PYTHONPATH

## Introduction

* `PYTHONPATH` augment the default search path for `module files`.

    * This allow module to be run with `-m` option: `python -m my_module`.

* `PYTHONPATH` is an `environment variable` 

* `PYTHONPATH` is a delimited set of `shell paths` to `python modules`.

    * __unix__ - `PYTHONPATH=/path_one/some_dir:/path_two/some_other_dir`

* `PYTHONPATH` entries may refer to zipfiles containing pure Python modules (in either source or compiled form). 

    * NB: Extension modules cannot be imported from zipfiles.

> The main reason to set PYTHONPATH is to maintain directories of custom Python libraries that you do not want to install in the global default location.

---

## References

* [python](https://docs.python.org/3/using/cmdline.html)

