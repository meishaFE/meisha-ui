import { shallow } from 'vue-test-utils'

exports.createFactory = component => (propsData = {}, otherOpts = {}) =>
  shallow(component, {
    propsData,
    ...otherOpts
  })
