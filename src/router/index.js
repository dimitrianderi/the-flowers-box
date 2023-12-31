import { createRouter, createWebHistory } from 'vue-router';
import useAuthStore from '@/stores/AuthStore';

const routes = [
  {
    path: '/the-flowers-box',
    name: 'Main',
    component: () => import('@/views/PageMain.vue'),
    meta: {
      layout: 'main',
    },
  },
  {
    path: '/',
    redirect: '/the-flowers-box',
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/PageAuth.vue'),
    meta: {
      layout: 'main',
      authReg: true,

    },
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import('@/views/PageReg.vue'),
    meta: {
      layout: 'main',
      authReg: true,
    },
  },
  {
    path: '/bouquets',
    name: 'Bouquets',
    component: () => import('@/views/PageBouquets.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/builder',
    name: 'Builder',
    component: () => import('@/views/PageBuilder.vue'),
    meta: {
      layout: 'content',
      auth: true,
    },
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('@/views/PageFaq.vue'),
    meta: {
      layout: 'content',
    },
    children: [
      {
        path: 'creating-bouquets',
        name: 'Creating Bouquets',
        component: () => import('@/views/sections/FaqSection.vue'),
        meta: {
          layout: 'content',
        },
      },
      {
        path: 'delivery',
        name: 'Delivery',
        component: () => import('@/views/sections/FaqSection.vue'),
        meta: {
          layout: 'content',
        },
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/sections/FaqSection.vue'),
        meta: {
          layout: 'content',
        },
      },
    ],
  },
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: () => import('@/views/PageError.vue'),
    meta: {
      layout: 'main',
      isError: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  scrollBehavior() {
    window.scrollTo({
      top: 0,
    });
  },
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isMustAuth = to.meta.auth;
  const isAuthReg = to.meta.authReg;

  if (isMustAuth && authStore.isAuth) {
    next();
  } else if (isMustAuth && !authStore.isAuth) {
    next('auth');
  } else if (isAuthReg && authStore.isAuth) {
    next(from.path);
  } else {
    next();
  }
});

export default router;
