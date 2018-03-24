<template>
  <div class="ktube-app">
    <div class="ktube-side">
      <AppSidebar/>
    </div>
    <div
      class="ktube-stage"
      v-bind:class="{ 'ktube-stage-open': open }"
    >
      <button
        class="btn btn-outline-success btn-toggler"
        type="button"
        v-on:click="toggleOpen"
      >
        <font-awesome-icon :icon="iconBar"/> Menu
      </button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppSidebar from '@/components/app/AppSidebar.vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'
import _ from 'underscore'

export default {
  name: 'App',

  components: {
    AppSidebar,
    FontAwesomeIcon,
  },

  data() {
    return {
      open: false,
    }
  },

  computed: {
    iconBar () {
      return faBars
    },
  },

  methods: {
    toggleOpen() {
      this.open = !this.open
      _.delay(function() {
        document.body.classList.toggle('hold')
      }, this.open ? 0 : 300)
    },
  },
}
</script>

<style >
.ktube-side {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  width: 250px;
  padding-top: 30px;
  background-color: #000;
}

.ktube-stage {
  position: relative;
  background-color: #000;
  transition: transform 300ms cubic-bezier(0.2, 0.7, 0.5, 1);
}

.ktube-stage-open {
  transform: translateX(250px);
}

.btn-toggler {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;
  /* padding: 4px 12px;
  color: #fff;
  background-color: #000;
  border-radius: 0; */
}
</style>
