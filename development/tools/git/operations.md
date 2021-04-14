# Git Operations

## Copy Repo to new Location

```bash
export NEW_URL="ssh://git@bitbucket.oci.oraclecorp.com:7999/~tlangfor/functions-console.git"
git remote set-url origin ${NEW_URL}
git push -u origin --all
git push origin --tags
```

* Can also update url directly in `.git/config`.

---

## Reset Single Folder or File

```bash
# Remove the directory if you do no want to keep uncommitted files.
rm -Rf packages/functions-console-plugin/shepherd-config
# Where the commit is the one to recover - e.g. origin/master HEAD
git checkout 89ec11147322d2536b72ead08ba9e08d53b12651 -- packages/functions-console-plugin/shepherd-config
```