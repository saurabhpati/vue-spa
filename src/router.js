import Vue from 'vue';
import VueRouter from 'vue-router';
import Category from './themes/Category.vue';
import Login from './themes/Login.vue';
import NotFound from './themes/NotFound.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    //mode: 'history', // This is not working for now, see later.
    linkActiveClass: 'is-active',
    routes: [{
        path: '/category/:id',
        name: 'category',
        component: Category,
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/',
        redirect: { name: 'category', params: { id: 'front-end' } }
    }, {
        path: '*', 
        component: NotFound
    }]
});

export default router;