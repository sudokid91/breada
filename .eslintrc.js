module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['@react-native-community', 'eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings'],
  globals: {
    __: 'readonly',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
  },
  plugins: ['import', 'prettier'],
  env: {
    es6: true,
    browser: false,
    node: true,
    jquery: false,
    jest: true,
  },
  rules: {
    quotes: 0,
    semi: 2,
    'no-console': 1,
    'no-debugger': 1,
    'no-var': 1,
    'no-trailing-spaces': 2,
    'eol-last': 0,
    'no-underscore-dangle': 0,
    'no-alert': 0,
    'no-lone-blocks': 0,
    'import/extensions': 0,
    'import/no-named-as-default': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine :"auto",
      },
    ],
    'import/no-unresolved': 'off',
  },
};
