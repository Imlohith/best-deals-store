<template>
        <v-dialog max-width="600px" v-model="dialog">
          <v-btn flat slot="activator" class="error"> 
              Add new product
          </v-btn>
          <v-card>
              <v-card-title>
                  <h2>Add new product</h2>
              </v-card-title>
              <v-card-text>
                  <v-form class="px-3" ref="form">
                     <v-text-field label="product name" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                     <v-text-field label="product price" v-model="price" prepend-icon="attach_money" :rules="inputRules"></v-text-field>
                     <v-textarea label="description" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
                     <v-text-field label="Select Image" @click='$refs.inputUpload.click()' v-model='imageName' prepend-icon='attach_file'></v-text-field>
                     <input v-show="false" ref="inputUpload" type="file" @change="filePick" >  
                     <v-layout row>
                         <v-flex>
                             <v-btn flat class="success mx-0 mt-3 right" @click="submit" :loading="loading">Add project</v-btn>
                         </v-flex>
                     </v-layout>
                  </v-form>
              </v-card-text>
          </v-card>
      </v-dialog>
</template>
<script>
    export default {
            data() {
            return {
                title: '',
                content: '',
                due: null,
                inputRules: [
                    v => v.length >=3 || 'Minimum lenght is 4 chars'
                ],
                loading: false,
                dialog: false
            }
        },
        methods: {
            filePick(e) {
               e.preventDefault()
               console.log('file picked')
            }
        }
    }
</script>

<style scoped>

</style>