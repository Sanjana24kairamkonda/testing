// eslint.config.js
module.exports = {
  extends: 'eslint:recommended',
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'no-unused-vars': 'warn',
    'semi': ['error', 'always'],
  },
};

