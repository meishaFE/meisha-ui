import { createFactory } from '../utils'
import MsCell from '@/cell/src/main.vue'

const createCell = createFactory(MsCell)

describe('cell', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy && wrapper.destroy()
  })

  it('create', () => {
    wrapper = createCell()
    expect(wrapper.contains('.ms-cell')).toBeTruthy()
  })

  it('icon', () => {
    wrapper = createCell({
      icon: 'arrow-right'
    })
    expect(wrapper.contains('.ms-icon-arrow-right')).toBeTruthy()
  })

  it('isLink', () => {
    wrapper = createCell({
      isLink: true
    })
    expect(wrapper.contains('.ms-icon-arrow-right')).toBeTruthy()
  })

  it('iconClick', () => {
    wrapper = createCell({
      isLink: true
    })
    const spy = jest.spyOn(wrapper.vm, 'handleIconClick')
    wrapper.update()
    wrapper.find('.ms-cell__suffix').trigger('click')
    expect(spy).toBeCalled()
  })
})
