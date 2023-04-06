import OBSWebSocket from "obs-websocket-js";

const obs = new OBSWebSocket();

/**
 * Automatically Switch OBS Scene
 *
 * @param  {number} [intervalInSeconds=60] Number of seconds to next scene.
 * @param  {array[string]} [array] Add scene/s you would like skip using comma seperated string(scene name must match).
 * @param  {string} [obsWebSocketServerPassword=undefined] OBS WebSocket Server Password. NOTE, leave undefined if there is no password set.
 * @param  {string} [obsWebSocketServerURL='ws://localhost:4455'] OBS WebSocket Server URL or IP.
 * @returns {null}
 */

const changeScene = (
  intervalInSeconds = 60,
  obsSkipScenes = [],
  obsWebSocketServerPassword = undefined,
  obsWebSocketServerURL = "ws://localhost:4455"
) => {
  if (
    obsWebSocketServerPassword === null ||
    obsWebSocketServerPassword === false ||
    obsWebSocketServerPassword === ""
  ) {
    obsWebSocketServerPassword = undefined;
  }

  obs.on("ConnectionOpened", () => {
    console.log("Connection Opened");
  });

  obs.on("Identified", () => {
    console.log("Identified, good to go!");

    obs
      .call("GetSceneList")
      .then((scenesData) => {
        console.log("Scenes:", scenesData);
        switchScene(scenesData, intervalInSeconds);
      })
      .catch((error) => {
        console.error("Error on GetSceneList call:", error.code, error.message);
      });
  });

  obs.connect(obsWebSocketServerURL, obsWebSocketServerPassword).then(
    (info) => {
      console.log("WOOHOO! We successfully connected to OBS WS Server ", info);
    },
    (error) => {
      console.error("Failed to connect", error.code, error.message);
    }
  );

  let currentSceneIndex;

  const switchScene = (scenesData, intervalInSecs) => {
    setInterval(() => {
      currentSceneIndex = getNextSceneIndex(
        scenesData,
        currentSceneIndex,
        obsSkipScenes
      );
      const nextScene = scenesData.scenes[currentSceneIndex];
      obs
        .call("SetCurrentProgramScene", { sceneName: nextScene.sceneName })
        .then(() => {
          console.log("Switched to scene:", nextScene.sceneName);
        })
        .catch((error) => {
          console.error("Error switching scenes:", error);
        });
    }, intervalInSecs * 1000);
  };

  const getNextSceneIndex = (scenesData, currentIndex, skipScenes) => {
    do {
      currentIndex =
        currentIndex ??
        scenesData.scenes.findIndex(
          (scene) => scene.sceneName === scenesData.currentProgramSceneName
        );
      currentIndex =
        ++currentIndex >= scenesData.scenes.length ? 0 : currentIndex;
    } while (skipScenes.includes(scenesData.scenes[currentIndex].sceneName));
    return currentIndex;
  };
};

export default changeScene;
