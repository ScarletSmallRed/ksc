import Vue from 'vue'
import Router from 'vue-router'
import Dishes from '@/components/Dishes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dishes',
      name: 'Dishes',
      component: Dishes
    }
  ]
})
