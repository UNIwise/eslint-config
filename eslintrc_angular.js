
function configureAsLevel(rules, level) {
  return fromEntries(Object.keys(rules).map((key) => [`react/${key}`, level]));
}

import {configs} from "eslint-plugin-angular"

// Demote angular rules to warnings for now.
const angularRules = configureAsLevel(configs.bestpractices.rules, 1);

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["angular"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  rules: angularRules
};
