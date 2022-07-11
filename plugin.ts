// https://github.com/umijs/umi-next/blob/master/examples/boilerplate/plugin.ts
import type { IApi } from 'umi';

export default (api: IApi) => {
  api.modifyHTML(($) => {
    $('head').append(`
    <script type="text/javascript" src="//res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
    <title></title>
    `);

    return $;
  });
};
