import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyDZCodq8AaJoz54h6TyQDl_rN4GDNUXOeI",
    authDomain: "best-deals-admin.firebaseapp.com",
    databaseURL: "https://best-deals-admin.firebaseio.com",
    projectId: "best-deals-admin",
    storageBucket: "best-deals-admin.appspot.com",
    messagingSenderId: "524889628107"
  };
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser
const storage = firebase.storage

// date issue fix according to firebase

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')
const notiCollection = db.collection('notification')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection,
    notiCollection,
    storage
}