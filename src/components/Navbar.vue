<template>
    <nav>
        <v-snackbar v-model="snackbar" :timeout="3000" right color="success">
            <span>Awesome! you added project successfully</span>
            <v-btn flat color="white" @click="snackbar = false">close</v-btn>
        </v-snackbar>
        <v-toolbar flat app>
            <v-toolbar-side-icon  @click="drawer = !drawer"></v-toolbar-side-icon>
           <v-toolbar-title class="text-uppercase grey--text">
               <span class="font-weight-light">Best</span>
               <span>Deals</span>
           </v-toolbar-title>
           <v-spacer></v-spacer>
           <v-flex>
              <v-text-field placeholder="search" flat box append-icon="search" ></v-text-field>
           </v-flex>
           <v-btn class="px-2"  color="accent">
               create store
               <v-icon right>exit_to_app</v-icon>
            </v-btn>
            <v-menu offset-y>
            <v-btn flat slot="activator" color="grey">
               <v-icon>expand_more</v-icon>
               <span>more</span>
            </v-btn>    
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                     <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
            </v-menu>
        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" class="primary">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avator.jpg">
                    </v-avatar>
                    <p class="white--text subheading mt-2">CJ-LOHITH</p>
                </v-flex>
                <v-flex class="mb-3 mt-3">
                     <Popup />
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route"> 
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup.vue'
    export default {
        components: {
            Popup
        },
        data() {
            return {
                drawer: false,
                links: [
                    { icon: 'dashboard', text: 'dashboard', route: '/dashboard' },
                    { icon: 'grid_on', text: 'products', route: '/products' },
                    { icon: 'supervisor_account', text: 'customers', route: '/Customers' },
                    { icon: 'build', text: 'settings', route: '/settings' },
                    { icon: 'build', text: 'signout', route: '/settings' },
                ],
                snackbar: false
            }
        },
      

    }
</script>

<style scoped>

</style>