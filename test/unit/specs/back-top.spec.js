import { shallow } from 'vue-test-utils'
import Vue from 'vue'
import MsBackTop from 'packages/back-top/index'

const createBT = (propsData = {}, otherOpts = {}) => shallow(MsBackTop, { propsData, ...otherOpts })
describe('back-top', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy && wrapper.destroy()
  })

  it('install', () => {
    Vue.use(MsBackTop)
    expect(Vue.component('MsBackTop')).toBeTruthy()
  })

  it('create', () => {
    wrapper = createBT()
    expect(wrapper.contains('.ms-back-top')).toBeTruthy()
    expect(wrapper.vm.isShow).toBeFalsy()
  })

  it('customClass', () => {
    wrapper = createBT({ customClass: 'test-back-top' })
    expect(wrapper.contains('.test-back-top')).toBeTruthy()
  })

  it('icon', () => {
    wrapper = createBT({ icon: 'test' })
    expect(wrapper.contains('.ms-icon-test')).toBeTruthy()
  })

  it('slot', () => {
    wrapper = createBT(
      { icon: '' },
      {
        slots: {
          default: '<div class="test-default-slot">test</div>'
        }
      }
    )
    expect(wrapper.contains('.test-default-slot')).toBeTruthy()
  })
})
