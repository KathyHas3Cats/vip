// 对userinfos的操作
const mongoose = require("mongoose");
const dbconn = require("./dbconn")();

//创建模板（跟数据库中集合的结构要一致）
let userinfosSchema = new mongoose.Schema({
    username:String,
    userpass:String
});

//创建模型（把模板和数据库中集合对应链接起来）
let userinfosModel = dbconn.model("userinfos",userinfosSchema);

module.exports = {
    // 添加数据
    'add':function(data,callback){
        //创建实体（要插入到数据库中数据）
        let userinfosEntity = new userinfosModel(data);
        userinfosEntity.save((err,data)=>{
            if(err){
                console.log(err);
                callback(false);
            }else{
                callback(true);
            }
        });
    },
    // 查找数据
    "find":function(condition,callback){        
        userinfosModel.find(condition,(err,data)=>{
            if(err){
                console.log(err);
                callback([]);
            }else{
                callback(data);
            }
        });
    },
    // 注册
    "reg":function(data,callback){
        let that = this;
        //1、查找该用户是否存在
        this.find({"username":data.username},function(userinfos){
            if(userinfos.length==0){
                //2、如果不存在则保存
                that.add(data,function(isSuccess){
                    callback(isSuccess);
                });

            }else{
                callback(false);
            }
        });
    }
}