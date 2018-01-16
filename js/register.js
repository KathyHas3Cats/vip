(function($){
    $(function(){
        // 点击邮箱注册，显示邮箱注册界面
        $('.regByEmailLink').click(function(){
            $('.regByEmail').addClass('regByEmailSlide');
        });
        // 点击手机注册，显示手机注册页面
        $('.regByPhoneLink').click(function(){
            $('.regByEmail').removeClass('regByEmailSlide');
        });
        
        /* -----------------------输入框正则验证----------------------- */
        // 显示提示信息
        function showInfo (info){
            $('.info').animate({'opacity':1}).html(info).addClass('infoSlide');
        }
        // 提示信息消失
        function hideInfo (){
            setTimeout(function(){
                $('.info').animate({'opacity':0},'fast',function(){
                    $('.info').removeClass('infoSlide');
                });
            },2000);
        }
        
        
        // 点击手机注册页面提交按钮
        $('.regByPhoneSub').click(function(){
            // 验证手机号正则
            var reg = /^1\d{10}$/;
            // 获取输入的账号
            var sAccount = $('.regByPhoneForm').find($('.inUsername')).val();
            // 获取输入的密码
            var sPassword = $('.regByPhoneForm').find($('.inPassword')).val();
            if(sAccount === ''){   //账号为空
                showInfo ('请输入账号');
                hideInfo ();
                return false;
            }
            if(!reg.test(sAccount)){  //手机号格式不正确
                showInfo ('手机格式输入错误');
                hideInfo ();
                return false;
            }
            if($('.inVerifyCode').val() === ''){  //验证码为空
                showInfo ('请输入验证码');
                hideInfo (); 
                return false;
            }
            if($('.inVerifyCode').val().length !== 4){  //验证码不是4位
                showInfo ('请输入正确的验证码');
                hideInfo ();
                return false;
            }
            if(sPassword === ''){  //密码为空
                showInfo ('请输入密码');
                hideInfo ();
                return false;
            }
        });

        // 点击邮箱注册页面提交按钮
        $('.regByEmailSub').click(function(){
            // 验证手机号正则
            var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            // 获取输入的账号
            var sEmail = $('.regByEmailForm').find($('.inUsername')).val();
            // 获取输入的密码
            var sPasswordE = $('.regByEmailForm').find($('.inPassword')).val();
            if(sEmail === ''){   //账号为空
                showInfo ('请输入邮箱');
                hideInfo ();
                return false;
            }
            if(!reg.test(sEmail)){  //邮箱格式不正确
                showInfo ('邮箱格式输入错误');
                hideInfo ();
                return false;
            }
            if(sPasswordE === ''){  //密码为空
                showInfo ('请输入密码');
                hideInfo ();
                return false;
            }
        });
    });
})(jQuery);        