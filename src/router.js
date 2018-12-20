import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      title: 'Home',
      visible: true,
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      title: 'Users',
      visible: true,
      component: () => import('./components/user/Users')
    },
    {
      path: '/user/:userID',
      name: 'user',
      title: 'user',
      visible: false,
      component: () => import('./components/user/User')
    },
    {
      path: '/equipments',
      name: 'equipments',
      title: 'Equipments',
      visible: true,
      component: () => import('./components/device/Equipments')
    },
    {
      path: '/device/:deviceID',
      name: 'device',
      title: 'Device',
      visible: false,
      component: () => import('./components/device/Device')
    }
  ]
});
