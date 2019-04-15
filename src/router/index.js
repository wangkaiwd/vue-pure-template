import lazyLoading from './lazyLoading';
import menuList from './generateMenus';

const routes = [
  {
    path: '/',
    name: '首页',
    // 1. 通过path跳转
    // redirect: '/home/index'
    // 2. 通过name属性跳转
    redirect: '/home',
    // 3. 通过方法跳转，动态返回重定向目标
    component: lazyLoading('admin'),
    children: [
      {
        path: '/home',
        name: '首页1',
        component: lazyLoading('home'),
      }
    ]
  },
  {
    path: '/',
    leaf: true,
    component: lazyLoading('admin'),
    children: [
      {
        path: '/goods',
        name: '商品',
        component: lazyLoading('goods'),
      },
    ]
  },
  {
    path: '/',
    leaf: true,
    component: lazyLoading('admin'),
    children: [
      {
        path: '/personal',
        name: '个人中心',
        component: lazyLoading('personal'),
      }
    ]
  },
  {
    path: '/',
    leaf: true,
    component: lazyLoading('admin'),
    children: [
      {
        path: '/shopCart',
        name: '购物车',
        component: lazyLoading('shopCart'),
      }
    ]
  },
  {
    path: '*',
    hidden: true,
    name: '404',
    component: () => import(`layouts/notFound`),
  }
];
const menus = menuList(routes);
// 想要将内容处理成自己想要的比较困难，通过动态为数组内容添加字段然后在遍历的过程中通过字段来确定是否显示相对来说会简单一些
// 所以想要将数组的内容过滤掉相对来说会比较困难
export { routes, menus };
