module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-filename-extension": ["error", {"extensions": [".js", ".jsx"]}],
    "class-methods-use-this": 0,
    "global-require": 0,
    "react/prop-types": 0,
    "max-len": ["error", {"code": 130, "tabWidth": 2}],
    "semi": ["error", "never"],
    "react/prefer-stateless-function": [0, { "ignorePureComponents": false }],
    "react/destructuring-assignment": [0, 'always'],
    "react/no-multi-comp": [0, { "ignoreStateless": false }],
    "react/jsx-one-expression-per-line": [0, 'never'],
    "react/no-access-state-in-setstate": [0, 'never'],
    "react/sort-comp": [0, 'never'],
    "import/prefer-default-export": "off",
    "import/no-cycle": "off"
  },
};
