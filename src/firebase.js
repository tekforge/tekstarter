import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// firebase init
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
firebase.initializeApp(firebaseConfig)

// utils
const fb_db = firebase.firestore()
const fb_auth = firebase.auth()
const fb_storage = firebase.storage().ref()

// collection references
const fb_users = fb_db.collection('users')

// export utils/refs
export {
  fb_db,
  fb_auth,
  fb_storage,
  fb_users
}
