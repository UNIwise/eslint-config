import eslintrc_react from "./.eslintrc_react.js";
import eslintrc_typescript from "./.eslintrc_typescript.js";
import eslintrc_angular from './eslintrc_angular.js';

module.exports = {
  configs: {
    /** Rules and plugins extended for React development in Typescript */
    react: eslintrc_react,
    /** Rules and plugins extended for Typescript (without React) */
    typescript: eslintrc_typescript,
    /** Rules and plugins extended for AngularJS with Typescript (trial, so everything is set to warnings only) */
    angular: eslintrc_angular,
  },
};
