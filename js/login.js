(function($){
    $(function(){
        // 输入框输入内容时，显示清空内容按钮
        function showDelete (obj){
            if(obj.val() !== ''){  //如果内容不为空则显示，否则隐藏
                obj.next('.loginDelete').show();
            } else{
                obj.next('.loginDelete').hide();                
            }
        }
        // 点击删除按钮时，清空输入内容
        function deleteInput (obj){
            obj.prev('input').val('').focus();    //清空已输入账号
            obj.hide();    //隐藏删除按钮
        }
        // 点击显示/隐藏密码按钮
        function showPsw (obj){
            if(obj.hasClass('loginHidePsw')){
                obj.prev('.inPassword')[0].type = 'password';
            } else{
                obj.prev('.inPassword')[0].type = 'text';
            }
            obj.toggleClass('loginHidePsw');  //切换按钮背景图
        }


        // 输入账号时显示清空已输入账号按钮
        $('.inUsername').on('input',function(){
            showDelete ($(this));
        });
        // 点击删除按钮
        $('.loginDelete').on('click',function(){
            deleteInput ($(this));
        });
        // 点击显示/隐藏密码按钮
        $('.loginShowPsw').click(function(){
            showPsw ($(this));
        });
        // 点击忘记密码，显示找回密码界面
        $('.loginForgetPsw').click(function(){
            $('.loginGetBackPsw').addClass('loginGetBackPswSlide');
        });
        // 点击社交账号登录
        $('.loginGamWay').click(function(){
            $('.loginToReg').toggle();    //注册按钮显示/隐藏
            $('.loginGamWayList').toggleClass('loginGamWayListShow');   //登录方式列表显示/隐藏
        });
        
        
        /* ------------------------找回密码界面------------------------ */
        // 输入账号时显示清空已输入账号按钮
        $('.lgbpUsername').on('input',function(){
            showDelete ($(this));
        });
        // 点击返回按钮，隐藏找回密码界面
        $('.loginBack').click(function(){
            $('.loginGetBackPsw').removeClass('loginGetBackPswSlide');
        });

        /* -----------------------输入框正则验证----------------------- */
        // 显示提示信息
        function showInfo (info){
            $('.info').animate({'opacity':1},'fast').html(info).addClass('infoSlide');
        }
        // 提示信息消失
        function hideInfo (){
            setTimeout(function(){
                $('.info').animate({'opacity':0},'fast',function(){
                    $('.info').removeClass('infoSlide');
                });
            },2000);
        }
        // 点击提交按钮
        $('.loginSubmit').click(function(){
            if($('.loginForm').find($('.inUsername')).val() === ''){   //账号为空
                showInfo ('请输入账号');
                hideInfo ();
                return false;
            } else if($('.loginForm').find($('.inPassword')).val() === ''){  //密码为空
                showInfo ('请输入密码');
                hideInfo ();
                return false;
            }
        });
        
    });
})(jQuery);