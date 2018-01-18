# Guide

## Button

```html
<ms-button size="large" type="warning">
  这是按钮
</ms-button>
```

#### API

| 参数        | 说明           | 类型    | 可选值                            | 默认值  |
| ----------- | -------------- | ------- | --------------------------------- | ------- |
| type        | 按钮类型       | String  | default, warning, danger, primary | default |
| size        | 按钮尺寸       | String  | normal, small, mini               | normal  |
| disabled    | 禁用按钮       | Boolean |                                   | false   |
| plain       | 幽灵按钮       | Boolean |                                   | false   |
| native-type | 按钮的原生类型 | String  |                                   |         |

#### slot

| name | 描述           |
| ---- | -------------- |
| -    | 显示的文本内容 |

## List-item

## Footer-tab

## Toast
```js
// 挂载在 vue 下
Vue.prototype.$toast('操作')
this.$toast('操作')

// 单独引入
import {Toast} from 'meisha-ui'
const toast = Toast('操作')
toast.close()
```

## Back-top

#### API

| 参数        | 说明               | 类型   | 可选值 | 默认值    |
| ----------- | ------------------ | ------ | ------ | --------- |
| showHeight  | 按钮显示的滚动高度 | Number | 500    |
| customClass | 自定义的类名       | String |        |           |
| icon        | icon 类型          | String |        | arrow-top |

#### Event

| 事件名称 | 说明         | 回调参数 |
| -------- | ------------ | -------- |
| click    | 点击按钮触发 | Event    |

#### slot

| name | 描述           |
| ---- | -------------- |
| -    | 显示的文本内容 |
