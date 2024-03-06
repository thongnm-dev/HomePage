import {RouteConfig} from 'vue-router';
import HomePage from '@/views/front/HomePage.vue';
import about from '@/views/front/AboutUs.vue';

const career: Array<RouteConfig> = [
    {
        path: '/recruit',
        component: () => import('@/views/front/recruit/Recruit.vue'),
    },
    {
        path: '/recruit/job-list',
        name: 'job-list',
        component: () => import('@/views/front/recruit/career/Careers.vue'),
    },
    {
        path: '/recruit/job/:id',
        name: 'detailt-job',
        component: () => import('@/views/front/recruit/career/Career.vue'),
    },
    {
        path: '/recruit/event',
        name: 'event',
        component: () => import('@/views/front/recruit/event/Events.vue'),
    },
    {
        path: '/recruit/event/:url',
        name: 'evtDetail',
        component: () => import('@/views/front/recruit/event/Event.vue'),
    },
    {
        path: '/recruit/blogs',
        name: 'blogs',
        component: () => import('@/views/front/recruit/blog/Blogs.vue'),
    },
    {
        path: '/recruit/blog/:url',
        name: 'blogDetail',
        component: () => import('@/views/front/recruit/blog/Blog.vue'),
    },
];

const company: Array<RouteConfig> = [
    {
        path: '/company',
        component: () => import('@/views/front/company/About.vue'),
    },
    {
        path: '/company/more',
        name: 'more',
        component: () => import('@/views/front/company/More.vue'),
    },
    {
        path: '/company/security',
        name: 'security',
        component: () => import('@/views/front/company/Security.vue'),
    },
    {
        path: '/company/certificate',
        name: 'certificate',
        component: () => import('@/views/front/company/Certificate.vue'),
    },
    {
        path: '/company/develop',
        name: 'develop',
        component: () => import('@/views/front/company/Develop.vue'),
    }
];

const general: Array<RouteConfig> = [
    {
        path: '/:subdomain/about',
        name: 'about',
        component: about,
    },
    {
        path: '/:subdomain/service',
        name: 'service',
        component: () => import('@/views/front/Service.vue'),
    },
    {
        path: '/:subdomain/contact',
        name: 'contact',
        component: () => import('@/views/front/Contact.vue'),
    },
    {
        path: '/:subdomain/greeting',
        name: 'greeting',
        component: () => import('@/views/front/Greeting.vue'),
    },
    {
        path: '/:subdomain/history',
        name: 'history',
        component: () => import('@/views/front/Histories.vue'),
    },
    {
        path: '/:subdomain/customer',
        name: 'customer',
        component: () => import('@/views/front/Customer.vue'),
    },
    {
        path: '/:subdomain/faq',
        name: 'faq',
        component: () => import('@/views/front/Faq.vue'),
    },
]

const Front: Array<RouteConfig> = [
    {
        path: '/home',
        alias: '/',
        component: () => import('@/views/front/Welcome.vue')
    },
    {
        path: '/',
        name: 'HomePage`',
        component: HomePage,
        children: [
            ...company,
            ...career,
            ...general,
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/Register.vue')
    },
]

export {
    Front
}
