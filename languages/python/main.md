# Python Entrypoints

## Introduction

1. __Interpreter Entrypoint__

    1. When python interpreter executes a file directly it defines a variable `__name__` whose value is set as `__main__`.
    
    2. __Define__ a check to determine if the file has been executed directly by the interpreter:

        ```python
        if __name__ == '__main__':
            main()
        ```

        1. `main()` will be executed when the python interpreter _executes the file directly_.

        2. `main()` will not be executed when the python interpreter _imports the file as a module_.

2. __Command Line Arguments__

    1. `sys.argv` - The command-line arguments are stored in a `string array`.

    2. `sys.argv[0]` - The first argument is the name of the python script that was the entrypoint.

    3. `argparse` / `optparse` - Is a standard module to help with processing command-line arguments.

3. __optparse module__ - Handle commandline options.

    1. Parse command line arguments:

        ```python
        import optparse
        parser = optparse.OptionsParser()
        parser.add_argument("--nice", type=str2bool, nargs='?',
                            const=True, default=False,
                            help="Activate nice mode.")
        (options, errors) = parser.parse_args()
        print(options.nice)
        ```
