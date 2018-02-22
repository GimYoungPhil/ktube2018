<template>
  <div>
    idol Detail
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Idol',

  computed: mapState([
    'idolDetail'
  ]),

  methods: {
    ...mapActions([
      'fetchIdol'
    ])
  },

  mounted() {
    const { idolKey } = this.$route.params
    this.fetchIdol(idolKey)
  }
}
</script>

<style>

</style>
