

export default {

  // 返回值也可以是对象形式
  'GET /api.php': (req: any, res: any) => {
    res.json([
      { id: 1, name: 'name1' },
    ]);
  },

}
