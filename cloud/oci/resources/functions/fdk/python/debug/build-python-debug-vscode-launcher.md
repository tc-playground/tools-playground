# VSCode Launcher

1. Ensure `fdk` source is in the correct place. Git clone/pull to `.fdk_debug`.

2. Ensure `func.py` source is in the correct location.

3. `.vscode/launch.json`

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python Attach",
            "type": "python",
            "request": "attach",
            "pathMappings": [
                {
                    "localRoot": "${workspaceFolder}/fdk",
                    "remoteRoot": "/python/fdk"
                },
                {
                    "localRoot": "${workspaceFolder}/function",
                    "remoteRoot": "/function"
                }
            ],
            "port": 5678,
            "host": "127.0.0.1"
        }
    ]
}
```