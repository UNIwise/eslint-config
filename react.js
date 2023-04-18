const typescript = require('./typescript');

module.exports = {
  ...typescript,
  settings: {
    ...typescript.settings,
    react: {
      version: 'detect',
    },
  },
  plugins: [...typescript.plugins, 'react'],
  extends: [...typescript.extends, 'plugin:react/recommended'],
  rules: {
    ...typescript.rules,
    'react/prop-types': 'off',
  },
};
