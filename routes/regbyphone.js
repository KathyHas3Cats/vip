var express = require('express');
var router = express.Router();
var userinfosdb = require("../db/userinfosdb");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register',{'errmsg':false});
});

/* POST users listing. */
router.post('/', function(req, res, next) {
  // 获取前端发送的数据
  var username = req.body.usernamePhone;
  var userpass = req.body.passwordPhone;
  console.log(userpass)
  // 连接数据库，判断是否存在，不存在则保存
  userinfosdb.reg({'username':username,'userpass':userpass},function(isSuccess){
    if(isSuccess){
      res.redirect("login.html");
    } else{
      res.render("register",{"errmsg":true});
    }
  });
});

module.exports = router;
