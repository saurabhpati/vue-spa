import Vue from 'vue';
import VueRouter from 'vue-router';
import Category from './themes/Category.vue';
import Login from './themes/Login.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    //mode: 'history', // This is not working for now, see later.
    routes:[{
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Category
    }]
});

export default router;