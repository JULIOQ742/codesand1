import Vue from 'vue';
import Router from 'vue-router';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/ej1',
      name: 'ejercicio1',
      component: Ejercicio1
    },
    {
      path: '/ej2',
      name: 'ejercicio2',
      component: Ejercicio2
    },
    {
      path: '/ej3',
      name: 'ejercicio3',
      component: Ejercicio3
    }
  ]
});
