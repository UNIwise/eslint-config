# eslint-config

WISEflow's ESLint config for react.

## Installation

```sh
yarn add --dev @uniwise/eslint-config eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser
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

---

Read the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
