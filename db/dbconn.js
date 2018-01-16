// 创建数据库连接
const mongoose = require("mongoose");

module.exports = function(){
    return mongoose.createConnection("localhost","imooc");
}