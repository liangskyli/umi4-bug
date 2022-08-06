## Usage

```bash
$ yarn
$ yarn start
```

打开接口页面：http://127.0.0.1:8000/api.php

mac下
- mock/custom-data/** 这里的文件不是mock入口，工具方法
  - umi3要排除，排出后，umi3热更新没问题
  - umi4排除了，改这里的文件(mock/custom-data/**)，不热更新 （入口mock/users.ts引用了这里）
  - umi4不排除时，文件会热更新，但是改mock/custom-data/template-data.ts文件内容，需要改2次，才有第一次更改的数据



