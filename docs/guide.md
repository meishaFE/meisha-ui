# Guide

* [Button](#button)
* [Cell](#cell)
* [Footer-tab & Tab-item](#footer-tab-tab-item)
* [Toast](#toast)
* [Back-top](#back-top)
* [Modal](#modal)
* [Popup](#popup)
* [Loading](#loading)
* [Switch](#switch)
* [Radio](#radio)

## Button

[examples](../examples/components/button.vue)

### Demo

```html
<ms-button size="large" type="warning">
  这是按钮
</ms-button>
```

### API

| 参数        | 说明           | 类型    | 可选值                               | 默认值  |
| ----------- | -------------- | ------- | ------------------------------------ | ------- |
| type        | 按钮类型       | String  | default / warning / danger / primary | default |
| size        | 按钮尺寸       | String  | normal / small / mini                | normal  |
| disabled    | 禁用按钮       | Boolean | -                                    | false   |
| plain       | 幽灵按钮       | Boolean | -                                    | false   |
| round       | 按钮的圆角     | String  | -                                    | -       |
| native-type | 按钮的原生类型 | String  | -                                    | -       |

### slot

| name | 描述           |
| ---- | -------------- |
| -    | 显示的文本内容 |

## Cell

[examples](../examples/components/cell.vue)

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

[examples](../examples/components/footer-tab.vue)

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

[examples](../examples/components/toast.vue)

### Demo

```js
// 挂载在 vue 下
Vue.prototype.$toast('操作');
this.$toast('操作');

this.$toast.success('操作'); // 成功的提示

// 单独引入
import { Toast } from 'meisha-ui';
const toast = Toast('操作');
toast.close();
```

### options

| 参数        | 说明                          | 类型   | 可选值                | 默认值 |
| ----------- | ----------------------------- | ------ | --------------------- | ------ |
| message     | Toast 显示的文本内容          | String | -                     | -      |
| position    | Toast 显示的位置              | String | top / middle / bottom | middle |
| custom-class | 自定义的 class                | String | -                     | -      |
| icon-class   | icon 的 class                 | String | -                     | -      |
| type        | 提示的类型，会显示对应的 icon | String | success / error       | -      |

## Back-top

[examples](../examples/components/back-top.vue)

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

[examples](../examples/components/modal.vue)

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

[examples](../examples/components/popup.vue)

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

[examples](../examples/components/loading.vue)

### Demo

```js
import { Loading } from 'meisha-ui';

let l = Loading(); // 会返回 loading 实例，可以使用 close 方法关闭

l.close();

// 或者在组件内的方法

let l = this.$loading();

l.close();
```

### options

| 参数 | 说明                   | 类型   | 可选值 | 默认值    |
| ---- | ---------------------- | ------ | ------ | --------- |
| text | loading 显示的文本内容 | String | -      | 加载中... |

## Switch

[examples](../examples/components/switch.vue)

### API

| 参数          | 说明                  | 类型    | 可选值 | 默认值  |
| ------------- | --------------------- | ------- | ------ | ------- |
| value         | 绑定值                | Boolean | -      | true    |
| width         | Switch 的宽度（像素） | Number  | -      | 48      |
| disabled      | 是否禁用              | Boolean | -      | false   |
| inactive-color | Switch 关闭时的背景色 | String  | -      | #dbdee4 |
| active-color   | switch 打开时的背景色 | String  | -      | #00ca9d |

### slot

| name | 描述                |
| ---- | ------------------- |
| -    | Switch Label 的内容 |

### Events

| 事件名称 | 说明                    | 回调参数 |
| -------- | ----------------------- | -------- |
| change   | Switch 绑定的值改变事件 | value    |

## Radio

[examples](../examples/components/radio.vue)

### TODO

1. 按钮样式的 radio
2. 边框样式的 radio

### API

| 参数         | 说明                                 | 类型    | 可选值 | 默认值  |
| ------------ | ------------------------------------ | ------- | ------ | ------- |
| value        | 绑定值                               | Boolean | -      | true    |
| size         | Radio 的大小（像素）                 | Number  | -      | 20      |
| disabled     | 是否禁用                             | Boolean | -      | false   |
| border-color  | Radio 的边框色                       | String  | -      | #eff2f7 |
| active-color  | Radio 选中时的背景色                 | String  | -      | #00ca9d |
| button       | Radio 显示为 button 样式             | Boolean | -      | false   |
| button-round | Radio 显示为 button 样式时自定义圆角 | String  | -      | 4px     |

### slot

| name | 描述               |
| ---- | ------------------ |
| -    | Radio Label 的内容 |

### Events

| 事件名称 | 说明                   | 回调参数 |
| -------- | ---------------------- | -------- |
| change   | Radio 绑定的值改变事件 | value    |
