import {RouteConfig} from 'vue-router';

const Systems: Array<RouteConfig> = [
    // {
    //     path: '/admin/home',
    //     alias: '/admin',
    //     name: 'admin',
    //     component: () => import('@/views/adminview.vue')
    // },
    {
        path: '/admin/customer',
        name: 'admin_customer',
        component: () => import('@/views/system/customer/List.vue')
    },
]

export {
    Systems
};
