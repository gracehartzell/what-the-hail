import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import Menu from '@/components/Menu'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '',
      name: 'Menu',
      component: Menu
    },
    {
      path: '',
      name: 'Login',
      component: Login
    }
  ]
})
