import { shallow, mount } from 'vue-test-utils'

exports.createFactory = component => (propsData = {}, otherOpts = {}) =>
  shallow(component, {
    propsData,
    ...otherOpts
  })

exports.mountFactory = component => (propsData = {}, otherOpts = {}) =>
  mount(component, {
    propsData,
    ...otherOpts
  })
