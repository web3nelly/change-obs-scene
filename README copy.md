# Change OBS Scene

Using [Node.js](https://nodejs.org/) and [obs-websocket-js](https://github.com/obs-websocket-community-projects/obs-websocket-js) to automate our live stream.
See Automations in action @ [breaking3Dreality on Twitch.tv](https://www.twitch.tv/breaking3Dreality)

**More automates to come!**

## Dependancies

- [OBS](https://obsproject.com/)
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [obs-websocket-js](https://github.com/obs-websocket-community-projects/obs-websocket-js) for switching scenes in OBS.
- [dotenv](https://github.com/motdotla/dotenv) for setting private evniermentt varibles.

## Usage

1. Startup OBS and enable the WebSocket Server

- `Tools > WebSocket Server Settings`:
  - ![obs websocket server settings](https://github.com/b3nelly2/stream/blob/main/assets/obs-websocket-server-settings.png?raw=true)
  - Don't forget to set your _Server Password_

2. `git clone https://github.com/b3nelly2/obs-stream-automation.git`
3. `cd ./stream`
4. `npm install`
5. Create .env file and add your OBS WebSocket Server Settings:

- Windows Powershell:
  ```
  New-Item .env -ItemType File
  >> "OBS_WS='ws://localhost:4455'" | Out-File -FilePath .env -Encoding utf8 -Append
  >> "OBS_WS_PASS='yourPassword'" | Out-File -FilePath .env -Encoding utf8 -Append
  >> "OBS_SCENE_INT_SECS=90" | Out-File -FilePath .env -Encoding utf8 -Append
  ```
- macOS & Linux: `touch .env`
  ```
  echo "OBS_WS='ws://localhost:4455'" >> .env
  echo "OBS_WS_PASS='yourPassword'" >> .env
  echo "OBS_SCENE_INT_SECS=90" >> .env
  ```

6. `npm start` (OBS must me started to work.)
7. You can change the duration to switch scenes on this line: https://github.com/b3nelly2/obs-stream-automation/blob/5b7261dd928b7faf3a204a2bc4c206d5eba4ffe3/changeScene.js#L5
8. That's it, for now 😉
