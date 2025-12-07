import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsAlly from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';


const __dirname = dirname(fileURLToPath(import.meta.url));

export default [
  js.configs.recommended,

  {
    files: ['**/*.{js, jsx, ts, tsx'],

    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build**',
      '**/coverage/**',
      '**/*d.ts**',
      '**/*.min.js',
      '**/css.map',
    ],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true},
        sourceType: 'module',
      },

      globals: {
        console:'readonly',
        document:'readonly',
        HTMLElement: 'readonly',
        process: 'readonly',
          window: 'readonly',
      },
    },

      plugins: {
      '@typescript-eslint': tsPlugin, react,
      'jsx-a11y': jsA11y, import: importPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      },

      settings: {
        react: {
          version: 'detect' 
        },
          'import/resolver': {
            typescript: {
              alwaysTryTypes: true,
              project: [
                './tsconfig.json',
                './client/tsconfig.json',
                './server/tsconfig.json',
              ],
            },
        },
      },

      rules: {
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-explicit-any': 'warn',
        'react/react-in-jsx-scope':'off',
        'react/prop-types':'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
                
        'import/order': [
          'warn',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
            ],
            'newlines-between': 'always',
          },
        ],
        'import/no-unresolved': 'error',
        'jsx-a11y/alt-text': 'warn',
        'jsx-a11y/anchor-is-valid': 'warn',
        'no-console': 'warn',
        'no-debugger': 'error',
        'prefer-const': 'error',
      },
    },

    {
      files: [ 'client/**/*.{ts,tsx,jsx,js}'],
      rules: {
        'react/jsx-uses-react': 'off',
      },
    },

    {
      files: [ 'server/**/*.{ts,js}'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react-refresh/only-export-components': 'off',
      },
    },

    {
      files: ['**/*.{js,jsx}'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },

    {
      files: [ 
        'client/src/**/*.{ts, tsx}',
        'server/src/**/*.{ts,tsx}'
      ],

      languageOptions: {
        parser: tsParser,
        parserOptions: {
          project: [
            './client/tsconfig.json', 
            './server/tsconfig.json',
          ],
          tsconfigRootDir:__dirname,
        },
      },

      plugins: {
        '@typescript-eslint': tsPlugin,
      },

      rules:{
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
        ],
      },
    },

    { 
      files: ['client/src/**/*.{ts,tsx}'],
      languageOptions: {
        globals:
          {...globals.browser }, 
      },
    },
];


