module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'standard-with-typescript',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  // 忽略某些文件, 不去校验
  ignorePatterns: ['**/dist/*', '**/node_modules/*'],

  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    semi: 'always',
  },
};
