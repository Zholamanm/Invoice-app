import { createRouter, createWebHistory } from "vue-router";

import invoiceIndex from '../components/invoices/Index.vue';
import invoiceNew from '../components/invoices/New.vue'
import invoiceShow from '../components/invoices/Show.vue'
import invoiceEdit from '../components/invoices/Edit.vue'
import notFound from '../components/Not found.vue'

const routes = [
    {
        path: '/',
        component: invoiceIndex
    },
    {
        path: '/invoice/new',
        component: invoiceNew
    },
    {
        path: '/invoice/show/:id',
        component: invoiceShow,
        props: true
    },
    {
        path: '/invoice/edit/:id',
        component: invoiceEdit,
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
