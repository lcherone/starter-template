{{{{raw}}}}
<template>
  <div>
    <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" fixed app>
      <v-list dense>
        <template v-for="item in items">
          <v-layout v-if="item.heading" :key="item.heading" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" v-model="item.model" :key="item.text" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i" @click="navigate(child.route)">
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="navigate(item.route)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="blue darken-3" dark app fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Example</span>
      </v-toolbar-title>
      <!--<v-text-field flat solo-inverted prepend-icon="search" label="Search" class="hidden-sm-and-down"></v-text-field>-->
      <!--<v-spacer></v-spacer>-->
      <!--<v-btn icon>-->
      <!--  <v-icon>apps</v-icon>-->
      <!--</v-btn>-->
      <!--<v-btn icon>-->
      <!--  <v-icon>notifications</v-icon>-->
      <!--</v-btn>-->
      <!--<v-btn icon large>-->
      <!--  <v-avatar size="32px" tile>-->
      <!--    <img-->
      <!--      src="https://vuetifyjs.com/static/doc-images/logo.svg"-->
      <!--      alt="Vuetify"-->
      <!--    >-->
      <!--  </v-avatar>-->
      <!--</v-btn>-->
    </v-toolbar>
  </div>
</template>
{{{{/raw}}}}

<script>
  export default {
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'contacts', text: 'Users', route: '/users' },
        { icon: 'exit_to_app', text: 'Sign Out', route: '/auth/sign-out' }
      ]
    }),
    methods: {
      navigate (route) {
        this.$router.push(route)
      }
    }
  }
</script>

<style>

</style>
