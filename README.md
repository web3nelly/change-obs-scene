# change-obs-scene

With just a few lines of code, automate changing your OBS scenes using the `change-obs-scene` package.

## Installation

```bash
npm install @b3nelly/change-obs-scene
```

## Usage

**First, launch OBS and enable the WebSocket Server**

- `Tools > WebSocket Server Settings`:
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
        const intervalInSeconds = 10;
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

`obsSwitchScenes(intervalInSeconds, obsWebSocketServerURL, obsWebSocketServerPassword, obsSkipScenes)`

- `intervalInSeconds` (number, default: `10`): Number of seconds between each scene switch.
- `obsWebSocketServerURL` (string, default: 'ws://localhost:4455'): OBS WebSocket Server URL or IP.
- `obsWebSocketServerPassword` (string, default: undefined): OBS WebSocket Server Password.
- `obsSkipScenes` (Array<string>, default: []): An array of scene names to skip when switching scenes (scene name must match).

## Test

```bash
npm run test
```

## License

### MIT

```md
This `README.md` file provides installation and usage instructions, as well as a brief description of the API for the `change-obs-scene` package. Feel free to modify it as needed.
```
