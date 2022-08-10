// https://github.com/umijs/umi-next/blob/master/examples/boilerplate/plugin.ts
import type { IApi } from 'umi';
import {getMiddleware} from "@liangskyli/mock";

export default (api: IApi) => {
  api.modifyHTML(($) => {
    $('head').append(`
    <script type="text/javascript" src="//res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
    <title></title>
    `);

    return $;
  });
  if (api.name === 'dev' && process.env.MOCK !== 'false') {
    // 只有 dev 才走mock
    // mock 开关配置判断
    api.addBeforeMiddlewares(async () => {
      const { middleware } = await getMiddleware({exclude: ['mock/custom-data/**']});
      return [
        middleware,
      ];
    });
  }
};
