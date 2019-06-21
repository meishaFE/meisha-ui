import Demo from 'packages/demo';
import { createTest } from '../utils';
describe('Demo.vue', () => {
  it('should render correct contents', () => {
    const vm = createTest(Demo);
    expect(vm.$el.querySelector('.demo h1').textContent).toEqual('Meisha Demo');
  });
});
