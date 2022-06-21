import { defineConfig } from 'umi';

const routerBase = `/sub-demo/`;
const publicPath = routerBase;

export default defineConfig({
    fastRefresh: true,
    model: {},
    initialState: {},
    dva: {
        immer: {
            enableES5: true,
            enableAllPlugins: true,
        },
    },
    routes: [
        {path: '/qiankun/page1', component: '@/pages/page1/index', title: 'page1'},
        {path: '/page1', component: '@/pages/page1/index', title: 'page1'},
        {path: '/page2', component: '@/pages/page2/index', title: 'page2'},
    ],
    base: routerBase,
    publicPath: publicPath,
    qiankun: {
        slave: {},
    },
});


