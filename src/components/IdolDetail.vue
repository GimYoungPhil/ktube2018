<template>
  <div>
    idol Detail
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'IdolDetail',

  computed: mapState([
    'idolDetail'
  ]),

  methods: {
    ...mapActions([
      'fetchIdolDetail'
    ])
  },

  mounted() {
    const { idolKey } = this.$route.params
    this.fetchIdolDetail(idolKey)
  }
}
</script>

<style>

</style>
