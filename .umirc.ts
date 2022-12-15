import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    // {
    //   name: '权限演示',
    //   path: '/access',
    //   component: './Access',
    // },
    // {
    //     name: ' CRUD 示例',
    //     path: '/table',
    //     component: './Table',
    // },
    {
      name: ' 百度地图基础使用',
      path: '/basicMap',
      component: './BaiduMapBasic',
    },
  ],
  npmClient: 'pnpm',
  plugins: [],
  scripts: [
    'http://api.map.baidu.com/api?type=webgl&v=1.0&ak=17b7Lhnf06x0CMZLI3aYn5ZIdMxfGcyc',
  ],
});
