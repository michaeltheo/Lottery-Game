import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'



var firebaseConfig={
  apiKey: "AIzaSyAH71C0NybNd0YTTa8PUGSJJ0KVqQmkwdw",

    authDomain: "lottery-game-46e16.firebaseapp.com",

    projectId: "lottery-game-46e16",

    storageBucket: "lottery-game-46e16.appspot.com",

    messagingSenderId: "983292448283",

    appId: "1:983292448283:web:67630bf19be7d8239072be",

    measurementId: "G-HNF68NRWY0"


}
//Initialize firebase
firebase.initializeApp(firebaseConfig)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')