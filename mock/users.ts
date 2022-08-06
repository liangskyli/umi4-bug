import CustomData from "./custom-data";
import {getMockData} from "./custom-data/utils";


export default {
  // 返回值也可以是对象形式
  'GET /api.php': (req: any, res: any) => {
    const json = getMockData(
        {data:{ id: 1, name: 'name1', c:'c', d:'d' }},
        req,
        // 这里umi4不能使用/api.php key,会标识重复mock路由，umi3使用exclude: ['mock/custom-data/**']后没问题
        // CustomData['/api.php'],
        CustomData['TemplateData/api.php'],
    );
    res.json(json);
  },
}
