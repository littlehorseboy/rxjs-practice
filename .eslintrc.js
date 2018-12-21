module.exports = {
  parser: 'esprima',
  parserOptions: {
    ecmaVersion: 6,
    // sourceType: 'script',
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  rules: {
    'linebreak-style': [
      'error',
      'windows',
    ],
  },
};
