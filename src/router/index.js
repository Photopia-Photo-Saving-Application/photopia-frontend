import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import SignIn from "@/views/SignIn";
import SignUp from "@/views/SignUp";
import ForgotPassword from "@/views/ForgotPassword";
import ForgotPasswordResponse from "@/views/ForgotPasswordResponse";
import SignUpResponse from "@/views/SignUpResponse";
import SignUpVerification from "@/views/SignUpVerification";
import RecoverAccount from "@/views/RecoverAccount";
import Settings from "@/views/Settings";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signupresponse',
    name: 'SignUpResponse',
    component: SignUpResponse
  },
  {
    path: '/signupverification',
    name: 'SignUpVerification',
    component: SignUpVerification
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/forgotpasswordresponse',
    name: 'ForgotPasswordResponse',
    component: ForgotPasswordResponse
  },
  {
    path: '/recoveraccount',
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

export default router
