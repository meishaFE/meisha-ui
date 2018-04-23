<template><div class="api"><article class="markdown-body"><h1 id="guide">Guide</h1>
<ul>
<li><a href="#button">Button</a></li>
<li><a href="#cell">Cell</a></li>
<li><a href="#footer-tab-tab-item">Footer-tab & Tab-item</a></li>
<li><a href="#toast">Toast</a></li>
<li><a href="#back-top">Back-top</a></li>
<li><a href="#modal">Modal</a></li>
<li><a href="#popup">Popup</a></li>
<li><a href="#loading">Loading</a></li>
<li><a href="#switch">Switch</a></li>
<li><a href="#radio">Radio</a></li>
<li><a href="#input">Input</a></li>
<li><a href="#textarea">Textarea</a></li>
<li><a href="#input-number">Input-Number</a></li>
<li><a href="#selector">Selector</a></li>
<li><a href="#range">range</a></li>
<li><a href="#messagebox">MessageBox</a></li>
<li><a href="#swipe">Swipe</a></li>
<li><a href="#checkbox-group">Checkbox-group</a></li>
<li><a href="#badge">Badge</a></li>
</ul>
<h2 id="button">Button</h2>
<p><a href="../examples/components/button.vue">examples</a></p>
<h3 id="demo">Demo</h3>
<pre><code class="html language-html">&lt;ms-button size="large" type="warning"&gt;
  这是按钮
&lt;/ms-button&gt;
</code></pre>
<h3 id="api">API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>按钮类型</td>
<td>String</td>
<td>default / warning / danger / primary</td>
<td>default</td>
</tr>
<tr>
<td>size</td>
<td>按钮尺寸</td>
<td>String</td>
<td>normal / small / mini</td>
<td>normal</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用按钮</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>plain</td>
<td>幽灵按钮</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>round</td>
<td>按钮的圆角</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>native-type</td>
<td>按钮的原生类型</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="slot">slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>显示的文本内容</td>
</tr>
</tbody>
</table>
<h2 id="cell">Cell</h2>
<p><a href="../examples/components/cell.vue">examples</a></p>
<h3 id="api-1">API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>icon</td>
<td>右侧显示的 icon</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>is-link</td>
<td>是否为链接，如果为链接默认显示右箭头</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>on-icon-click</td>
<td>点击 icon 的回调</td>
<td>Function</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="slot-1">slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>Cell 的内容</td>
</tr>
</tbody>
</table>
<h2 id="footertabtabitem">Footer-tab &amp; Tab-item</h2>
<p><a href="../examples/components/footer-tab.vue">examples</a></p>
<h3 id="demo-1">Demo</h3>
<pre><code class="js language-js"> &lt;ms-footer-tab v-model="activated"
                       @change="handleFooterTabChange"&gt;
            &lt;ms-tab-item value="1"&gt;
                &lt;i slot="icon"
                   class="ms-icon-arrow-right"&gt;&lt;/i&gt;
                tab-item1&lt;/ms-tab-item&gt;
            &lt;ms-tab-item value="2"&gt;
                &lt;i slot="icon"
                   class="ms-icon-arrow-left"&gt;&lt;/i&gt;
                tab-item2&lt;/ms-tab-item&gt;
            &lt;ms-tab-item value="3"&gt;tab-item3&lt;/ms-tab-item&gt;
        &lt;/ms-footer-tab&gt;
</code></pre>
<h3 id="footertabapi">Footer-tab API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>fixd</td>
<td>是否固定在底部</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>value</td>
<td>绑定值，选中 tab 的 value</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="footertabslot">Footer-tab slot</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>Footer-tab 的内容</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="tabitemapi">Tab-item API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>tab 的值</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="tabitemslot">Tab-item slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>显示的文本内容</td>
</tr>
<tr>
<td>icon</td>
<td>显示的 icon 内容</td>
</tr>
</tbody>
</table>
<h2 id="toast">Toast</h2>
<p><a href="../examples/components/toast.vue">examples</a></p>
<h3 id="demo-2">Demo</h3>
<pre><code class="js language-js">// 挂载在 vue 下
Vue.prototype.$toast('操作');
this.$toast('操作');

this.$toast.success('操作'); // 成功的提示

// 单独引入
import { Toast } from 'meisha-ui';
const toast = Toast('操作');
toast.close();
</code></pre>
<h3 id="options">options</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>message</td>
<td>Toast 显示的文本内容</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>position</td>
<td>Toast 显示的位置</td>
<td>String</td>
<td>top / middle / bottom</td>
<td>middle</td>
</tr>
<tr>
<td>custom-class</td>
<td>自定义的 class</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>icon-class</td>
<td>icon 的 class</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>type</td>
<td>提示的类型，会显示对应的 icon</td>
<td>String</td>
<td>success / error</td>
<td>-</td>
</tr>
<tr>
<td>duration</td>
<td>toast 显示的时间，单位：毫秒（-1 则为不关闭）</td>
<td>Number</td>
<td>-</td>
<td>1500</td>
</tr>
</tbody>
</table>
<h2 id="backtop">Back-top</h2>
<p><a href="../examples/components/back-top.vue">examples</a></p>
<h3 id="api-2">API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>show-height</td>
<td>按钮显示的滚动高度</td>
<td>Number</td>
<td>-</td>
<td>500</td>
</tr>
<tr>
<td>custom-class</td>
<td>自定义的类名</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>icon 类型</td>
<td>String</td>
<td>-</td>
<td>arrow-top</td>
</tr>
</tbody>
</table>
<h3 id="events">Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>点击按钮触发</td>
<td>Event</td>
</tr>
</tbody>
</table>
<h3 id="slot-2">slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>显示的文本内容</td>
</tr>
</tbody>
</table>
<h2 id="modal">Modal</h2>
<p><a href="../examples/components/modal.vue">examples</a></p>
<h3 id="api-3">API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>close-on-click</td>
<td>是否可以点击关闭</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>lock-screen</td>
<td>是否锁定屏幕滚动</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>visible</td>
<td>是否显示 Modal，支持 .sync 修饰符</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="events-1">Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>open</td>
<td>Modal 打开的回调</td>
<td>-</td>
</tr>
<tr>
<td>close</td>
<td>Modal 关闭的回调</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="popup">Popup</h2>
<p><a href="../examples/components/popup.vue">examples</a></p>
<h3 id="api-4">API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>visible</td>
<td>是否显示 Popup，支持 .sync 修饰符</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>close-on-click-modal</td>
<td>是否可以通过点击遮罩点击关闭</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>title</td>
<td>显示的标题</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>modal</td>
<td>是否需要遮罩</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>custom-class</td>
<td>自定义的类名</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>show-close</td>
<td>是否显示关闭按钮</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>height</td>
<td>Popup 的高度</td>
<td>String</td>
<td>-</td>
<td>80%</td>
</tr>
<tr>
<td>body-custom-class</td>
<td>body 的自定义类名</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="slot-3">slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>Popup 的内容</td>
</tr>
<tr>
<td>header</td>
<td>Popup Header 的内容</td>
</tr>
</tbody>
</table>
<h3 id="events-2">Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>open</td>
<td>Popup 打开的回调</td>
<td>-</td>
</tr>
<tr>
<td>close</td>
<td>Popup 关闭的回调</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="loading">Loading</h2>
<p><a href="../examples/components/loading.vue">examples</a></p>
<h3 id="demo-3">Demo</h3>
<pre><code class="js language-js">import { Loading } from 'meisha-ui';

let l = Loading(); // 会返回 loading 实例，可以使用 close 方法关闭

l.close();

// 或者在组件内的方法

let l = this.$loading();

l.close();
</code></pre>
<h3 id="options-1">options</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>text</td>
<td>loading 显示的文本内容</td>
<td>String</td>
<td>-</td>
<td>加载中…</td>
</tr>
</tbody>
</table>
<h2 id="switch">Switch</h2>
<p><a href="../examples/components/switch.vue">examples</a></p>
<h3 id="api-5">API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>绑定值</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>width</td>
<td>Switch 的宽度（像素）</td>
<td>Number</td>
<td>-</td>
<td>48</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>inactive-color</td>
<td>Switch 关闭时的背景色</td>
<td>String</td>
<td>-</td>
<td>#dbdee4</td>
</tr>
<tr>
<td>active-color</td>
<td>switch 打开时的背景色</td>
<td>String</td>
<td>-</td>
<td>#00ca9d</td>
</tr>
</tbody>
</table>
<h3 id="slot-4">slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>Switch Label 的内容</td>
</tr>
</tbody>
</table>
<h3 id="events-3">Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>Switch 绑定的值改变事件</td>
<td>value</td>
</tr>
</tbody>
</table>
<h2 id="radio">Radio</h2>
<p><a href="../examples/components/radio.vue">examples</a></p>
<h3 id="api-6">API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>绑定值</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>Radio 的大小（像素）</td>
<td>Number</td>
<td>-</td>
<td>20</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>border-color</td>
<td>Radio 的边框色</td>
<td>String</td>
<td>-</td>
<td>#eff2f7</td>
</tr>
<tr>
<td>active-color</td>
<td>Radio 选中时的背景色</td>
<td>String</td>
<td>-</td>
<td>#00ca9d</td>
</tr>
<tr>
<td>button</td>
<td>Radio 显示为 button 样式</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>button-round</td>
<td>Radio 显示为 button 样式时自定义圆角</td>
<td>String</td>
<td>-</td>
<td>4px</td>
</tr>
</tbody>
</table>
<h3 id="slot-5">slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>Radio Label 的内容</td>
</tr>
</tbody>
</table>
<h3 id="events-4">Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>Radio 绑定的值改变事件</td>
<td>value</td>
</tr>
</tbody>
</table>
<h2 id="input">Input</h2>
<p><a href="../examples/components/textarea.vue">examples</a></p>
<h3 id="todo">TODO</h3>
<ol>
<li>表单校验</li>
</ol>
<h3 id="api-7">API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>绑定值</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>type</td>
<td>Input 的原生属性</td>
<td>String</td>
<td>-</td>
<td>text</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>readonly</td>
<td>是否只读</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>label</td>
<td>Input 的 label</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>placeholder</td>
<td>Input 的 placeholder</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>text-align</td>
<td>Input 文字的对齐方式</td>
<td>String</td>
<td>left / right</td>
<td>right</td>
</tr>
<tr>
<td>required</td>
<td>Input 是否必填</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="slot-6">slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>Input Label 的内容</td>
</tr>
</tbody>
</table>
<h3 id="events-5">Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>Input 绑定的值改变事件</td>
<td>value</td>
</tr>
</tbody>
</table>
<h2 id="textarea">Textarea</h2>
<p><a href="../examples/components/input.vue">examples</a></p>
<h3 id="todo-1">TODO</h3>
<ol>
<li>表单校验</li>
</ol>
<h3 id="api-8">API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>绑定值</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>rows</td>
<td>Textarea 的 rows</td>
<td>Number</td>
<td>-</td>
<td>4</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>readonly</td>
<td>是否只读</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>label</td>
<td>Textarea 的 label</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>placeholder</td>
<td>Textarea 的 placeholder</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>required</td>
<td>Textarea 是否必填</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="slot-7">slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>Textarea Label 的内容</td>
</tr>
</tbody>
</table>
<h3 id="events-6">Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>Textarea 绑定的值改变事件</td>
<td>value</td>
</tr>
</tbody>
</table>
<h2 id="inputnumber">Input-Number</h2>
<p><a href="../examples/components/input-number.vue">examples</a></p>
<h3 id="api-9">API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>绑定值</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>step</td>
<td>计数器步长</td>
<td>Number</td>
<td>-</td>
<td>1</td>
</tr>
<tr>
<td>min</td>
<td>计数器允许的最小值</td>
<td>Number</td>
<td>-</td>
<td>-Infinity</td>
</tr>
<tr>
<td>max</td>
<td>计数器允许的最大值</td>
<td>Number</td>
<td>-</td>
<td>Infinity</td>
</tr>
<tr>
<td>size</td>
<td>计数器尺寸</td>
<td>String</td>
<td>normal / small</td>
<td>normal</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>controls</td>
<td>是否使用控制按钮</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>debounce</td>
<td>输入时的去抖延迟，毫秒</td>
<td>Number</td>
<td>-</td>
<td>300</td>
</tr>
</tbody>
</table>
<h3 id="events-7">Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>绑定值被改变时触发</td>
<td>newVal:最后变更的值, oldVal: 上一个值</td>
</tr>
<tr>
<td>blur</td>
<td>组件的 Input 失去焦点时触发</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>组件的 Input 获得焦点时触发</td>
<td>(event: Event)</td>
</tr>
</tbody>
</table>
<h2 id="selector">Selector</h2>
<p><a href="../examples/components/selector.vue">examples</a></p>
<p>这个组件暂时只是接收了 value，未添加 picker 组件，后续迭代</p>
<h3 id="api-10">API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>绑定值</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>multiple</td>
<td>是否多选</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>label</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="events-8">Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>点击事件</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="range">range</h2>
<p><a href="../examples/components/range.vue">examples</a></p>
<h3 id="api-11">API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>滑块的值</td>
<td>Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>min</td>
<td>最小值</td>
<td>Number</td>
<td></td>
<td>0</td>
</tr>
<tr>
<td>max</td>
<td>最大值</td>
<td>Number</td>
<td></td>
<td>100</td>
</tr>
<tr>
<td>step</td>
<td>步长</td>
<td>Number</td>
<td></td>
<td>1</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td></td>
<td>false</td>
</tr>
<tr>
<td>barHeight</td>
<td>滑槽的线宽（像素）</td>
<td>Number</td>
<td></td>
<td>4</td>
</tr>
</tbody>
</table>
<h3 id="slot-8">slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>start</td>
<td>滑块左边显示的内容</td>
</tr>
<tr>
<td>end</td>
<td>滑块右边显示的内容</td>
</tr>
</tbody>
</table>
<h3 id="events-9">Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>绑定的值改变事件</td>
<td>value</td>
</tr>
</tbody>
</table>
<h2 id="messagebox">MessageBox</h2>
<p><a href="../examples/components/message-box.vue">examples</a></p>
<h3 id="api-12">API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>visible</td>
<td>是否显示 MessageBox，支持 .sync 修饰符</td>
<td>Boolean</td>
<td></td>
<td>false</td>
</tr>
<tr>
<td>title</td>
<td>显示的标题</td>
<td>String</td>
<td>—</td>
<td>-</td>
</tr>
<tr>
<td>message</td>
<td>显示的内容，可以传 html 片段</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>show-confirm-button</td>
<td>是否显示确定按钮</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>show-cancel-button</td>
<td>是否显示取消按钮</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>show-footer</td>
<td>是否显示底部</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>confirm-button-text</td>
<td>确定按钮的显示文本</td>
<td>String</td>
<td>-</td>
<td>确定</td>
</tr>
<tr>
<td>cancel-button-text</td>
<td>取消按钮的显示文本</td>
<td>String</td>
<td>-</td>
<td>取消</td>
</tr>
<tr>
<td>confirm-button-class</td>
<td>确定按钮自定义的 class</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>cancel-button-class</td>
<td>取消按钮自定义的 class</td>
<td>String</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>modal-color</td>
<td>遮罩层的颜色</td>
<td>String</td>
<td>-</td>
<td>transparent</td>
</tr>
<tr>
<td>close-on-click-modal</td>
<td>是否可以通过点击遮罩关闭弹窗</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="slot-9">slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>弹窗主体显示的内容，和 message 显示的内容一样</td>
</tr>
<tr>
<td>footer</td>
<td>弹窗底部的内容</td>
</tr>
</tbody>
</table>
<h3 id="events-10">Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>confirm</td>
<td>点击确定按钮的事件</td>
<td>-</td>
</tr>
<tr>
<td>cancel</td>
<td>点击取消按钮的事件</td>
<td>-</td>
</tr>
<tr>
<td>open</td>
<td>弹窗打开的事件</td>
<td>-</td>
</tr>
<tr>
<td>close</td>
<td>弹窗关闭的事件</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="swipe">Swipe</h2>
<p><strong>需要重构</strong></p>
<p><a href="../examples/components/swipe.vue">examples</a></p>
<h3 id="api-13">API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>speed</td>
<td>过度动画持续时间（毫秒）</td>
<td>Number</td>
<td></td>
<td>300</td>
</tr>
<tr>
<td>auto</td>
<td>自动播放的时间间隔（毫秒）</td>
<td>Number</td>
<td></td>
<td>3000</td>
</tr>
<tr>
<td>defaultIndex</td>
<td>初始显示的轮播图的索引</td>
<td>Number</td>
<td></td>
<td>0</td>
</tr>
<tr>
<td>loop</td>
<td>是否可以循环播放</td>
<td>Boolean</td>
<td></td>
<td>true</td>
</tr>
<tr>
<td>showIndicators</td>
<td>是否显示下方的指示器</td>
<td>Boolean</td>
<td></td>
<td>true</td>
</tr>
<tr>
<td>prevent</td>
<td>是否在 touchstart 事件触发时阻止事件的默认行为。设为 true 可提高运行在低版本安卓浏览器时的性能</td>
<td>Boolean</td>
<td></td>
<td>false</td>
</tr>
<tr>
<td>stopPropagation</td>
<td>是否在 touchstart 事件触发时阻止冒泡。</td>
<td>Boolean</td>
<td></td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="slot-10">slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>ms-swipe-item 组件</td>
</tr>
</tbody>
</table>
<h3 id="msswipetiemslot">ms-swipe-tiem slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>轮播图的内容</td>
</tr>
</tbody>
</table>
<h2 id="checkboxgroup">Checkbox-group</h2>
<p><a href="../examples/components/checkbox.vue">examples</a></p>
<h3 id="api-14">API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>Checkbox-Group 的绑定值</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>button</td>
<td>Checkbox-Group 显示为 button 样式</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>round</td>
<td>Checkbox-Group 显示为 button 样式时自定义圆角</td>
<td>String</td>
<td>-</td>
<td>4px</td>
</tr>
<tr>
<td>max</td>
<td>Checkbox-Group 最多的选择数目</td>
<td>Number</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="checkboxapi">Checkbox API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>绑定值</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用，在 Checkbox-Group 中会优先遵循 Checkbox-Group 的值</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>button</td>
<td>Checkbox 显示为 button 样式，在 Checkbox-Group 中会优先遵循 Checkbox-Group 的值</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>round</td>
<td>Checkbox 显示为 button 样式时自定义圆角，在 Checkbox-Group 中会优先遵循 Checkbox-Group 的值</td>
<td>String</td>
<td>-</td>
<td>4px</td>
</tr>
<tr>
<td>checked</td>
<td>Checkbox 是否已经选择</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<h2 id="badge">Badge</h2>
<p><a href="../examples/components/badge.vue">examples</a></p>
<h3 id="api-15">API</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>显示值</td>
<td>String,Number</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>max</td>
<td>最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型</td>
<td>Number</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>is-dot</td>
<td>是否只显示小红点</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>hidden</td>
<td>是否隐藏badge</td>
<td>Boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="slot-11">slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>添加badge的内容</td>
</tr>
</tbody>
</table></article></div></template>




<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../styles/github-markdown.css';
.markdown-body {
  background: #fff;
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
