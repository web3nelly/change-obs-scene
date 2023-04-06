# change-obs-scene

With just a few lines of code, automate changing your OBS scenes using the [@b3nelly/change-obs-scene](https://www.npmjs.com/package/@b3nelly/change-obs-scene?activeTab=readme) npm package. 💜

## Dependancies

- [OBS](https://obsproject.com/)
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [obs-websocket-js](https://www.npmjs.com/package/obs-websocket-js)

## Installation

```shell
npm install @b3nelly/change-obs-scene
```

## Usage

**First, launch OBS and enable the WebSocket Server**

`Tools > WebSocket Server Settings`:

- ![obs websocket server settings](https://github.com/b3nelly2/stream/blob/main/assets/obs-websocket-server-settings.png?raw=true)
- Don't forget to set your _Server Password_
- If you do not set a password, you do not need to pass the `obsWebSocketServerPassword` param to `changeScene()`

### Simple Usage Example

```js
const changeScene = require("@b3nelly/change-obs-scene").default;
const intervalInSeconds = 30; // 30 seconds per scene
changeScene(intervalInSeconds); // it's that simple.
```

### CommonJS (cjs) Usage Example

```js
const changeScene = require("@b3nelly/change-obs-scene").default;

const obsSkipScenes = [];
const intervalInSeconds = 30;
const obsWebSocketServerPassword = "your-password-here";
const obsWebSocketServerURL = "ws://localhost:4455";

changeScene(
  intervalInSeconds,
  obsSkipScenes,
  obsWebSocketServerPassword
  obsWebSocketServerURL,
);
```

### ECMAScript Module (esm) Usage Example

```js
import changeScene from "@b3nelly/change-obs-scene";

const obsSkipScenes = [];
const intervalInSeconds = 30;
const obsWebSocketServerPassword = "your-password-here";
const obsWebSocketServerURL = "ws://localhost:4455";

changeScene(
  intervalInSeconds,
  obsSkipScenes,
  obsWebSocketServerPassword
  obsWebSocketServerURL,
);
```

### Asynchronous Module Definition (amd) Usage Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AMD Example</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
    <script>
      require.config({
        paths: {
          changeScene:
            "@b3nelly/change-obs-scene/dist/obs-switch-scenes.amd",
        },
      });

      require(["changeScene"], function (changeScene) {
        const obsSkipScenes = [];
        const intervalInSeconds = 90;
        const obsWebSocketServerURL = "ws://localhost:4455";
        const obsWebSocketServerPassword = "your-password-here";

        changeScene(
          intervalInSeconds,
          obsSkipScenes,
          obsWebSocketServerPassword
          obsWebSocketServerURL,
        );
      });
    </script>
  </head>
  <body></body>
</html>
```

## API

```js
changeScene(
  intervalInSeconds,
  obsSkipScenes,
  obsWebSocketServerPassword
  obsWebSocketServerURL,
);
```

| Parameter                               |      Type       |         Default          | Description                                           |
| --------------------------------------- | :-------------: | :----------------------: | ----------------------------------------------------- |
| `intervalInSeconds` (optional)          |    `number`     |           `60`           | Number of seconds between each scene                  |
| `obsSkipScenes` (optional)              | `Array<string>` |           `[]`           | An array of scene names to skip when switching scenes |
| `obsWebSocketServerPassword` (optional) |    `string`     |       `undefined`        | OBS WebSocket Server Password                         |
| `obsWebSocketServerURL` (optional)      |    `string`     | `"ws_://localhost:4455"` | OBS WebSocket Server URL / IP                         |

## CLI

```shell
npm run cli
```

You will be prompted to enter in the `changeSence()` params. Leave param blank to use default value.

## Build

```shell
npm run build
```

Running the `build` command will automatically create the `dist/` dir and create/update the `cjs`, `esm`, and `amd` files inside.

Configuration file [rollup.config.js](https://github.com/web3nelly/change-obs-scene/blob/275bf0d4d8e13b7ae7547e292f0d0997a192806b/rollup.config.js)

## Development Dependancies

- [@babel/core](https://www.npmjs.com/package/@babel/core)
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
- [@rollup/plugin-babel](https://www.npmjs.com/package/@rollup/plugin-babel)
- [@rollup/plugin-commonjs](https://www.npmjs.com/package/@rollup/plugin-commonjs)
- [@rollup/plugin-json](https://www.npmjs.com/package/@rollup/plugin-json)
- [@rollup/plugin-node-resolve](https://www.npmjs.com/package/@rollup/plugin-node-resolve)
- [@rollup/plugin-terser](https://www.npmjs.com/package/@rollup/plugin-terser)
- [rollup](https://www.npmjs.com/package/rollup)

## License

### MIT

This `README.md` file provides installation and usage instructions, as well as a brief description of the API for the `change-obs-scene` package. Feel free to modify it as needed.
