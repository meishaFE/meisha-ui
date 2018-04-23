import { mountFactory } from '../utils'
import MsInputNumber from '@/input-number/src/main.vue'

const createInputNumber = mountFactory(MsInputNumber)

describe('input-number', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy && wrapper.destroy()
  })

  it('create', () => {
    wrapper = createInputNumber()

    expect(wrapper.contains('.ms-input-number')).toBeTruthy()
    expect(wrapper.vm.step).toBe(1)
    expect(wrapper.vm.max).toBe(Infinity)
    expect(wrapper.vm.min).toBe(-Infinity)
    expect(wrapper.vm.value).toBe(0)
    expect(wrapper.vm.disabled).toBeFalsy()
    expect(wrapper.vm.controls).toBeTruthy()
    expect(wrapper.vm.debounce).toBe(300)
    expect(wrapper.vm.size).toBe('normal')
  })

})
