# eslint-config

WISEflow's ESLint config for react.

## Installation

```sh
# Install eslint and required packages
yarn add -D @uniwise/eslint-config eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier

# For React add react plugin
yarn add -D eslint-plugin-react
```

## Usage

After installing, update your project's `.eslintrc.(json|js)` or file to import the rule sets you want.

- React - `@uniwise/eslint-config` or specifically `@uniwise/eslint-config/react`
- Typescript (No react) - `@uniwise/eslint-config/typescript`

e.g in `./eslintrc.json`

```json
{
  "extends": ["@uniwise/eslint-config/typescript"],
  "rules": {
    "overriding_some_rule": "warn"
  }
}
```

or in `./eslintrc.js`

```js
module.exports = {
  extends: ['@uniwise/eslint-config/typescript']
  rules: {
    "overriding_some_rule": "warn"
  }
};
```

To run the linter:

```sh
yarn eslint src/
```

---

Read the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
