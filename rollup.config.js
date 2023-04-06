import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { default: OBSWebSocket } = require("obs-websocket-js");

export default {
  input: "obs-switch-scenes.js",
  output: [
    {
      file: "dist/obs-switch-scenes.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/obs-switch-scenes.esm.js",
      format: "esm",
    },
    {
      file: "dist/obs-switch-scenes.amd.js",
      format: "amd",
      amd: {
        id: "OBSWebSocket",
      },
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env"],
    }),
    terser(),
  ],
  external: ["obs-websocket-js"],
};
