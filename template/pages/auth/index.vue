<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-10">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Authenticate</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-alert type="error" :value="error">
                  {{ error }}
                </v-alert>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field prepend-icon="person" v-model="form.user" :rules="userRule" label="Login" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" v-model="form.pass" :rules="passRule" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import { setToken } from '~/utils/auth'
  import axios from '~/plugins/axios'

  export default {
    head () {
      return {
        title: 'Auth - Sign In'
      }
    },
    layout: 'auth',
    middleware: 'anonymous',
    components: {},
    data: () => ({
      valid: true,
      error: false,
      form: {
        user: '',
        pass: ''
      },
      userRule: [
        v => !!v || 'User is a required field.'
      ],
      passRule: [
        v => !!v || 'Password is a required field.'
      ]
    }),
    methods: {
      login () {
        if (this.$refs.form.validate() && this.valid) {
          axios.post('/api/auth', this.form).then(response => {
            if (response.data.jwt) {
              setToken(response.data.jwt)
              this.$router.replace('/')
            }
          }).catch(error => {
            this.error = error.response.data.error.message
          })
        }
      }
    }
  }
</script>