import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  {
    files: ['tests/**/*.ts'],
    ...playwright.configs['flat/recommended'],
  },
]);