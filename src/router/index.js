import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Profile from '../views/profile.vue';
import editProfile from '../views/editProfile.vue';
import addProduct from '../views/addProduct.vue';
import profileStore from '../views/profileStore.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/edit',
    name: 'editProfile',
    component: editProfile,
  },
  {
    path: '/add',
    name: 'addProduct',
    component: addProduct,
  },
  {
    path: '/profileStore',
    name: 'profileStore',
    component: profileStore,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
