import { createFactory, mountFactory } from '../utils'
import MsFooterTab from '@/footer-tab/src/main.vue'
import MsTabItem from '@/footer-tab/src/tab-item.vue'

const createFooterTab = createFactory(MsFooterTab)
const createTabItem = mountFactory(MsTabItem)

describe('footer-tab', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy && wrapper.destroy()
  })

  it('create', () => {
    wrapper = createFooterTab()
    expect(wrapper.contains('.ms-footer-tab')).toBeTruthy()
    expect(wrapper.contains('.is-fixed')).toBeTruthy()
  })

  it('tab-item create', () => {
    wrapper = createFooterTab(
      {
        value: 1
      },
      {
        slots: {
          default: MsTabItem
        }
      }
    )
    expect(wrapper.contains('.ms-tab-item')).toBeTruthy()
  })
})
