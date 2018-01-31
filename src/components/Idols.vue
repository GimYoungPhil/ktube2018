<template>
  <div>
    idols
    <idol-list v-bind:list="idols.list" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import IdolList from './idols/IdolList.vue'

export default {
  components: {
    IdolList,
  },
  computed: mapState([
    'idols'
  ]),
  methods: {
    ...mapActions([
      'fetchIdols'
    ])
  },
  mounted() {
    this.fetchIdols()
  }
}
</script>

<style>

</style>
