<template>
  <div></div>
</template>

<script>
  import { unsetToken } from '~/utils/auth'
  export default {
    head () {
      return {
        title: 'Auth - Sign Out'
      }
    },
    middleware: 'authenticated',
    mounted () {
      unsetToken()
      this.$router.replace('/')
    }
  }
</script>

<style>
  html {
    background: #dddddd;
    height: 100%
  }
</style>