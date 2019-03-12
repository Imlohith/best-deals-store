<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Signup</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" v-model.trim="signupForm.name" name="login" label="name" type="text"></v-text-field>
                  <v-text-field prepend-icon="person" v-model.trim="signupForm.title" name="login" label="title" type="text"></v-text-field>
                  <v-text-field prepend-icon="person" v-model.trim="signupForm.email" name="login" label="email" type="email"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" v-model.trim="signupForm.password" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                 <span><router-link to="/">back to login</router-link></span>  
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signup">signup</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

const fb = require('../fbConfig')
import firebase from 'firebase';

  export default {
    data: () => ({
      drawer: null,
      signupForm: {
          name: '',
          title: '',
          email: '',
          password: '',
          imageUrl: ''
      }
    }),
    props: {
      source: String
    },
    methods: {
    
    }
  }
</script>