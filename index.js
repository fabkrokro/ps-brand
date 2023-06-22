import StyleDictionaryModule from "style-dictionary";
import { makeSdTailwindConfig } from "sd-tailwindcss-transformer";
import { rm, readFile, writeFile } from "fs/promises";

// Base Config
const out = "build";
const buildPathTW = `${out}/tailwind/`;

const config = {
  source: ["tokens.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: `${out}/css/`,
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
  },
};

// Extend Config with Tailwind
const tailwind = makeSdTailwindConfig({
  type: "all",
  buildPath: buildPathTW,
});
config.format = tailwind.format;
config.platforms.tailwind = tailwind.platforms.tailwind;

// Delete folder and generate files
await rm(out, { force: true, recursive: true });
const StyleDictionary = StyleDictionaryModule.extend(config);
StyleDictionary.buildAllPlatforms();

// Modify TW config from CJS to ESM export
const readTWConfig = `${buildPathTW}tailwind.config.js`;
const writeTWConfig = readTWConfig.replace(".js", ".mjs");
const configTWFile = await readFile(readTWConfig, "utf-8");
await writeFile(
  writeTWConfig,
  configTWFile.replace("module.exports = ", "export default ")
);
