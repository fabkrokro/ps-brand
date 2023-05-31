import StyleDictionaryModule from "style-dictionary";
import { makeSdTailwindConfig } from "sd-tailwindcss-transformer";
import { rm } from "fs/promises";

const config = {
  source: ["tokens.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
  },
};

const tailwind = makeSdTailwindConfig({
  type: "all",
  buildPath: "build/tailwind/",
});

config.format = tailwind.format;
config.platforms.tailwind = tailwind.platforms.tailwind;

await rm("build", { force: true, recursive: true });
const StyleDictionary = StyleDictionaryModule.extend(config);
StyleDictionary.buildAllPlatforms();
