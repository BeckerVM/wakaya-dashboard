<template>
  <div id="app">
    <div class="wky-dash">
      <div class="wky-dash__left">
        <sidebar></sidebar>
      </div>
      <div class="wky-dash__rigth">
        <header-user></header-user>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import HeaderUser from './components/Header';

export default {
  name: 'app',
  components: {
    Sidebar,
    HeaderUser
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
  letter-spacing: .2rem;
}

html {
  font-size: 62.5%;
  --color-white: #fff;
  --color-primary-1: #2E3A4D;
  --color-secondary-1: #F4511E;
  --color-black: #000;
  --color-gray: #f1f1f1;
}

body {
  font-family: sans-serif;
  box-sizing: border-box;
}

.wky-dash {
  display: flex;
}

.wky-dash__left {
  width: 24.5rem;
  position: fixed;
  top: 0;
  left: 0;
}

.wky-dash__rigth {
  flex: 1;
  margin-left: 24.5rem;
}
</style>
