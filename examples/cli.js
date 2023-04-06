import changeScene from "@b3nelly/change-obs-scene";
import readline from "readline";

const obsSkipScenes = [];
let intervalInSeconds = 10;
let obsWebSocketServerURL = "ws://localhost:4455";
let obsWebSocketServerPassword = undefined;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askInterval = () => {
  return new Promise((resolve) => {
    rl.question(
      `Please enter the interval in seconds (default: ${intervalInSeconds}): `,
      (interval) => {
        resolve(interval || intervalInSeconds);
      }
    );
  });
};

const askWebSocketServerURL = () => {
  return new Promise((resolve) => {
    rl.question(
      `Please enter the OBS WebSocket Server URL / IP (default: ${obsWebSocketServerURL}): `,
      (url) => {
        resolve(url || obsWebSocketServerURL);
      }
    );
  });
};

const askPassword = () => {
  return new Promise((resolve) => {
    rl.question(
      "Please enter the OBS WebSocket Server password(leave blank if none): ",
      (password) => {
        resolve(password);
      }
    );
  });
};

(async () => {
  intervalInSeconds = await askInterval();
  obsWebSocketServerURL = await askWebSocketServerURL();
  obsWebSocketServerPassword = await askPassword();
  rl.close();

  changeScene(
    intervalInSeconds,
    obsWebSocketServerURL,
    obsWebSocketServerPassword,
    obsSkipScenes
  );
})();
