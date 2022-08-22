import { defineConfig } from 'umi';

const routerBase = `/sub-demo/`;
const publicPath = routerBase;

export default defineConfig({
    fastRefresh: {},
    dva: {
        immer: true,
        hmr: true,
    },
    routes: [
        {
            path: '/',
            component: '@/base-layout',
            routes: [
                {path: '/qiankun/page1', component: '@/pages/page1/index', title: 'page1'},
                {path: '/page1', component: '@/pages/page1/index', title: 'page1'},
                {path: '/page2', component: '@/pages/page2/index', title: 'page2'},
            ]
        }
    ],
    base: routerBase,
    publicPath: publicPath,
    /*qiankun: {
        slave: {},
    },*/
    mock: {
        // umi3要排除，这不是mock入口，umi4排除了，改这里的文件，不热更新，umi3没问题
        // umi4注释后，mock/custom-data/template-data.ts 文件更改，需要改2次，才有第一次更改的数据，延迟了一次
        //exclude: ['mock/custom-data/**'],
    }
});


