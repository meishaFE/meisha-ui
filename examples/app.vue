<template>
    <div>
      <div>
        <h1 style="display: inline; margin-right: 20px;">Meisha-UI</h1>
        <router-link to="/">HomePage</router-link>
      </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
html,
body,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
form,
input,
label,
textarea,
p {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
html {
  overflow-x: hidden;
}
body {
  width: 100%;
  font-family: -apple-system-font, 'Microsoft YaHei', 'Helvetica Neue', sans-serif;
  -webkit-tap-highlight-color: transparent;
  overflow-x: hidden;
  background: #d9dddc;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

*:focus {
  outline: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
label {
  font-weight: normal;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section,
summary {
  display: block;
}

input {
  border: 0;
  outline: none;
  box-shadow: none;
}

/* button {
    border: 0;
    outline: none;
    box-shadow: none;
    user-select: none;
    -webkit-user-select: none;
} */

input,
button,
textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
}

textarea {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 0;
  resize: none;
}

a {
  color: #00ca9d;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

ol,
ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input[type='date']::-webkit-clear-button {
  display: none;
}
</style>
<style lang="scss" src="../packages/theme-default/src/index.scss">
</style>
