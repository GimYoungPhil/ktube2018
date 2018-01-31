<template>
  <ul>
    <template v-for="(idol) in list">
      <li v-bind:key="idol.idolKey">{{ idol.name1 }} - {{ idol.name2 }}</li>
    </template>
  </ul>
</template>

<script>
export default {
  props: [
    'list'
  ],
}
</script>

<style>

</style>
