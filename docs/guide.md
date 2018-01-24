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
* [Input](#input)
* [Textarea](#textarea)
* [Selector](#selector)
* [MessageBox](#messagebox)

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

| 参数         | 说明                          | 类型   | 可选值                | 默认值 |
| ------------ | ----------------------------- | ------ | --------------------- | ------ |
| message      | Toast 显示的文本内容          | String | -                     | -      |
| position     | Toast 显示的位置              | String | top / middle / bottom | middle |
| custom-class | 自定义的 class                | String | -                     | -      |
| icon-class   | icon 的 class                 | String | -                     | -      |
| type         | 提示的类型，会显示对应的 icon | String | success / error       | -      |

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

| name   | 描述                |
| ------ | ------------------- |
| -      | Popup 的内容        |
| header | Popup Header 的内容 |

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

| 参数           | 说明                  | 类型    | 可选值 | 默认值  |
| -------------- | --------------------- | ------- | ------ | ------- |
| value          | 绑定值                | Boolean | -      | true    |
| width          | Switch 的宽度（像素） | Number  | -      | 48      |
| disabled       | 是否禁用              | Boolean | -      | false   |
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

### API

| 参数         | 说明                                 | 类型    | 可选值 | 默认值  |
| ------------ | ------------------------------------ | ------- | ------ | ------- |
| value        | 绑定值                               | Boolean | -      | true    |
| size         | Radio 的大小（像素）                 | Number  | -      | 20      |
| disabled     | 是否禁用                             | Boolean | -      | false   |
| border-color | Radio 的边框色                       | String  | -      | #eff2f7 |
| active-color | Radio 选中时的背景色                 | String  | -      | #00ca9d |
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

## Input

[examples](../examples/components/textarea.vue)

### TODO

1. 表单校验

### API

| 参数        | 说明                 | 类型    | 可选值       | 默认值 |
| ----------- | -------------------- | ------- | ------------ | ------ |
| value       | 绑定值               | Boolean | -            | true   |
| type        | Input 的原生属性     | String  | -            | text   |
| disabled    | 是否禁用             | Boolean | -            | false  |
| readonly    | 是否只读             | Boolean | -            | false  |
| label       | Input 的 label       | String  | -            | -      |
| placeholder | Input 的 placeholder | String  | -            | -      |
| text-align  | Input 文字的对齐方式 | String  | left / right | right  |
| required    | Input 是否必填       | Boolean | -            | false  |

### slot

| name | 描述               |
| ---- | ------------------ |
| -    | Input Label 的内容 |

### Events

| 事件名称 | 说明                   | 回调参数 |
| -------- | ---------------------- | -------- |
| change   | Input 绑定的值改变事件 | value    |

## Textarea

[examples](../examples/components/input.vue)

### TODO

1. 表单校验

### API

| 参数        | 说明                    | 类型    | 可选值 | 默认值 |
| ----------- | ----------------------- | ------- | ------ | ------ |
| value       | 绑定值                  | Boolean | -      | true   |
| rows        | Textarea 的 rows        | Number  | -      | 4      |
| disabled    | 是否禁用                | Boolean | -      | false  |
| readonly    | 是否只读                | Boolean | -      | false  |
| label       | Textarea 的 label       | String  | -      | -      |
| placeholder | Textarea 的 placeholder | String  | -      | -      |
| required    | Textarea 是否必填       | Boolean | -      | false  |

### slot

| name | 描述                  |
| ---- | --------------------- |
| -    | Textarea Label 的内容 |

### Events

| 事件名称 | 说明                      | 回调参数 |
| -------- | ------------------------- | -------- |
| change   | Textarea 绑定的值改变事件 | value    |

## Input-Number

[examples](../examples/components/input-number.vue)

### API

| 参数     | 说明                   | 类型    | 可选值         | 默认值    |
| -------- | ---------------------- | ------- | -------------- | --------- |
| value    | 绑定值                 | Boolean | -              | true      |
| step     | 计数器步长             | Number  | -              | 1         |
| min      | 计数器允许的最小值     | Number  | -              | -Infinity |
| max      | 计数器允许的最大值     | Number  | -              | Infinity  |
| size     | 计数器尺寸             | String  | normal / small | normal    |
| disabled | 是否禁用               | Boolean | -              | false     |
| controls | 是否使用控制按钮       | Boolean | -              | false     |
| debounce | 输入时的去抖延迟，毫秒 | Number  | -              | 300       |

### Events

| 事件名称 | 说明                        | 回调参数       |
| -------- | --------------------------- | -------------- |
| change   | 绑定值被改变时触发          | 最后变更的值   |
| blur     | 组件的 Input 失去焦点时触发 | (event: Event) |
| focus    | 组件的 Input 获得焦点时触发 | (event: Event) |

## Selector

[examples](../examples/components/selector.vue)

这个组件暂时只是接收了 value，未添加 picker 组件，后续迭代

### API

| 参数        | 说明        | 类型    | 可选值 | 默认值 |
| ----------- | ----------- | ------- | ------ | ------ |
| value       | 绑定值      | Boolean | -      | true   |
| multiple    | 是否多选    | Boolean | -      | false  |
| disabled    | 是否禁用    | Boolean | -      | false  |
| placeholder | placeholder | String  | -      | -      |
| label       | label       | String  | -      | -      |

### Events

| 事件名称 | 说明     | 回调参数 |
| -------- | -------- | -------- |
| click    | 点击事件 | -        |

## range

[examples](../examples/components/range.vue)

### API

| 参数      | 说明               | 类型    | 可选值 | 默认值 |
| --------- | ------------------ | ------- | ------ | ------ |
| value     | 滑块的值           | Number  |        |        |
| min       | 最小值             | Number  |        | 0      |
| max       | 最大值             | Number  |        | 100    |
| step      | 步长               | Number  |        | 1      |
| disabled  | 是否禁用           | Boolean |        | false  |
| barHeight | 滑槽的线宽（像素） | Number  |        | 4      |

### slot

| name  | 描述               |
| ----- | ------------------ |
| start | 滑块左边显示的内容 |
| end   | 滑块右边显示的内容 |

### Events

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| change   | 绑定的值改变事件 | value    |

## MessageBox

[examples](../examples/components/message-box.vue)

### API

| 参数                 | 说明                                   | 类型    | 可选值 | 默认值 |
| -------------------- | -------------------------------------- | ------- | ------ | ------ |
| visible              | 是否显示 MessageBox，支持 .sync 修饰符 | Boolean |        | false  |
| title                | 显示的标题                             | String  | —      | -      |
| message              | 显示的内容，可以传 html 片段           | String  | -      | -      |
| show-confirm-button  | 是否显示确定按钮                       | Boolean | -      | true   |
| show-cancel-button   | 是否显示取消按钮                       | Boolean | -      | false  |
| confirm-button-text  | 确定按钮的显示文本                     | String  | -      | 确定   |
| cancel-button-text   | 取消按钮的显示文本                     | String  | -      | 取消   |
| confirm-button-class | 确定按钮自定义的 class                 | String  | -      | -      |
| cancel-button-class  | 取消按钮自定义的 class                 | String  | -      | -      |
| close-on-click-modal | 是否可以通过点击遮罩关闭弹窗           | Boolean | -      | false  |

### slot

| name   | 描述               |
| ------ | ------------------ |
| -      | 弹窗主体显示的内容 |
| footer | 弹窗底部的内容     |

### Events

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| confirm  | 点击确定按钮的事件 | -        |
| cancel   | 点击取消按钮的事件 | -        |
| open     | 弹窗打开的事件     | -        |
| close    | 弹窗关闭的事件     | -        |
