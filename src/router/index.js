import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import SignIn from "@/views/SignIn";
import SignUp from "@/views/SignUp";
import ForgotPassword from "@/views/ForgotPassword";
import RecoverAccountNotify from "@/views/RecoverAccountNotify";
import SignUpNotify from "@/views/SignUpNotify";
import SignUpVerify from "@/views/SignUpVerify";
import RecoverAccount from "@/views/RecoverAccount";
import Settings from "@/views/Settings";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: SignIn,
    meta:{
      requiresAuth: false
    }
  },
  {
    path: '/signUp/notify',
    name: 'SignUpNotify',
    component: SignUpNotify,
    meta:{
      requiresAuth:false
    }
  },
  {
    path: '/signUp/verify',
    name: 'SignUpVerify',
    component: SignUpVerify,
    meta:{
      requiresAuth:false
    }
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
    meta:{
      requiresAuth:false
    }
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta:{
      requiresAuth:false
    }
  },
  {
    path: '/recoverAccount/notify',
    name: 'RecoverAccountNotify',
    component: RecoverAccountNotify,
    meta:{
      requiresAuth:false
    }
  },
  {
    path: '/recoverAccount',
    name: 'RecoverAccount',
    component: RecoverAccount,
    meta:{
      requiresAuth:false
    }
  },
  {
    path:'/settings',
    name:'Settings',
    component:Settings,
    meta:{
      requiresAuth:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//code stable version
router.beforeEach((to, from, next) => {
  console.log("to.name: "+to.name);
  console.log("localSorage.getItem(token): "+localStorage.getItem('token'));
  console.log("to.meta.requiresAuth: "+to.meta.requiresAuth);
  if(to.meta.requiresAuth && (localStorage.getItem('token')===undefined || localStorage.getItem('token')===null)){
    console.log("router guard: you are not authenticated yet if block block")
    next('/signIn');
  }
  else if(to.name==="SignUpNotify" && from.name!=="SignUp") {
    console.log("router guard: you are not authenticated yet 1st else if block")
    next('/signIn');
  }
  else if(to.name==="RecoverAccountNotify" && from.name!=="ForgotPassword") {
    console.log("router guard: you are not authenticated yet 2nd else if block")
    next('/signIn');
  }
  else{
    console.log("router guard: else block");
    next();
  }
});

export default router