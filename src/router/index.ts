import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue'),
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('@/views/FeaturesPage.vue'),
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import('@/views/DocsPage.vue'),
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/views/PricingPage.vue'),
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('@/views/DownloadPage.vue'),
    },
    {
      path: '/legal',
      name: 'legal',
      component: () => import('@/views/LegalPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/',
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
