import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Upload from './views/Upload.vue'
import Detail from './views/Detail.vue'
import Edit from './views/Edit.vue'
import Search from './views/Search.vue'
import Tags from './views/Tags.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    },
    {
      path: '/search/:query',
      name: 'search',
      component: Search
    },
    {
      path: '/tags/:tags',
      name: 'tags',
      component: Tags
    },
  ]
})
