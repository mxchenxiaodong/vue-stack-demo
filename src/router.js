import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TimeShow from './views/TimeShow.vue'
import MemorialDay from './views/MemorialDay.vue'
import Fragment from './views/Fragment.vue'
import Milestone from './views/Milestone.vue'

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
      path: '/form',
      name: 'form',
      component: () => import(/* webpackChunkName: "form" */ './views/Form.vue')
    },
    {
      path: '/time_show',
      name: 'time_show',
      component: TimeShow
    },
    {
      path: '/memorial_day',
      name: 'memorial_day',
      component: MemorialDay
    },
    {
      path: '/fragment',
      name: 'fragment',
      component: Fragment
    },
    {
      path: '/milestone',
      name: 'milestone',
      component: Milestone
    }
  ]
})
