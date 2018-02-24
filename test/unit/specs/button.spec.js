import { createFactory } from '../utils'
import MsButton from '@/button/src/main.vue'

const createB = createFactory(MsButton)

describe('button', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy && wrapper.destroy()
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

  it('click', () => {
    wrapper = createB(
      {},
      {
        slots: {
          default: 'button'
        }
      }
    )

    const clickSpy = jest.spyOn(wrapper.vm, 'handleClick')
    const innerClickSpy = jest.spyOn(wrapper.vm, 'handleInnerClick')
    wrapper.update()

    wrapper.trigger('click')
    wrapper.find('.ms-button > span').trigger('click')

    expect(clickSpy).toBeCalled()
    expect(innerClickSpy).toBeCalled()
  })
})
