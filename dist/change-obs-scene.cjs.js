"use strict";var e=new(require("obs-websocket-js"));module.exports=function(){var n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ws://localhost:4455",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];null!==t&&!1!==t&&""!==t||(t=void 0),e.on("ConnectionOpened",(function(){console.log("Connection Opened")})),e.on("Identified",(function(){console.log("Identified, good to go!"),e.call("GetSceneList").then((function(e){console.log("Scenes:",e),r(e,o)})).catch((function(e){console.error("Error on GetSceneList call:",e.code,e.message)}))})),e.connect(c,t).then((function(e){console.log("WOOHOO! We successfully connected to OBS WS Server ",e)}),(function(e){console.error("Failed to connect",e.code,e.message)}));var r=function(o,c){setInterval((function(){n=i(o,n,s);var c=o.scenes[n];e.call("SetCurrentProgramScene",{sceneName:c.sceneName}).then((function(){console.log("Switched to scene:",c.sceneName)})).catch((function(e){console.error("Error switching scenes:",e)}))}),1e3*c)},i=function(e,n,o){do{var c;n=null!==(c=n)&&void 0!==c?c:e.scenes.findIndex((function(n){return n.sceneName===e.currentProgramSceneName})),n=++n>=e.scenes.length?0:n}while(o.includes(e.scenes[n].sceneName));return n}};
