<template>
  <v-app>
    <nuxt-child ref="childComponent"/>
  </v-app>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Auth'
      }
    },
    layout: 'auth'
  }
</script>

<style>

</style>
