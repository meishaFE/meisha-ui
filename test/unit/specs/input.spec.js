import { mountFactory } from '../utils'
import MsInput from '@/input/src/main.vue'

const createInput = mountFactory(MsInput)

describe('input', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy && wrapper.destroy()
  })

  it('create', () => {
    wrapper = createInput()

    expect(wrapper.contains('.ms-input')).toBeTruthy()
    expect(wrapper.vm.type).toBe('text')
    expect(wrapper.vm.readonly).toBeFalsy()
    expect(wrapper.vm.disabled).toBeFalsy()
    expect(wrapper.vm.required).toBeFalsy()
  })

  it('prop-readonly', () => {
    wrapper = createInput({
      readonly: true
    })

    expect(wrapper.find('input').attributes().readonly).toBeTruthy()
    expect(wrapper.contains('.is-disabled')).toBeTruthy()
  })

  it('prop-disabled', () => {
    wrapper = createInput({
      disabled: true
    })

    expect(wrapper.find('input').attributes().disabled).toBeTruthy()
    expect(wrapper.contains('.is-disabled')).toBeTruthy()
  })

  it('prop-label', () => {
    const LABEL_TEXT = 'LABEL_TEXT'
    wrapper = createInput({
      label: LABEL_TEXT
    })

    expect(wrapper.find('label').text()).toBe(LABEL_TEXT)
  })

  it('prop-placeholder', () => {
    const PLACEHOLDER_TEXT = 'PLACEHOLDER_TEXT'
    wrapper = createInput({
      placeholder: PLACEHOLDER_TEXT
    })

    expect(wrapper.find('input').attributes().placeholder).toBe(PLACEHOLDER_TEXT)
  })

  it('prop-textAlign', () => {
    wrapper = createInput({
      textAlign: 'left'
    })
    expect(/text-align: ?left/i.test(wrapper.find('input').attributes().style)).toBeTruthy()
  })

  it('prop-required', () => {
    wrapper = createInput({
      required: true
    })
    expect(wrapper.contains('.is-required')).toBeTruthy()
  })

  it('setCurrentValue', () => {
    const TEXT_VALUE = 'TEXT_VALUE'
    wrapper = createInput()
    const setCurrentValueSpy = jest.spyOn(wrapper.vm, 'setCurrentValue')
    wrapper.update()
    wrapper.setProps({
      value: TEXT_VALUE
    })
    expect(setCurrentValueSpy).toBeCalled()
    expect(wrapper.vm.currentValue).toBe(TEXT_VALUE)
  })

  it('handleInput', () => {
    wrapper = createInput()
    const inputSpy = jest.spyOn(wrapper.vm, 'handleInput')
    wrapper.update()
    wrapper.find('input').trigger('input')
    expect(inputSpy).toBeCalled()
  })
})
