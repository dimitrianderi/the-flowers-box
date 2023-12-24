import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/views/Main.vue'),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('@/views/Auth.vue'),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/reg',
        name: 'Reg',
        component: () => import('@/views/Reg.vue'),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/builder',
        name: 'Builder',
        component: () => import('@/views/Builder.vue'),
        meta: {
            layout: 'content'
        }
    },
    {
        path: '/faq',
        name: 'Faq',
        component: () => import('@/views/Faq.vue'),
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
                }
            },
            {
                path: 'delivery',
                name: 'Delivery',
                component: () => import('@/views/sections/FaqSection.vue'),
                meta: {
                    layout: 'content',
                }
            },
            {
                path: 'about',
                name: 'About',
                component: () => import('@/views/sections/FaqSection.vue'),
                meta: {
                    layout: 'content',
                }
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    scrollBehavior() {
        window.scrollTo({
            top: 0,
        });
    }
})

export default router