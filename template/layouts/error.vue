<template>
  <v-app>
    <v-content>
      <v-container fluid tag="section" id="grid">
        <v-layout row wrap>
          <v-flex d-flex xs12 order-xs5>
            <v-layout column>
              <v-flex tag="h1" class="display mb-2">
                <v-layout row wrap>
                  <v-flex xs12 sm6>
                    Error {{ error.statusCode }}
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-btn small color="success" @click="dialog = true" style="float:right" :ripple="false">Add User</v-btn>
                    <v-btn small color="success" @click="prompt()" style="float:right" :ripple="false">Prompt</v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex>
                <v-alert type="error" :value="error.message">
                  {{ error.message }}
                </v-alert>
                <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
                  Homepage
                </nuxt-link>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style scoped>

</style>
