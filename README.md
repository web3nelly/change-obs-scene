# change-obs-scene

With just a few lines of code, automate changing your OBS scenes using the [@b3nelly/change-obs-scene](https://www.npmjs.com/package/@b3nelly/change-obs-scene?activeTab=readme) npm package.

## Dependancies

- [OBS](https://obsproject.com/)
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [obs-websocket-js](https://www.npmjs.com/package/obs-websocket-js) for switching scenes in OBS.
- [dotenv](https://www.npmjs.com/package/dotenv) for setting private evniermentt varibles.

## Installation

```shell
npm install @b3nelly/change-obs-scene
```

## Usage

**First, launch OBS and enable the WebSocket Server**

`Tools > WebSocket Server Settings`:

- ![obs websocket server settings](https://github.com/b3nelly2/stream/blob/main/assets/obs-websocket-server-settings.png?raw=true)
- Don't forget to set your _Server Password_

### CommonJS (cjs) Usage Example

```js
const obsSwitchScenes =
  require("@b3nelly/change-obs-scene/dist/obs-switch-scenes.cjs.js").default;

const obsSkipScenes = [];
const intervalInSeconds = 10;
const obsWebSocketServerURL = "ws://localhost:4455";
const obsWebSocketServerPassword = "your-password-here";

obsSwitchScenes(
  intervalInSeconds,
  obsWebSocketServerURL,
  obsWebSocketServerPassword,
  obsSkipScenes
);
```

### ECMAScript Module (esm) Usage Example

```js
import obsSwitchScenes from "@b3nelly/change-obs-scene/dist/obs-switch-scenes.esm.js";

const obsSkipScenes = [];
const intervalInSeconds = 30;
const obsWebSocketServerURL = "ws://localhost:4455";
const obsWebSocketServerPassword = "your-password-here";

obsSwitchScenes(
  intervalInSeconds,
  obsWebSocketServerURL,
  obsWebSocketServerPassword,
  obsSkipScenes
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
          obsSwitchScenes:
            "@b3nelly/change-obs-scene/dist/obs-switch-scenes.amd",
        },
      });

      require(["obsSwitchScenes"], function (obsSwitchScenes) {
        const obsSkipScenes = [];
        const intervalInSeconds = 90;
        const obsWebSocketServerURL = "ws://localhost:4455";
        const obsWebSocketServerPassword = "your-password-here";

        obsSwitchScenes.default(
          intervalInSeconds,
          obsWebSocketServerURL,
          obsWebSocketServerPassword,
          obsSkipScenes
        );
      });
    </script>
  </head>
  <body></body>
</html>
```

## API

```js
obsSwitchScenes(
  intervalInSeconds,
  obsWebSocketServerURL,
  obsWebSocketServerPassword,
  obsSkipScenes
);
```

- `intervalInSeconds` _(number, default: `60`)_: Number of seconds between each scene switch.
- `obsWebSocketServerURL` _(string, default: 'ws_://localhost:4455'): OBS WebSocket Server URL or IP.
- `obsWebSocketServerPassword` _(string, default: undefined)_: OBS WebSocket Server Password.
- `obsSkipScenes` _(Array<string>, default: [])_: An array of scene names to skip when switching scenes (scene name must match).

## Test

```shell
npm run test
```

## License

### MIT

This `README.md` file provides installation and usage instructions, as well as a brief description of the API for the `change-obs-scene` package. Feel free to modify it as needed.
