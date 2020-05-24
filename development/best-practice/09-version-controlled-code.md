# Version controlled Code

## Introduction

> `version control` should be used with a `branching` strategy to manage the `audited` incorporation of new code into the system.

---

## Best Practices

* Good `commit messages` should be paramount. Links to other development resource (e.g. `JIRA tickets`) should be included where applicable.

    * Artifacts such as `data science models` should contain details of the parameters, datasets, and other properties used in their generation.

* A `semantic version numbering` mechanism should be used to tag branches with a `version number` for the generated artifacts.

---

## Examples

1. __Merge based__

    ```bash
    # Commit changes on documentation branch
    git commit -m "standardized all docstrings in process.py"
    # Switch to develop branch
    git checkout develop
    # Pull latest changes on develop down
    git pull
    # Merge documentation branch to develop
    git merge --no-ff documentation
    # Push changes up to remote repository
    git push origin develop
    # Merge develop to master
    git merge --no-ff develop
    # Push changes up to remote repository
    git push origin master
    ```

---

## References

* [Git - Version Control System](https://git-scm.com)

    * [Git - Docs](https://git-scm.com/doc)

* [Semantic Versioning 2.0](https://semver.org)

* [Versioning Machine Learning Models](https://algorithmia.com/blog/how-to-version-control-your-production-machine-learning-models)

