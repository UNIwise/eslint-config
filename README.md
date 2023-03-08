# eslint-config

WISEflow's ESLint config for react.

## Installation

```sh
yarn add --dev @uniwise/eslint-config typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript  eslint-plugin-react eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier 
```

## Usage

After installing, update your project's `.eslintrc.json` file to import the rule sets you want:

```json
{
  "extends" : [
    "@uniwise/eslint-config"
  ]
}
```

For VSCode add the config path to the workspace settings in the `.vscode/settings.json`
```json
{
  ...
  "eslint.options": {
    "configFile": "./.eslintrc.json"
  }
}
```

To run the linter:

```sh
yarn eslint src/ 
```

---

Read the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
