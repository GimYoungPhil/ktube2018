<template>
  <ul>
    <template v-for="(idol) in list">
      <li v-bind:key="idol.idolKey">
        {{ idol.name1 }} - {{ idol.name2 }}
        <router-link :to="`/idol/${idol.idolKey}`">Go Detail</router-link>
      </li>
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
