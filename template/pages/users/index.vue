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
                    <v-btn small color="success" @click="dialog = true" style="float:right" :ripple="false">Add User</v-btn>
                    <v-btn small color="success" @click="prompt()" style="float:right" :ripple="false">Prompt</v-btn>
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

                <!--<v-data-table :headers="headers" :items="items" hide-actions class="elevation-1">-->
                <!--  <template slot="items" slot-scope="props">-->
                <!--    <td><a href="javascript:void(0)" @click="authItem(props.item)">{{ props.item.label }}</a></td>-->
                <!--    <td>{{ props.item.host }}</td>-->
                <!--    <td>{{ props.item.secret }}</td>-->
                <!--    <td>-->
                <!--      <span left v-if="props.item.status && props.item.status.status">-->
                <!--        <v-icon color="green">check_circle</v-icon>-->
                <!--        <span>{{ props.item.status.msg }}</span>-->
                <!--      </span>-->
                <!--      <span left v-if="props.item.status && !props.item.status.status && props.item.status.msg">-->
                <!--        <v-icon color="red">error</v-icon>-->
                <!--        <span>{{ props.item.status.msg }}</span>-->
                <!--      </span>-->
                <!--      <span left v-if="!props.item.status || props.item.status && !props.item.status.status && !props.item.status.msg">-->
                <!--        <v-icon color="orange">error_outline</v-icon>-->
                <!--        <span>Checking</span>-->
                <!--      </span>-->
                <!--    </td>-->
                <!--    <td class="justify-center layout px-0">-->
                <!--      <v-tooltip left>-->
                <!--        <v-btn slot="activator" icon class="mx-0" @click="editItem(props.item)">-->
                <!--          <v-icon color="teal">edit</v-icon>-->
                <!--        </v-btn>-->
                <!--        <span>Edit</span>-->
                <!--      </v-tooltip>-->
                <!--      <v-tooltip left>-->
                <!--        <v-btn slot="activator" icon class="mx-0" @click="deleteItem(props.item)">-->
                <!--          <v-icon color="pink">delete</v-icon>-->
                <!--        </v-btn>-->
                <!--        <span>Delete</span>-->
                <!--      </v-tooltip>-->
                <!--    </td>-->
                <!--  </template>-->
                <!--  <template slot="no-data">-->
                <!--    You have not added any servers, add a new server to continue.-->
                <!--  </template>-->
                <!--</v-data-table>-->
                
                <!--<v-dialog v-model="dialog" max-width="500px">-->
                <!--  <v-card>-->
                <!--    <v-card-title>-->
                <!--      <span class="headline">{{ formTitle }}</span>-->
                <!--    </v-card-title>-->
                <!--    <v-card-text>-->
                <!--      <v-alert outline color="info" icon="info" :value="true">-->
                <!--        Servers are securely stored in your browser for easy selection.-->
                <!--      </v-alert>-->
                <!--      <v-container grid-list-md>-->
                <!--        <v-form ref="form" v-model="valid" lazy-validation>-->
                <!--          <v-text-field label="Label" :rules="labelRule" v-model="editedItem.label" required></v-text-field>-->
                <!--          <v-layout wrap>-->
                <!--            <v-flex xs12 sm6 md6>-->
                <!--              <v-text-field label="Host" :rules="hostRule" v-model="editedItem.host" required></v-text-field>-->
                <!--            </v-flex>-->
                <!--            <v-flex xs12 sm6 md6>-->
                <!--              <v-text-field label="Secret" :rules="secretRule" v-model="editedItem.secret" required></v-text-field>-->
                <!--            </v-flex>-->
                <!--          </v-layout>-->
                <!--        </v-form>-->
                <!--      </v-container>-->
                <!--    </v-card-text>-->
                <!--    <v-card-actions>-->
                <!--      <v-spacer></v-spacer>-->
                <!--      <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>-->
                <!--      <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>-->
                <!--    </v-card-actions>-->
                <!--  </v-card>-->
                <!--</v-dialog>-->
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
        text: 'Foo bar baz',
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
