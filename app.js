//1.导入模块
const express = require('express');
//2.创建服务器
let app = express();
//统一使用静态文件
app.use(express.static('public'));

//3.开启服务器
app.listen(3000,()=>{
console.log('success');
});