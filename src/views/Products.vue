<template>
     <v-app>
      <h1>products</h1>
      <v-container class="my-3">
          <v-layout row class="mb-3">
            <v-tooltip top>
                <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
                    <v-icon left small>folder</v-icon>
                    <span class="caption text-lowercase">By prject name</span>
                </v-btn>
                <span>sort title by project name</span>
            </v-tooltip>
            <v-tooltip top>
               <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
                 <v-icon left small>person</v-icon>
                 <span class="caption text-lowercase">By person</span>
             </v-btn>
              <span>sort by person name</span>
            </v-tooltip>
          </v-layout>

           <v-card flat class="pa-2" v-for="product in products" :key="product.name">
              <v-layout row wrap :class="`pa-3 project ${product.status}`">
                 <v-flex xs12 md6>
                    <div class="caption grey--text">Product name</div>
                    <div>{{ product.name }}</div>
                 </v-flex>
                 <v-flex xs6 sm4 md2>
                     <div class="caption grey--text">Price</div>
                     <div>{{ product.price }}</div>
                 </v-flex>
                 <v-flex xs6 sm4 md2>
                     <div class="caption grey--text">created_on</div>
                     <div>{{ product.created_on }}</div>
                 </v-flex>
                 <v-flex xs2 sm4 md2>
                   <div class="caption grey--text">Status</div>
                   <div class="right">
                     <v-chip small :class="` ${product.status} white--text caption my-2`">{{ product.status }}</v-chip>
                   </div>
                 </v-flex>
              </v-layout>
              <v-divider></v-divider>
           </v-card>
        </v-container>
   </v-app>
</template>

<script>
    export default {
        data() {
            return {
                products: [
                    { name: 'xiomi mi', price: '$20', created_on: '22nd march 2019', status: 'complete'},
                    { name: 'samsungi', price: '$24', created_on: '22nd march 2019', status: 'ongoing'},
                    { name: 'Apple', price: '$20', created_on: '22nd march 2019', status: 'overdue'},
                    { name: 'zenphone', price: '$30', created_on: '22nd march 2019', status: 'overdue'},
                ]
            }
        },
    }
</script>

<style scoped>
  .project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.overdue {
  border-left: 4px solid orange;
}
.project.ongoing {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>