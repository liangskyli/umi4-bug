//import type { Request } from 'express';


export const TemplateData = {
  // 这里umi4不能使用/api.php key,会标识重复mock路由，umi3使用exclude: ['mock/custom-data/**']后没问题
  // '/api.php': {
  'TemplateData/api.php': {
    response: {
      data: {
        id: 2,
        // umi4注释exclude: ['mock/custom-data/**']后，
        // 更改name的值，需要改2次，才有第一次更改的数据，延迟了一次
        name: 'name2',
      },
    },
    /*sceneData: [
      {
        requestCase: (_request: Request) => {
          // 显示协议
          return _request.query.activityId === '1';
        },
        response: {
          data: {
            id: 3,
            name: 'name3',
          }
        },
      },
    ],*/
  },
};
