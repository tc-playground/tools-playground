# PiPy

* The `Python Package Index (PyPI)` stores metadata describing distributions packaged with `distutils` and other publishing tools, as well the distribution archives themselves.

---

## Example

```bash
cd binomial_package_files
python setup.py sdist
pip install twine

# commands to upload to the pypi test repository
twine upload --repository-url https://test.pypi.org/legacy/ dist/*
pip install --index-url https://test.pypi.org/simple/ dsnd-probability

# command to upload to the pypi repository
twine upload dist/*
pip install dsnd-probability
```

---

## References

* [pypi.org](https://pypi.org/) - Official Repositories.

* [test.pypi.org](https://test.pypi.org/) - Test Repositories.

* [Python Packaging Tutorial](https://packaging.python.org/tutorials/packaging-projects/)

* [Publishing Python Packages](https://docs.python.org/3/distributing/index.html#publishing-python-packages)
