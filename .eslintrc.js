module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-mutable-exports': 0,
    'no-new': 0,
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        args: 'none',
      },
    ],
    'vue/multi-word-component-names': ['error', {
      ignores: ['login'],
    }],
  },
};
