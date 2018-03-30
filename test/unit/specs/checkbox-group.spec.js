import { createFactory } from '../utils'
import MsCheckboxGroup from '@/checkbox-group/src/main.vue'

const createCheckboxGroup = createFactory(MsCheckboxGroup)

describe('checkbox-group', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy && wrapper.destroy()
  })
  it('create', () => {
    wrapper = createCheckboxGroup()
    expect(wrapper.contains('.ms-checkbox-group')).toBeTruthy()
  })

  it('slot', () => {
    wrapper = createCheckboxGroup(
      {},
      {
        slots: {
          default: '<div class="test-default-slot">test</div>'
        }
      }
    )
    expect(wrapper.contains('.test-default-slot')).toBeTruthy()
  })
})
