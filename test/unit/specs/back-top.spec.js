import { createFactory } from '../utils'
import MsBackTop from '@/back-top/src/main.vue'

const createBT = createFactory(MsBackTop)

describe('back-top', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy && wrapper.destroy()
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

  it('click', () => {
    wrapper = createBT()
    const spy = jest.spyOn(wrapper.vm, 'handleClick')
    wrapper.update()
    wrapper.find('.ms-back-top').trigger('click')
    expect(spy).toBeCalled()
  })
})
