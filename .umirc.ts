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
    {
      name: ' 百度地图基础使用',
      path: '/basicMap',
      component: './BaiduMapBasic',
    },
    {
      name: ' 百度地图添加覆盖物',
      path: '/BiaduMapOverlay',
      component: './BaiduMapMarkerAndInfo',
    },
    {
      name: ' 百度地图绘制行政区',
      path: '/BaiduMapBoundary',
      component: './BaiduMapBoundary',
    },
    {
      name: ' 百度地图添加控件',
      path: '/BaiduMapController',
      component: './BaiduMapController',
    },
    {
      name: ' 百度地图3.0版本',
      path: '/BaiduMapV3',
      component: './BaiduMapV3',
    },
    {
      name: ' 百度地图VGL',
      path: '/BaiduMapVGL',
      component: './BaiduMapVGL',
    },
    {
      name: ' 百度地图VGL3D模型',
      path: '/BaiduMapVGL3D',
      component: './BaiduMapVGL3D',
    },
    {
      name: ' 百度地图React组件库',
      path: '/BaiduMapReact',
      component: './BaiduMapReact',
    },
  ],
  npmClient: 'pnpm',
  plugins: [],
  scripts: [
    'http://api.map.baidu.com/api?type=webgl&v=1.0&ak=17b7Lhnf06x0CMZLI3aYn5ZIdMxfGcyc',
    'https://api.map.baidu.com/api?v=3.0&ak=17b7Lhnf06x0CMZLI3aYn5ZIdMxfGcyc',
    'https://api.map.baidu.com/library/CurveLine/1.5/src/CurveLine.min.js',
    'https://unpkg.com/mapvgl/dist/mapvgl.min.js',
    'http://mapv.baidu.com/build/mapv.min.js',
  ],
});
