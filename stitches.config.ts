import { createStitches } from "@stitches/react";

const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      base: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      sans: "Jost, $base",
    },
  },
});

const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "Jost",
      fontStyle: "normal",
      fontWeight: "100 900",
      fontDisplay: "optional",
      src: 'url(/fonts/Jost-VariableFont_wght.ttf) format("truetype")',
    },
  ],
  "html, body": {
    padding: 0,
    margin: 0,
    fontFamily: "$sans",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "*": {
    boxSizing: "border-box",
  },
});

export {
  styled,
  css,
  globalStyles,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
};
