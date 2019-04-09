/**
 * Created by wangkai on 2019/4/9
 * 路由懒加载函数
 */
export default dir => () => import(`views/${dir}`);
