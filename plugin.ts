// https://github.com/umijs/umi-next/blob/master/examples/boilerplate/plugin.ts
import type { IApi } from 'umi';

export default (api: IApi) => {
  api.modifyHTML(($) => {
   $('head').html(`
    <meta charset="utf-8" />
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no,viewport-fit=cover"/>
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta content="black" name="apple-mobile-web-app-status-bar-style">
    <meta content="telephone=no,email=no" name="format-detection">
    <script type="text/javascript" src="//res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
    <title></title>
    `);
    /*$('head').append(`
    <script type="text/javascript" src="//res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
    <title></title>
    `);*/

    return $;
  });
};
