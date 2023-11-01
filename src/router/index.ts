import { createRouter, createWebHistory } from 'vue-router'
import Home from '@views/Home.vue'
import Pages from '@views/Pages.vue'
import About from '@views/About.vue'
import Product from '@views/Product.vue'
import Contact from '@views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/pages',
      component: Pages,
      children: [
        {
          path: 'about',
          name: 'about',
          component: About,
        },
        {
          path: 'product',
          name: 'product',
          component: Product,
        },
        {
          path: 'contact',
          name: 'contact',
          component: Contact,
        },
      ],
    },
  ],
})

export default router
