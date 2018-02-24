const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '@/([^\\.]*).vue$': '<rootDir>/packages/$1.vue',
    '@/([^\\.]*)$': '<rootDir>/packages/$1.js',
    '^vue$': 'vue/dist/vue.common.js'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup']
}
