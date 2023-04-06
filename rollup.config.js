import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { default: OBSWebSocket } = require("obs-websocket-js");

export default {
  input: "change-obs-scene.js",
  output: [
    {
      file: "dist/change-obs-scene.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/change-obs-scene.esm.js",
      format: "esm",
    },
    {
      file: "dist/change-obs-scene.amd.js",
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
