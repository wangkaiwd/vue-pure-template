import Vue from 'vue';
import Router from 'vue-router';
// import BaseLoading from 'components/loading';
// import RouterErr from './routerErr';

Vue.use(Router);
// const getComponent = dir => () => (
//   {
//     component: import(`views/${dir}`),
//     error: RouterErr,
//     loading: BaseLoading,
//     delay: 200,
//     timeout: 3000
//   }
// );
const getComponent = dir => () => import(`views/${dir}`);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: getComponent('home')
    },
    {
      path: '/goods',
      name: 'goods',
      component: getComponent('goods')
    },
    {
      path: '/personal',
      name: 'personal',
      component: getComponent('personal')
    },
    {
      path: '/shopCart',
      name: 'shopCart',
      component: getComponent('shopCart')
    },
  ]
});
