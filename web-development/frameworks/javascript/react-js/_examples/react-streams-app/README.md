# Streams Project

## Libraries

```
npm install --save react-router-dom
```

### Webpack Environment Variables
```
npm install --save-dev dotenv
```
---

## `json-server` set-up

1. Create new `api` project folder.

2. Initialise a new project: `npm init`.

3. Install __json-server__: `npm install --save json-server`

4. Create a new `json.db` database file:

    ```json
    {
        "thingies": [ "thingie_01", "thingie_02"]
    }
    ```

5. Update `package.json` to include a new `start script` to start up the `json-server` and watch the `json.db` file.

    ```json
    {
        ...
        "scripts": {
            "start": "json-server -p 3001 -w db.json",
        },
        ...
    }
    ```

---

## rtmp-server

1. Create new `rtmp-server` project folder.

2. Initialise a new project: `npm init`.

3. Install __node-media-server__: `npm install --save node-media-server`

4. Create a new `index.js` javascript file in the root of the `rtmp-server` folder:

    ```javascript
    const { NodeMediaServer } = require('node-media-server');

    const config = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 30
    },
    http: {
        port: 8000,
        allow_origin: '*'
    }
    };

    var nms = new NodeMediaServer(config)
    nms.run();
    ```
5. Update `package.json` to include a new `start script` to start up the `rtmp-server`.

    ```json
    {
        ...
        "scripts": {
            "start": "node index.js",
        },
        ...
    }
    ```
6. Install `glv.js` into the `client` project: `npm install --save flv.js`



---

## References

* [Grider  - React Router](https://www.udemy.com/react-redux/learn/v4/t/lecture/12700531?start=0)

* [Node Media Server](https://github.com/illuspas/Node-Media-Server)

* [FV JS](https://github.com/Bilibili/flv.js/)