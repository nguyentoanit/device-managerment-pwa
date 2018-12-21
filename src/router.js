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
      path: '/employees',
      name: 'employees',
      title: 'Employees',
      visible: true,
      component: () => import('./components/employee/Employees')
    },
    {
      path: '/employee/:employeeID/:mode',
      name: 'employee',
      title: 'employee',
      visible: false,
      component: () => import('./components/employee/Employee')
    },
    {
      path: '/equipments',
      name: 'equipments',
      title: 'Equipments',
      visible: true,
      component: () => import('./components/equipment/Equipments')
    },
    {
      path: '/equipment/:equipmentID/:mode',
      name: 'equipment',
      title: 'Device',
      visible: false,
      component: () => import('./components/equipment/Equipment')
    }
  ]
});
