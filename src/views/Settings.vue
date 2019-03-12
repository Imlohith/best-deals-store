<template>
     <v-app>
      <h1>settings</h1>
      <v-container>
           <v-layout>
                <v-layout row justify-space-around="">
                    <v-flex md7>
                        <v-card  raised class="mb-0">
                            <v-card-text class="primary white--text">update profile</v-card-text>
                        </v-card>
                      <v-card>
                            <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                <v-flex xs12 sm6 md6>
                                    <v-text-field label="Legal first name*" required></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md6>
                                    <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field label="Email*" required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field label="Password*" type="password" required></v-text-field>
                                </v-flex>
                                </v-layout>
                            </v-container>
                            <small>*indicates required field</small>
                            </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                            <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                    <v-flex md4>
                         <v-card raised>
                            <v-card-text class="error white--text" >Profile info</v-card-text>
                        </v-card>
                         <v-card>
                            <v-card-text>
                            <v-container grid-list-md>
                                <v-layout column align-center>
                                <v-flex xs12 sm6 md12>
                                    <v-avatar size="100">
                                        <img src="/avator.jpg">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12>
                                    <div class="subheading"> Cj lohith</div>
                                </v-flex>
                                <v-flex xs12>
                                    <div class="body-2">cj studio creations</div>
                                </v-flex>
                                <v-flex xs12>
                                     <div class="body-1">sundaraih nagar, 12-354,45,</div>
                                </v-flex>
                                <v-flex xs12>
                                     <div class="body-1">pincode :  <span class="font-weight-bold">517501</span></div>
                                </v-flex>
                                <v-flex xs12>
                                     <div class="body-1">joined on:  <span class="font-weight-bold">2nd march 2019</span></div>
                                </v-flex>
                                </v-layout>
                            </v-container>
                          
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
           </v-layout>
      </v-container>
   </v-app>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>