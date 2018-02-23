const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '@/([^\\.]*).vue$': '<rootDir>/src/$1.vue',
    '@/([^\\.]*)$': '<rootDir>/src/$1.js',
    '^vue$': 'vue/dist/vue.common.js',
    '^packages/(.*).vue$': '<rootDir>/packages/$1.vue',
    '^packages/(.*)$': '<rootDir>/packages/$1.js'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: ['!**/test/**', '!**/node_modules/**']
}
