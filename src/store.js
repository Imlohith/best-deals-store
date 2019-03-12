import Vue from 'vue'
import Vuex, { Store } from 'vuex'
const fb = require('./fbConfig')

Vue.use(Vuex)

fb.auth.onAuthStateChanged(user => {
  if(user){
    store.commit('setCurrentUser', user)
    console.log(user)
  }
  console.log(user)
})

const store = new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {},
    loading: true,
  },
  mutations: {
    setCurrentUser(state, payload) {
       this.state.currentUser = payload
     },
     setUserProfile(state, payload){
       this.state.userProfile = payload
     }
  },
  actions: {
    fetchUserProfile({ commit, state }) {
      fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
          commit('setUserProfile', res.data())
      }).catch(err => {
          console.log(err)
      })
  },
  }
})

export default store;
