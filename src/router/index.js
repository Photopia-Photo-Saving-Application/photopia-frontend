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

  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signUp/notify',
    name: 'SignUpNotify',
    component: SignUpNotify
  },
  {
    path: '/signUp/verify',
    name: 'SignUpVerify',
    component: SignUpVerify
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/recoverAccount/notify',
    name: 'RecoverAccountNotify',
    component: RecoverAccountNotify
  },
  {
    path: '/recoverAccount',
    name: 'RecoverAccount',
   component: RecoverAccount
  },
  {
    path:'/settings',
    name:'Settings',
    component:Settings
  }
  // {
  //   path: '/about',
  //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && store.getters['student/getFlagSignIn']===false && localStorage.getItem('token')===null){
    console.log("router guard: first block");
    console.log("requiresAuth: ",to.meta.requiresAuth);
    console.log("flagSignIn: ",store.getters['student/getFlagSignIn']);
    console.log("localStorageToken: ",localStorage.getItem('token'));
    next('/signIn');
  }
  else if(to.meta.requiresUnauth && (store.getters['student/getFlagSignIn']===true || localStorage.getItem('token')!==null)){
    console.log("router guard: second block");
    console.log("requiresUnauth: ",to.meta.requiresUnauth);
    console.log("flagSignIn: ",store.getters['student/getFlagSignIn']);
    console.log("localStorageToken: ",localStorage.getItem('token'));
    next('/home');
  }
  else{
    console.log("router guard: third block")
    console.log("requiresAuth: ",to.meta.requiresAuth);
    console.log("flagSignIn: ",store.getters['student/getFlagSignIn']);
    console.log("localStorageToken: ",localStorage.getItem('token'));
    next();
  }

});
export default router
