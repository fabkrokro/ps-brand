# PS Brand

The official document can be found here:
https://vox.publicis.sapient.com/home/ls/content/6119025985716224/brand-toolkit#logo

You can find the Logo and Fonts on there, but if you want to use a similar font, you could use Jost from Google Fonts (also added in here):

```css
@font-face {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-display: fallback;
  src: url(jost.woff2) format("woff2");
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* latin-ext */
@font-face {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-display: fallback;
  src: url(jost-latin-ext.woff2) format("woff2");
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
    U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-display: fallback;
  src: url(jost-latin.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
html,
body {
  font-family: "Jost", system-ui, sans-serif;
}
```

## Tokens

The tokens can be used as CSS Variables or as with the Tailwind Config, which is distributed as CJS or ESM.

Example Usage:

```js
import config from "ps-brand/build/tailwind/tailwind.config.mjs";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...config.theme.extend,
    },
  },
  plugins: [],
};
```
