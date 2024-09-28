// @ts-check

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  trailingComma: "es5",
  semi: true,
  quoteProps: "consistent",
  bracketSameLine: false,
  htmlWhitespaceSensitivity: "strict",
  printWidth: 120,
  singleQuote: true,
  jsxSingleQuote: true,
  singleAttributePerLine: true,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
