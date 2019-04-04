import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const getComponent = dir => () => import(`views/${dir}`);
export default new Router({
  routes: [
    {
      path: '/',
      // 1. 通过path跳转
      // redirect: '/home/index'
      // 2. 通过name属性跳转
      redirect: { name: 'home' }
      // 3. 通过方法跳转，动态返回重定向目标
    },
    {
      path: '/home/index',
      name: 'home',
      component: getComponent('home'),
      meta: { title: '首页' }
    },
    {
      path: '/goods',
      name: 'goods',
      component: getComponent('goods'),
      meta: { title: '商品' }
    },
    {
      path: '/personal',
      name: 'personal',
      component: getComponent('personal'),
      meta: { title: '个人中心' }
    },
    {
      path: '/shopCart',
      name: 'shopCart',
      component: getComponent('shopCart'),
      meta: { title: '购物车' }
    },
    {
      path: '*',
      name: '404',
      component: () => import(`layouts/notFound`),
      meta: { title: '404页面' }
    }
  ]
});
