<template>
 <v-app>
      <h1>Customers</h1>
      <v-container>
           <v-layout justify-center>
               <!-- <v-flex md6>
                   <span>Customers structure</span>
                   <v-treeview :items="items"></v-treeview>
               </v-flex> -->
               <v-flex md6>
                  <span class="headline">Customers chain</span>
                  <v-timeline>
                    <v-timeline-item
                      v-for="n in 4"
                      :key="n"
                      color="blue lighten-2"
                      large
                     >
                      <template v-slot:opposite>
                        <span>perfecto perfect</span>
                      </template>
                      <v-card class="elevation-2">
                        <v-card-title class="headline">Cj-Lohith</v-card-title>
                        <v-card-text>
                          Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                        </v-card-text>
                      </v-card>
                    </v-timeline-item>
                  </v-timeline>
               </v-flex>
           </v-layout>
      </v-container>
   </v-app>
</template>

<script>
  export default {
      data() {
        return {
          items: [
        {
          id: 1,
          name: 'Applications :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' }
          ]
        },
        {
          id: 5,
          name: 'Documents :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' }
                  ]
                }
              ]
            },
            {
              id: 10,
              name: 'material2 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    { id: 12, name: 'v-btn : ts' },
                    { id: 13, name: 'v-card : ts' },
                    { id: 14, name: 'v-window : ts' }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 15,
          name: 'Downloads :',
          children: [
            { id: 16, name: 'October : pdf' },
            { id: 17, name: 'November : pdf' },
            { id: 18, name: 'Tutorial : html' }
          ]
        },
        {
          id: 19,
          name: 'Videos :',
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                { id: 21, name: 'Basic layouts : mp4' },
                { id: 22, name: 'Advanced techniques : mp4' },
                { id: 23, name: 'All about app : dir' }
              ]
            },
            { id: 24, name: 'Intro : mov' },
            { id: 25, name: 'Conference introduction : avi' }
          ]
        }
      ]
        }
      },
  }
</script>

<style scoped>
   .fade-enter-active, .fade-leave-active {
     transition: opacity 2.5s ease-out;
   }
   .fade-enter, .fade-leave-to {
     opacity: 0;
   }
</style>
