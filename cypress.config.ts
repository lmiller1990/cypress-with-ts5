import { defineConfig } from "cypress";
import webpackPreprocessor from '@cypress/webpack-preprocessor'
import wp from './webpack.config.js'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', webpackPreprocessor({
        webpackOptions: wp
      }))
    },
  },
})
