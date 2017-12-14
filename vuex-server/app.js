const express = require('express');
const tools = require('./spider');

const app = express();

app.get('/api/v1/jd/types', (req, res) => {
  tools.getJDTypes(function(data) {
    res.json({
      stats: 'y',
      msg: '获取京东商品分类数据成功',
      data
    });
  });
});
app.listen(3000,() => {
  console.log('服务器运行在3000端口');
});