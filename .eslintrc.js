module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true
  },
  plugins: [
    "functional"
  ],
  extends: [
    'standard',
    'plugin:functional/all'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    semi: 'off',
    'space-before-function-paren': 'off'
  }
}
