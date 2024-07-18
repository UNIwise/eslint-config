const typescript = require('./typescript');

module.exports = {
  ...typescript,
  settings: {
    ...typescript.settings,
    react: {
      version: 'detect',
    },
  },
  plugins: [...typescript.plugins, 'react', 'prettier'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    ...typescript.rules,
    'react/prop-types': 'off',
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off"
  },
};
