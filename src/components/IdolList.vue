<template>
  <div>
    idols
    <idol-item-list v-bind:list="idolList.list" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import IdolItemList from './idols/IdolItemList.vue'

export default {
  name: 'IdolList',

  components: {
    IdolItemList,
  },

  computed: mapState([
    'idolList'
  ]),

  methods: {
    ...mapActions([
      'fetchIdolList'
    ]),
  },

  mounted() {
    this.fetchIdolList()
  },
}
</script>

<style>

</style>
