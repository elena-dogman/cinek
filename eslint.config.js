export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      parser: "@typescript-eslint/parser",
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];
