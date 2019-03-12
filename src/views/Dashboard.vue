<template>
   <v-app>
      <h1>Dashboard</h1>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
       <v-container>
          <v-layout row justify-space-around> 
               <v-flex xs3>
                  <v-card dark color="primary">
                    <v-card-title class="headline">Customers</v-card-title>
                    <v-card-text>2000120</v-card-text>
                    <v-divider></v-divider>
                    <v-card-text class="caption"><v-icon class="body-2">timer</v-icon> updated ten min ago</v-card-text>
                  </v-card>
               </v-flex> 
               <v-flex xs3>
                <v-card dark color="secondary">
                  <v-card-title class="headline">Revenue</v-card-title>
                  <v-card-text>$45645</v-card-text>
                  <v-divider></v-divider>
                    <v-card-text class="caption"><v-icon class="body-2">timer</v-icon> updated ten min ago</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs3>
                <v-card dark color="info">
                  <v-card-title class="headline">payments today</v-card-title>
                  <v-card-text>20</v-card-text>
                   <v-divider></v-divider>
                    <v-card-text class="caption"><v-icon class="body-2">timer</v-icon> updated ten min ago</v-card-text>
                </v-card>
              </v-flex> 
          </v-layout>      
          <v-layout row justify-space-around class="mt-3">
              <v-flex md5>
                  <v-card dark color="error" height="400">
                    <v-card-title>actions</v-card-title>
                    <v-card-text>some mmatter goes here</v-card-text>
                  </v-card>
              </v-flex>
              <v-flex md5>
                  <v-card dark color="success" height="400">
                    <v-card-title>actions</v-card-title>
                     <v-card-text>some mmatter goes here</v-card-text>
                  </v-card>
              </v-flex>
          </v-layout>
       </v-container>
   </v-app>
</template>

<script>


  export default { 
    components: {
  
    },
   data() {
     return {
         items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/dashboard'
        },
        {
          text: 'products',
          disabled: false,
          href: '/products'
        },
        {
          text: 'settings',
          disabled: false,
          href: '/settings'
        }
      ],
      products: [
        { name: 'xiomi', price: '$20', manufacturer_date: '22nd 2019', active: true },
        { name: 'samsung', price: '$22', manufacturer_date: '22nd 2019', active: false },
        { name: 'apple', price: '$24', manufacturer_date: '22nd 2019', active: false },
        { name: 'mic', price: '$26', manufacturer_date: '22nd 2019', active: false }
      ],
     }
   },
  }
</script>
