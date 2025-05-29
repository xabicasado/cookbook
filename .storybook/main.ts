import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../app/**/*.mdx', '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/nextjs',
  webpackFinal: async (config, {}) => {
    if (config?.resolve) config.resolve.plugins = [new TsconfigPathsPlugin()]
    return config
  },
}

export default config
