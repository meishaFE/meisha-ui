import { createFactory } from '../utils'
import MsBadge from '@/badge/src/main.vue'

const createBa = createFactory(MsBadge)

describe('badge', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy && wrapper.destroy()
  })

  it('create', () => {
    wrapper = createBa()
    expect(wrapper.contains('.ms-badge')).toBeTruthy()
    expect(wrapper.vm.hidden).toBeFalsy()
    expect(wrapper.vm.isDot).toBeFalsy()
  })

  it('slot', () => {
    wrapper = createBa(
      {},
      {
        slots: {
          default: '<div class="test-default-slot">test</div>'
        }
      }
    )
    expect(wrapper.contains('.test-default-slot')).toBeTruthy()
  })

  it('hidden', () => {
    wrapper = createBa({ hidden: true })
    const attrs = wrapper.attributes()
    expect(/display: none/i.test(attrs.style)).toBeFalsy()
  })

  it('isDot', () => {
    wrapper = createBa({ isDot: true })
    expect(wrapper.contains('.is-dot')).toBeTruthy()
  })

  it('value', () => {
    wrapper = createBa({ value: 10 })
    expect(wrapper.text()).toBe('10')
  })

  it('max', () => {
    wrapper = createBa({ max: 9, value: 10 })
    expect(wrapper.text()).toBe('9+')
    wrapper = createBa({ max: 9, value: 8 })
    expect(wrapper.text()).toBe('8')
  })
})
