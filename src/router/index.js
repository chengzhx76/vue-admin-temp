import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Success from '@/components/Success'
import Login from '@/views/login'
import Layout from '@/views/layout/Layout'
import Error from '@/views/error/404'
import Dashboard from '@/views/pages/dashboard'

Vue.use(Router);

/**
 * name：菜单名字
 * icon：菜单图标
 * hidden: 在侧边栏是否展示
 * noDropdown: 是否显示下拉菜单
 */
export const asyncRouterMap = [
  {
    path: '/test',
    component: Layout,
    redirect: '/test/test1',
    name: '权限',
    icon: 'quanxian',
    children: [
      {
        path: 'test1',
        component: Success,
        name: '权限1'
      }
    ]
  },
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/index',
    name: '图表',
    icon: 'quanxian',
    children: [
      {
        path: 'index',
        component: Success,
        name: '介绍'
      },
      {
        path: 'keyboard',
        component: Success,
        name: '键盘图表'
      }
    ]
  }
];

export const constantRouterMap = [
  {
    path: '/login',
    component: Login,
    hidden: true
  },
  {
    path: '/404',
    component: Error,
    hidden: true
  },
  {
    path: '/sc',
    component: Success,
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      }
    ]
  },
  {
    path: '/sc',
    component: Layout,
    redirect: '/sc/success',
    noDropdown: true,
    icon: 'quanxian',
    children: [
      {
        path: 'success',
        component: Dashboard,
        name: '简介'
      }
    ]
  }


];

export default new Router({
  routes: constantRouterMap
})
