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
                    User - {{ user.name }}
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex>
                <nuxt-link class="button" to="/users">Users</nuxt-link>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from '~/plugins/axios'

export default {
  head () {
    return {
      title: `User: ${this.user.name}`
    }
  },
  middleware: 'authenticated',
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      loggedUser: 'auth/loggedUser',
      loggedToken: 'auth/loggedToken'
    })
  },
  asyncData ({ params, error }) {
    return { params: params, error: error }
  },
  data: () => ({
    user: {}
  }),
  mounted: function () {
    axios.defaults.headers.common['authorization'] = this.loggedToken
    this.initialize()
  },
  methods: {
    initialize () {
      axios.get('/api/users/' + this.params.id).then(res => {
        this.user = res.data
      }).catch(e => {
        this.error({ statusCode: 404, message: 'User not found' })
      })
    }
  }
}
</script>

<style>

</style>