# VEnv

## Virtual Environments

1. __virtualenv__ - Create and manage `virtual environments`.

    1. __Install__: `sudo apt install python3-venv`

    2. __Create__ : `python3 -m venv venv` 

        * `python3 -m venv /path/to/new/virtual/environment`

    3. __Start__  : `source venv/bin/activate`

        * `python3 -m venv /path/to/new/virtual/environment/bin/activate`

    4. __Usage__ : 

        * `python` will run the venv python version.

        * `pip install` will install python packages.

    4. __Stop__  : `deactivate`

> A virtual environment will allow you to use isolated python runtimes, libraries, linters, etc.