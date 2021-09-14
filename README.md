# eslint-config

WISEflow's ESLint config for react.

## Installation

```sh
yarn add --dev @uniwise/eslint-config eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import prettier eslint-plugin-prettier
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
