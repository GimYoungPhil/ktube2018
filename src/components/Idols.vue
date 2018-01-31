<template>
  <div>
    idols
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
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
