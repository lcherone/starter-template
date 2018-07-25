{{{{raw}}}}
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
                    Users
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-btn small color="success" @click="prompt()" style="float:right" :ripple="false">Show Prompt</v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex>
                <v-alert type="error" :value="error">
                  {{ error }}
                </v-alert>
                <ul class="users">
                  <li v-for="(user, index) in users" :key="index" class="user">
                    <nuxt-link :to="{ params: { id: index }, path: `/users/${index}`}">
                      {{ user.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
{{{{/raw}}}}

<script>
import { mapGetters } from 'vuex'
import axios from '~/plugins/axios'

export default {
  head () {
    return {
      title: 'Users'
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
  data: () => ({
    error: false,
    users: {}
  }),
  mounted: function () {
    axios.defaults.headers.common['authorization'] = this.loggedToken
    this.initialize()
  },
  methods: {
    async initialize () {
      let { data } = await axios.get('/api/users')
      this.users = data
    },
    prompt () {
      this.$prompt.show({
        persistent: true,
        width: 400,
        toolbar: {
          color: 'red darken-3',
          closable: false
        },
        title: 'Hi!',
        text: 'This is a prompt...',
        buttons: [
          {
            title: 'Yes',
            color: 'success',
            handler: async () => {
              //
            }
          },
          {
            title: 'No',
            color: 'error'
          }
        ]
      })
    }
  }
}
</script>
