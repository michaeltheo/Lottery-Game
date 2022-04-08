import Vue from 'vue'
import Vuex from 'vuex'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import router from '@/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated:false,
    user:null,
    error:null
  },
  getters: {
    getUser(state){
      return state.user
    },
    isUserAuth(state){
      return !!state.user
    },
    getError(state){
      return state.error
    }
  },
  mutations: {
    setUser(state,payload){
      state.user=payload
      state.isAuthenticated=!!state.user
      router.push({name:'Home'})
    },
    setError(state,payload){
      state.error=payload
    }
  },
  actions: {
    authAction({commit}){
      const auth=getAuth()
      onAuthStateChanged(auth,(user)=>{
        if(user){
          commit('setUser',user)
        }
        else{
          commit('setUser',false)
        }
      })
    },
    //SingUp

    signUpAction({commit},payload){
      const auth=getAuth()
      createUserWithEmailAndPassword(auth,payload.email,payload.password).then((response)=>{
        commit('setUser',response.user)
      })
      .catch((error)=>{
        commit('setError',error.message)
      })
    },

    //SignIn
    signInAction({commit},payload){
      const auth=getAuth()
      signInWithEmailAndPassword(auth,payload.email,payload.password).then((response)=>{
        commit('setUser',response.user)
      }).catch((error)=>{
        commit('setError',error.message)
      })
    },

    //SignOut
    signOutAction(){
      const auth=getAuth()
      signOut(auth).then(()=>{
        this.commit('setUser',false)
        router.push({name:'Auth'}).catch((error)=>{
          this.commit('setError',error.message)
        })
      })
    },
  },
  modules: {
  }
})
