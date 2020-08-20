import Vue from 'vue'
import VueRouter from 'vue-router'
import { fb_auth } from '../firebase'

//Routes
import Root from '../views/Root.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Layout from '../views/Layout.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

  const routes = [
  //Public routes
  {
    path: '/',
    name: 'root',
    redirects: 'Home',
    component: Root,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
    ]
  },
  // Private routes are children of the Layout component
  {
    path: '/layout',
    name: 'Layout',
    redirect: '/dashboard',
    component: Layout,
    meta: {
      authReq: true
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const authReq = to.matched.some(x => x.meta.authReq)

  if (authReq && !fb_auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
