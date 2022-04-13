import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth'
import Home from '../views/HomeView'
import LiveDraw from '../views/LiveDraw.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component:Auth 
  },
  {
    path:'/',
    name:'Home',
    component:Home,
    meta:{
      requiresAuth:true,
    }
  },
  {
    path:'/livedraw',
    name:'LiveDraw',
    component:LiveDraw,
    meta:{
      requiresAuth:true,
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth){
    if(!store.state.isAuthenticated){
      next({name:'Auth'})
    }else{
      next()
    }
  }else if(store.state.isAuthenticated){
    if(to.name=='Auth'){
      next({name:'Home'})
    }
    else{
      next()
    }
  }
  else if(store.state.drawLiveActive){
    if(to.name=='Home'){
      next({name:"LiveDraw"})
    }else{
      if(to.name=="LiveDraw"){
        next({name:'Home'})
      }
    }
    
  }
  
  else next()
  
})


export default router
