import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier'
import boundaries from 'eslint-plugin-boundaries'
import checkFile from 'eslint-plugin-check-file'
import jestDom from 'eslint-plugin-jest-dom'
import storybook from 'eslint-plugin-storybook'
import testingLibrary from 'eslint-plugin-testing-library'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import { configs as tsConfigs } from 'typescript-eslint'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  ...tsConfigs.recommended,
  ...compat.config(storybook.configs.recommended),
  ...compat.config(testingLibrary.configs.react),
  ...compat.config(jestDom.configs.recommended),
  prettier,
  globalIgnores(['!**/.storybook', '**/node_modules', '**/storybook-static']),
  {
    plugins: {
      boundaries,
      'check-file': checkFile,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    settings: {
      react: {
        version: 'detect',
      },

      'boundaries/include': ['src/**/*', 'app/**/*', 'di/**/*'],

      'boundaries/elements': [
        {
          mode: 'full',
          type: 'web',
          pattern: ['app/**/*'],
        },
        {
          mode: 'full',
          type: 'controllers',
          pattern: ['src/interface-adapters/controllers/**/*'],
        },
        {
          mode: 'full',
          type: 'use-cases',
          pattern: ['src/application/use-cases/**/*'],
        },
        {
          mode: 'full',
          type: 'service-interfaces',
          pattern: ['src/application/services/**/*'],
        },
        {
          mode: 'full',
          type: 'repository-interfaces',
          pattern: ['src/application/repositories/**/*'],
        },
        {
          mode: 'full',
          type: 'entities',
          pattern: ['src/entities/**/*'],
        },
        {
          mode: 'full',
          type: 'infrastructure',
          pattern: ['src/infrastructure/**/*'],
        },
        {
          mode: 'full',
          type: 'di',
          pattern: ['di/**/*'],
        },
      ],
    },

    rules: {
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{ts,tsx}': 'KEBAB_CASE',
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],

      'check-file/folder-naming-convention': [
        'error',
        {
          'src/**/!(__tests__)': 'KEBAB_CASE',
        },
      ],

      'boundaries/no-unknown': 'error',
      'boundaries/no-unknown-files': 'error',

      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',

          rules: [
            {
              from: 'web',
              allow: ['web', 'entities', 'di'],
            },
            {
              from: 'controllers',
              allow: [
                'entities',
                'service-interfaces',
                'repository-interfaces',
                'use-cases',
              ],
            },
            {
              from: 'infrastructure',
              allow: [
                'service-interfaces',
                'repository-interfaces',
                'entities',
              ],
            },
            {
              from: 'use-cases',
              allow: [
                'entities',
                'service-interfaces',
                'repository-interfaces',
              ],
            },
            {
              from: 'service-interfaces',
              allow: ['entities'],
            },
            {
              from: 'repository-interfaces',
              allow: ['entities'],
            },
            {
              from: 'entities',
              allow: ['entities'],
            },
            {
              from: 'di',

              allow: [
                'di',
                'controllers',
                'service-interfaces',
                'repository-interfaces',
                'use-cases',
                'infrastructure',
              ],
            },
          ],
        },
      ],

      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': 'off',

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],
    },
  },
])
