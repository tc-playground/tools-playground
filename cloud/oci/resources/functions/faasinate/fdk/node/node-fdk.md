# Node FDK

## Overview

## RUN Raw

* __Container Ports__

  * `9410/tcp, 0.0.0.0:9411->9411/tcp`

* __Run Locally__

  * `FN_FORMAT=http-stream FN_LISTENER=unix:some-socket node func.js`

  * `sudo rm some-socket some-socket.tmp`

  * `socat TCP-LISTEN:1234,reuseaddr,fork UNIX-CLIENT:some-socket`

  * `sudo lsof -n -i -s TCP:LISTEN,ESTABLISHED`

* __FDK Parts__

  1. `function handleHTTPStream (fnfunction, options)`

    1. Define the `unix socket file` from `FN_LISTENER`.

      * Define a tempfile too. This is what the server listens on.

    2. __functionHandler__ - Defines `functionHandler = (req, resp) => {`

      1. Do `const inputHandler = getInputHandler(inputMode)`

        * `JSON`, `String`, `Buffer` types.

        * Provides `pushData()`, `getBody`

      2. __Read Data__ - `req.on('data', () =>` to push input into `inputHandler' 
      
      3. __Read Complete__ - `.on('end' () =>` to handle `body` and `headers`...

        1. Process `raw headers` into `headers`.

        2. Get `body`.

        3. Create `new Context(process.env, body, headers)` and set response type.

          * Context is the function invocation context
          
          * It enables functions to read and write metadata from the request including event headers, config and the underlying payload. 
        
        4. `logFramer` console log/error the `logFrameName` and `logFrameId` ot stdout and stderr.

        5. __Execute Function__ - Create a `Promise` that `resolves` the underlying `fnfunction`.

          * `sendResult` on success `sendJSONError` on error.

        6. __Handle Read Error__ - `}).on('error', (e) => {` - Error reading input request.

        * End of functionHandler()

    3. __Create HTTP Server__ - Create a server with the functions as the handler and list on the socket-file.

      * __Create Server__ - `currentServer = http.createServer(functionHandler)`

      * __Bind Listener__ to socket-file__ `currentServer.listen(tmpFile,`

        * __IPC Server Socket__ - Bind to the tmpFile. Symlink from named to tmpfile.

      * __Error Event Listener__ `currentServer.on('error', (error) =>`
    
    4. Return a function to `close` the server, and, `unlink` the `listenFile`.
  
  * __HTTPGatewayContext__

  * __Context__