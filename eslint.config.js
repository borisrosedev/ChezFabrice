// eslint.config.js
const eslintConfigPrettier = require("eslint-config-prettier");
module.exports = [
  {
    name: "Boris Eslint",
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    files: ["src/**/*.js"],
    rules: {
      semi: "error",
      quotes: ["error", "double"],
      "prefer-const": "error",
      "no-mixed-operators": "error",
    },
  },
  eslintConfigPrettier,
];
