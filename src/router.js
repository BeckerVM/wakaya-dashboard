import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './pages/HomePage';

const routes = [
  { path: "/", component: HomePage }
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});


export default router;