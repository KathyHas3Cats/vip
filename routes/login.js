const express = require('express');
const router = express.Router();
const userinfosdb = require('../db/userinfosdb');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login',{'errmsg_username':false,'errmsg_userpass':false});
});

/* POST users listing. */
router.post('/', function(req, res, next) {
    // 获取前端发送的数据
    var username = req.body.username;
    var userpass = req.body.password;

    // 连接数据库查找数据，判断用户名和密码是否正确
    userinfosdb.find({'username':username},function(usernames){
        if(usernames.length === 0){
            res.render('login',{'errmsg_username':true,'errmsg_userpass':false});
        } else{            
            userinfosdb.find({'username':username,'userpass':userpass},function(usernames){
                if(usernames.length === 0){
                    res.render('login',{'errmsg_username':false,'errmsg_userpass':true});
                } else{
                    //保存session
                    req.session.username = username;
                    //保存cookie
                    res.cookie("username",username);
                    //跳转首页
                    res.redirect("index.html");
                }
            });
        }
    });
});

module.exports = router;