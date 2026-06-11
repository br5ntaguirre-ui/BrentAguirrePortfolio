import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHashHistory('/BrentAguirrePortfolio/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

export default router
