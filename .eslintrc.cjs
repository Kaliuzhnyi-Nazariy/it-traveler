/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  env: {
    browser: true, // If you're targeting the browser
    node: true, // Enable Node.js global variables and scoping
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
