/* ---------------------------------检查是否已经登录---------------------------- */
var account = getCookie('username');
if(account){
    $('.pOLeft img').attr('src','img/person-04.png');
    $('.pORight').html(`
        <h3>${account}</h3>  
        <p>学习时长 <span>38分</span><i>经验 <span>48</span></i></p>
        `).removeClass('toLogin');
    $('.pOFoot').show();
} else{
    $('.pOLeft img').attr('src','img/person-head.png');
    $('.pORight').html('点击登录').addClass('toLogin');
    $('.pOFoot').hide();
}
// 点击登录跳转
$('.toLogin').click(function(){
    location.href = 'login.html';
});
// 头像部分点击出现完整照片
$('.pOLeft').on('click',function(){
    $('.personFog').css('display','block').animate({
        "width":"100%",
        "height":'100%',
        'left':0,
        "top":0,
    })
    $('.personFog img').animate({
        'width':'3.75rem',
        'height':'2.75rem'
    })
})
$('.personFog').bind('click',function(){
    
    $('.personFog').animate({
        "width":"0",
        "height":'0',
        'left':'50%',
        "top":'50%',
        'display':'none'
    });
    $('.personFog img').animate({
        'width':'0',
        'height':'0' 
    })
})
$('.personFog img').click(function(){
    event.stopPropagation();
});
// 昵称部分点击弹出新页面
$('.pORight').on('click',function(){
    $('.personNewPage').animate({"left":0});
})
$('.personNewPageOneB').click(function(){
    $('.personNewPage').animate({"left":"3.75rem"});   
})
// 手机端滑动事件划不动（待定）
// $('.personNewPage').on("touchmove",function(ev){
//     let el=ev.offsetWidth;
//     console.log(ev)
//     $('.personNewPage').animate({"left":"3.75rem"});        
// })
// 剩余菜单部分点击弹出事件
$('.presonSectwo li').click(function(){
    $('.personNewPage2').animate({'left':'0'});
    $('.personNewPage2 h3').html($(this).children('a').text());
})
$('.presonSecthree li').click(function(){
    $('.personNewPage2').animate({'left':'0'});
    $('.personNewPage2 h3').html($(this).children('p').html());
})

$('.personNewPage2 i').click(function(){
    $('.personNewPage2').animate({'left':'3.75rem'});    
})

// 夜间模式开启
var a=0;
$('.personHeader1').click(function(){
    a++;
    if(a%2==1){
        $('.personHout').css({'background':'#999'});
        $('.personSecone').css({'background':'#999'});
        $('.presonSectwo').css({'background':'#999'});
        $('.presonSecthree').css({'background':'#999'});
        $('.personFooter').css({'background':'#999'});
        $('.personContent').css({'background':'#aaa'});
        $('.personHeader1 img').attr('src','img/person-19.png');
    }else{
        $('.personHout').css({'background':'#fff'});
        $('.personSecone').css({'background':'#fff'});
        $('.presonSectwo').css({'background':'#fff'});
        $('.presonSecthree').css({'background':'#fff'});
        $('.personFooter').css({'background':'#fff'});
        $('.personContent').css({'background':'#f2f6f9'});
        $('.personHeader1 img').attr('src','img/person-01.png');
        
    }
})
// touch
// 昵称弹出页面部分touch事件
var pageOne=$('.personNewPage')[0];
pageOne.ontouchstart=function(ev){
    var sx=ev.touches[0].pageX
    pageOne.ontouchmove=function(ev){
        var nx=ev.touches[0].pageX
        var x = nx-sx;    
        x=Math.max(0,x);
        pageOne.style.left=x+"px";
            pageOne.ontouchend=function(ev){
                if(nx-sx>=160){
                    $('.personNewPage').animate({"left":'3.75rem'});
                } else{       
                    $('.personNewPage').animate({"left":'0'});                    
                }
        }
    }
}
// 其余menu弹出页面部分touch事件
var pageTwo=$('.personNewPage2')[0];
pageTwo.ontouchstart=function(ev){
    var sx=ev.touches[0].pageX
    pageTwo.ontouchmove=function(ev){
        var nx=ev.touches[0].pageX
        var x = nx-sx;    
        x=Math.max(0,x);
        pageTwo.style.left=x+"px";
        pageTwo.ontouchend=function(ev){
                if(nx-sx>=160){
                    $('.personNewPage2').animate({'left':'3.75rem'});
                    
                } else{ 
                    $('.personNewPage2').animate({'left':'0'});
                }
        }
    }
}