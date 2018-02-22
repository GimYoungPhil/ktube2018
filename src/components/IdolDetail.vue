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
      'fetchIdolDetail',
      'fetchIdolVideoList',
    ]),
  },

  mounted() {
    const { idolKey } = this.$route.params
    this.fetchIdolDetail(idolKey)
    this.fetchIdolVideoList(idolKey)
  }
}
</script>

<style>

</style>
