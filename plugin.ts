// https://github.com/umijs/umi-next/blob/master/examples/boilerplate/plugin.ts
import type { IApi } from 'umi';
import {getMiddleware} from "@liangskyli/mock";
import path from "path";

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
      const mockDir = path.join(process.cwd(), './mock');
      require('ts-node').register({
        dir: mockDir,
        emit: false,
        transpileOnly: true,
        compilerOptions: {
          allowJs: true,
        },
      });

      const { middleware } = await getMiddleware({exclude: ['mock/custom-data/**']});
      return [
        middleware,
      ];
    });
  }
};
