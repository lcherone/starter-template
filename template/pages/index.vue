<template>
  <v-app>
    <nuxt-child ref="childComponent"/>
  </v-app>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Dashboard'
      }
    },
    middleware: 'authenticated'
  }
</script>

<style>

</style>
