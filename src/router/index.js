import Vue from 'vue'
import Router from 'vue-router'

import guoDi from '../components/guoDi.vue'
import tangDi from '../components/tangDi.vue'
import canZhuo from '../components/canZhuo.vue'
import eWai from '../components/eWai.vue'
import liPin from '../components/liPin.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path:'/',
    component:guoDi
  },
  {
    path:'/tangDi',
    component:tangDi
  },
  {
    path:'/canZhuo',
    component:canZhuo
  },
  {
    path:'/eWai',
    component:eWai
  },
  {
    path:'/liPin',
    component:liPin
  }
  ]
})
