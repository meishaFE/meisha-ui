import { shallow } from 'vue-test-utils'
import Vue from 'vue'
import MsButton from 'packages/button/index'

const createB = (propsData = {}, otherOpts = {}) =>
  shallow(MsButton, {
    propsData,
    ...otherOpts
  })

describe('button', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy && wrapper.destroy()
  })

  it('create', () => {
    Vue.use(MsButton)
    expect(Vue.component('MsButton')).toBeTruthy()
  })

  it('create', () => {
    wrapper = createB()
    expect(wrapper.contains('.ms-button')).toBeTruthy()
    expect(wrapper.contains('.ms-button--default')).toBeTruthy()
  })

  it('type', () => {
    wrapper = createB({
      type: 'danger'
    })
    expect(wrapper.contains('.ms-button--danger')).toBeTruthy()
  })

  it('size', () => {
    wrapper = createB({
      size: 'small'
    })
    expect(wrapper.contains('.ms-button--small')).toBeTruthy()
  })

  it('disabled', () => {
    wrapper = createB({
      disabled: true
    })
    expect(wrapper.contains('.is-disabled')).toBeTruthy()
  })

  it('plain', () => {
    wrapper = createB({
      plain: true
    })
    expect(wrapper.contains('.is-plain')).toBeTruthy()
  })

  it('round', () => {
    wrapper = createB({
      round: '10px'
    })
    const attrs = wrapper.attributes()
    expect(/border-radius: 10px/i.test(attrs.style)).toBeTruthy()
  })
})
