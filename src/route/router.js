import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Cart from '../components/Cart.vue';
import Products from '../components/Products.vue';

Vue.use(VueRouter);
const routes =[
    {
        path: '/',
        name:'Home',
        component:Home
    },
    {
        path: '/products',
        name:'Prodcuts',
        component:Products
    },
    {
        path: '/cart',
        name:'Cart',
        component:Cart
    },
];

const router = new VueRouter({
    mode:'history',
    routes:routes,
});

export default router;

