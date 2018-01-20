# Guide

* [Button](#button)
  * [Demo](#demo)
  * [API](#api)
  * [slot](#slot)
* [Cell](#cell)
  * [API](#api)
  * [slot](#slot)
* [Footer-tab & Tab-item](#footer-tab-tab-item)
  * [Demo](#demo)
  * [Footer-tab API](#footer-tab-api)
  * [Footer-tab slot](#footer-tab-slot)
  * [Tab-item API](#tab-item-api)
  * [Tab-item slot](#tab-item-slot)
* [Toast](#toast)
  * [Demo](#demo)
* [Back-top](#back-top)
  * [API](#api)
  * [Events](#events)
  * [slot](#slot)
* [Modal](#modal)
  * [API](#api)
  * [Events](#events)
* [Popup](#popup)
  * [API](#api)
  * [slot](#slot)
  * [Events](#events)

## Button

### Demo

```html
<ms-button size="large" type="warning">
  这是按钮
</ms-button>
```

### API

| 参数        | 说明           | 类型    | 可选值                            | 默认值  |
| ----------- | -------------- | ------- | --------------------------------- | ------- |
| type        | 按钮类型       | String  | default, warning, danger, primary | default |
| size        | 按钮尺寸       | String  | normal, small, mini               | normal  |
| disabled    | 禁用按钮       | Boolean | -                                 | false   |
| plain       | 幽灵按钮       | Boolean | -                                 | false   |
| round       | 按钮的圆角     | String  | -                                 | -       |
| native-type | 按钮的原生类型 | String  | -                                 | -       |

### slot

| name | 描述           |
| ---- | -------------- |
| -    | 显示的文本内容 |

## Cell

### API

| 参数          | 说明                                 | 类型     | 可选值 | 默认值 |
| ------------- | ------------------------------------ | -------- | ------ | ------ |
| icon          | 右侧显示的 icon                      | String   | -      | -      |
| is-link       | 是否为链接，如果为链接默认显示右箭头 | Boolean  | -      | false  |
| on-icon-click | 点击 icon 的回调                     | Function | -      | -      |

### slot

| name | 描述        |
| ---- | ----------- |
| -    | Cell 的内容 |

## Footer-tab & Tab-item

### Demo

```js
 <ms-footer-tab v-model="activated"
                       @change="handleFooterTabChange">
            <ms-tab-item value="1">
                <i slot="icon"
                   class="ms-icon-arrow-right"></i>
                tab-item1</ms-tab-item>
            <ms-tab-item value="2">
                <i slot="icon"
                   class="ms-icon-arrow-left"></i>
                tab-item2</ms-tab-item>
            <ms-tab-item value="3">tab-item3</ms-tab-item>
        </ms-footer-tab>
```

### Footer-tab API

| 参数  | 说明                      | 类型    | 可选值 | 默认值 |
| ----- | ------------------------- | ------- | ------ | ------ |
| fixd  | 是否固定在底部            | Boolean | -      | true   |
| value | 绑定值，选中 tab 的 value | String  | -      | -      |

### Footer-tab slot

| 参数 | 说明              | 类型 | 可选值 | 默认值 |
| ---- | ----------------- | ---- | ------ | ------ |
| -    | Footer-tab 的内容 | -    | -      | -      |

### Tab-item API

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| value | tab 的值 | String | -      | -      |

### Tab-item slot

| name | 描述             |
| ---- | ---------------- |
| -    | 显示的文本内容   |
| icon | 显示的 icon 内容 |

## Toast

### Demo

```js
// 挂载在 vue 下
Vue.prototype.$toast('操作');
this.$toast('操作');

// 单独引入
import { Toast } from 'meisha-ui';
const toast = Toast('操作');
toast.close();
```

## Back-top

### API

| 参数         | 说明               | 类型   | 可选值 | 默认值    |
| ------------ | ------------------ | ------ | ------ | --------- |
| show-height  | 按钮显示的滚动高度 | Number | -      | 500       |
| custom-class | 自定义的类名       | String | -      | -         |
| icon         | icon 类型          | String | -      | arrow-top |

### Events

| 事件名称 | 说明         | 回调参数 |
| -------- | ------------ | -------- |
| click    | 点击按钮触发 | Event    |

### slot

| name | 描述           |
| ---- | -------------- |
| -    | 显示的文本内容 |

## Modal

### API

| 参数           | 说明                              | 类型    | 可选值 | 默认值 |
| -------------- | --------------------------------- | ------- | ------ | ------ |
| close-on-click | 是否可以点击关闭                  | Boolean | -      | true   |
| lock-screen    | 是否锁定屏幕滚动                  | Boolean | -      | true   |
| visible        | 是否显示 Modal，支持 .sync 修饰符 | Boolean | -      | false  |

### Events

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| open     | Modal 打开的回调 | -        |
| close    | Modal 关闭的回调 | -        |

## Popup

### API

| 参数                 | 说明                              | 类型    | 可选值 | 默认值 |
| -------------------- | --------------------------------- | ------- | ------ | ------ |
| visible              | 是否显示 Popup，支持 .sync 修饰符 | Boolean | -      | false  |
| close-on-click-modal | 是否可以通过点击遮罩点击关闭      | Boolean | -      | true   |
| title                | 显示的标题                        | String  | -      | -      |
| modal                | 是否需要遮罩                      | Boolean | -      | true   |
| custom-class         | 自定义的类名                      | String  | -      | -      |
| show-close           | 是否显示关闭按钮                  | Boolean | -      | true   |
| height               | Popup 的高度                      | String  | -      | 80%    |

### slot

| name | 描述         |
| ---- | ------------ |
| -    | Popup 的内容 |

### Events

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| open     | Popup 打开的回调 | -        |
| close    | Popup 关闭的回调 | -        |


## Loading
