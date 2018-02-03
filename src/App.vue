<template>
  <div id="app" class="kt-app">
    <div class="kt-side">
      side menu
      <ul>
        <li>menu1</li>
        <li>menu2</li>
        <li>menu3</li>
        <li>menu4</li>
        <li>menu5</li>
        <li>menu6</li>
      </ul>
    </div>
    <div class="kt-main" v-bind:class="{ 'open': toggle }">
      <button class="btn btn-outline-success" type="button" v-on:click="toggleHandler">
        button
      </button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      toggle: false,
    }
  },

  methods: {
    toggleHandler() {
      this.toggle = !this.toggle
    }
  }
}
</script>

<style>
body {
  background-color: #000;
}

.kt-app {
  position: relative;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  background-color: #000;
}

.kt-side {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  width: 250px;
  padding-top: 30px;
  background-color: #000;
  color: #fff;
}

.kt-main {
  position: relative;
  background-color: #000;
  color: #fff;
  transition: transform 300ms cubic-bezier(0.2, 0.7, 0.5, 1);
  /* transform: translateX(250px); */
}

.open {
  transform: translateX(250px);
}
</style>
