<template>
  <v-app>
    <Navbar v-if="['login','signup'].indexOf($route.name) === -1"></Navbar>
    <v-content class="mx-3 mt-4">
          <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
