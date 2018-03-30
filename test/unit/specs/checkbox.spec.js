import { createFactory } from '../utils'
import MsCheckbox from '@/checkbox-group/src/checkbox.vue'

const createCheckbox = createFactory(MsCheckbox)

describe('checkbox', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy && wrapper.destroy()
  })

  it('create', () => {
    wrapper = createCheckbox()
    expect(wrapper.contains('.ms-checkbox')).toBeTruthy()
    expect(wrapper.vm.button).toBeFalsy()
    expect(wrapper.vm.disabled).toBeFalsy()
    expect(wrapper.vm.checked).toBeFalsy()
    expect(wrapper.vm.round).toBe('4px')
  })

  it('disabeld', () => {
    wrapper = createCheckbox({
      disabled: true
    })
    expect(wrapper.contains('.is-disabled')).toBeTruthy()
  })

  it('disabeld', () => {
    wrapper = createCheckbox({
      disabled: true
    })
    expect(wrapper.contains('.is-disabled')).toBeTruthy()
  })

  it('button', () => {
    wrapper = createCheckbox({
      button: true
    })
    expect(wrapper.contains('.is-button')).toBeTruthy()
  })

  it('checked', () => {
    wrapper = createCheckbox({
      checked: true
    })
    expect(wrapper.contains('.is-checked')).toBeTruthy()
  })

  it('round', () => {
    wrapper = createCheckbox({
      button: true,
      round: '10px'
    })
    const attrs = wrapper.attributes()
    expect(/border-radius: 10px/i.test(attrs.style)).toBeTruthy()
  })

  it('change', () => {
    wrapper = createCheckbox()
    const changeSpy = jest.spyOn(wrapper.vm, 'handleChange')
    wrapper.update()
    wrapper.trigger('click')

    expect(changeSpy).toBeCalled()
  })
})
