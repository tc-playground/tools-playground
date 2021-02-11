## Run Local - No Docker Containers

1. __Run Function__ - Try running the function as is...

  * __Create__ : `cd node-fn-01`
  * __Run__ : `node func.js`

  > Hmmm, no FDK (unless it is installed via NPM somewhere on your machine)...

2. __Install the FDK OR link in the local checked Github version__

  * __Install__ : `npm install`

  * __Link__

    * Configure __NPM__ to use the checked-out Github `fdk-node` to serve as the global package: `cd fdk-node && npm link`.

      ```bash
      ~/Work/spaces/fn-project/fdk-node
      $> npm link
      up to date in 7.07s
      ~/.nvm/versions/node/v10.17.0/lib/node_modules/@fnproject/fdk -> ~/Work/spaces/fn-project/fdk-node
      ```

      > You just need to do this bit once when the repo is checked out.

    * Configure __NPM__ to use the checked-out Github `fdk-node` to serve as the global package: `cd ${your-func} && npm link @fnproject/fdk`.

      ```bash
      $> npm link @fnproject/fdk
      ~/Work/spaces/fn-project/_projects/apm/apm-app/node-fn-04/node_modules/@fnproject/fdk -> ~/.nvm/versions/node/v10.17.0/lib/node_modules/@fnproject/fdk -> ~/Work/spaces/fn-project/fdk-node
      ```

  * __Run__ : `node func.js`

  > Hmmm, we need some mandatory environment variable...

3. __Run Function (again)__

  * __Clean UP__ : `rm -f some-socket some-socket.tmp && FN_FORMAT=http-stream FN_LISTENER=unix:some-socket node func.js`
  * __Test__ : `curl --unix-socket ./some-socket.tmp localhost/call -X POST -d '{ "name": "Functions Team" }'; echo`

  > Cool it works! Lets make it a bit more like the real thing by wrapping the unix-socket.

4. __Wrap Unix Socket__

  * __Wrap Socket__ : `socat TCP-LISTEN:1234,reuseaddr,fork UNIX-CLIENT:some-socket`
  * __Test__ : `curl -X POST localhost:1234/call -d '{ "name": "Functions Team" }' ; echo`

  > Cool it works. Might come in handy if we wanna wrap stuff up in a docker container at some point...

5. __Lets change the FDK__

  * Update the code: `vim node_modules/@fnproject/fdk/fn-fdk.js` handleHTTPStream#on('end')
  * Restart the function! `rm -f some-socket some-socket.tmp && FN_FORMAT=http-stream FN_LISTENER=unix:some-socket node func.js`
  * `curl -X POST localhost:1234/call -d '{ "name": "Functions Team" }' ; echo`

  > Cool. We can change things and test them without having to build a docker image and start a container.

6. __Lets hook up the VSCode Debugger !!!__

  * Create `.vscode/launch.json` - This will let us configure the VSCode debugger.

    > Make sure the workspace paths are correct!

    ```json
    {
      "version": "0.2.0",
      "configurations": [
        {
          "type": "pwa-node",
          "request": "launch",
          "name": "Debug fdk-node",
          "preLaunchTask": "clean-sockets",
          "env": {
            "FN_FORMAT": "http-stream",
            "FN_LISTENER": "unix:some-socket",
          },
          "skipFiles": [
            "<node_internals>/**"
          ],
          "program": "${workspaceFolder}/func.js"
        }
      ]
    }
    ```

  * Create `.vscode/tasks.json` - As our unix sockets are not in a container we will need to delete em first.

    > Make sure the workspace paths are correct!

    ```json
    {
      "version": "2.0.0",
      "tasks": [
        {
          "label": "clean-sockets",
          "type": "shell",
          "command": "rm -f ${workspaceFolder}/some-socket ${workspaceFolder}/some-socket.tmp"
        }
      ]
    }
    ```

  * __Run the Code from VSCode__ - <F5>

  * __Invoke__ : `curl --unix-socket ./some-socket.tmp localhost/call -X POST -d '{ "name": "Functions Team" }'; echo`

    > Using the socket is best for local debugging... or use socat from inside docker and expose the port...

