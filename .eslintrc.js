module.exports = {
    env: {
      browser: true,
      // es2021: true,
      // jest: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      // 'plugin:jest/recommended',
      'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: ['./tsconfig.json'],
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    plugins: [
      'react',
      '@typescript-eslint',
      // 'jest'
    ],
    rules: {
        "react/jsx-props-no-spreading": "off"
    },
  };
