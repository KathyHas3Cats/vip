//导航栏切换,通过图标切换
//下方图标切换
$('.dfcNav li').each(function(k,v){
    var spanX,liX;
    v.addEventListener('touchstart',function(){
        liX = v.offsetLeft;
        spanX = $('.dfcNav span').offset().left;
    });
    
    v.addEventListener('touchend',function(){
        if(spanX < liX){
        var iLeft1 = 0.6 + 1.5*k + 'rem';
        var iRight1 = 7.5 - (0.94 + 1.5*k) + 'rem';
        var iLeft2 = -7.5*k +'rem';
        $('.dfcNav li').css('color','#72767f')
        $(this).css('color','#f01414');
        $('.dfcNav span').animate({'right':iRight1},20);
        $('.dfcNav span').animate({'left':iLeft1},30);
        //页面切换
        $('.dfcContentInner').animate({'left':iLeft2},50);
        }else if(spanX > liX){
            var iLeft1 = 0.6 + 1.5*k + 'rem';
            var iRight1 = 7.5 - (0.94 + 1.5*k) + 'rem';
            var iLeft2 = -7.5*k +'rem';
            $('.dfcNav li').css('color','#72767f')
            $(this).css('color','#f01414');
            $('.dfcNav span').animate({'left':iLeft1},20);
            $('.dfcNav span').animate({'right':iRight1},30);
            
            //页面切换
            $('.dfcContentInner').animate({'left':iLeft2},50); 
        }
    });
});
//导航栏切换,滑动页面切换
// var iX1,iX2;
// function thismovestart(e){
//     iX1 = e.touches[0].pageX;
//     return false;
// }
// function thismoveend(e){
//     iX2 = e.touches[0].pageX;
//     return false;
// }
$('.dfcContentInner').children().each(function(k,v){
    v.addEventListener('touchmove',function(){
        // thismovestart();
        // thismoveend();
        
        spanX = $('.dfcNav span').offset().left;
        liX = $('.dfcNav li').offset().left;
        var i = k - 1;
        if(spanX < liX){
            var iLeft1 = 0.6 + 1.5*k + 'rem';
            var iRight1 = 7.5 - (0.94 + 1.5*k) + 'rem';
            var iLeft2 = -7.5*k +'rem';
            $('.dfcNav li').css('color','#72767f')
            $(this).css('color','#f01414');
            $('.dfcNav span').animate({'right':iRight1},20);
            $('.dfcNav span').animate({'left':iLeft1},30);
        }else if(spanX > liX){
            var iLeft1 = 0.6 + 1.5*k + 'rem';
            var iRight1 = 7.5 - (0.94 + 1.5*k) + 'rem';
            var iLeft2 = -7.5*k +'rem';
            $('.dfcNav li').css('color','#72767f')
            $(this).css('color','#f01414');
            $('.dfcNav span').animate({'left':iLeft1},20);
            $('.dfcNav span').animate({'right':iRight1},30);
        }
        $('.dfcNav li').css('color','#72767f').eq(k).css('color','#f01414');
    })
})

//章节页点击选择播放视频
//选项颜色切换
$('.dfcContentInner1 dd').each(function(k,v){
    v.addEventListener('touchend',function(){
    console.log($(this))
    $('.dfcContentInner1 p').removeClass('dfcPActive');
    $('.dfcContentInner1 span').removeClass('dfcPActive');
    $('.dfcContentInner1 img').attr('src','img/detailFreeCourse-02.jpg');
    $(this).find('p').addClass('dfcPActive');
    $(this).find('span').addClass('dfcPActive');
    $(this).find('img').attr('src','img/detailFreeCourse-01.jpg');
    })
});

//详情页下拉显示
$('.dfcContentInner2 h3')[0].addEventListener('touchend',function(){
    var iHeight = $('.dfcContentInner2 h2 p').height();
    $(this).toggleClass('dfcH3Active');
    if($('.dfcContentInner2 h2').height() != iHeight){
        $('.dfcContentInner2 h2').animate({height:iHeight},100);
    }else{
        $('.dfcContentInner2 h2').animate({height:'1.04rem'},100);
    }
    
});
$('.dfcContentInner2 h1 i')[0].addEventListener('touchend',function(){
    $(this).toggle();
    $('.dfcContentInner2 h1 em').toggle();
});
$('.dfcContentInner2 h1 em')[0].addEventListener('touchend',function(){
    $(this).toggle();
    $('.dfcContentInner2 h1 i').toggle();
});

//评论页点赞
$('.dfcContentInner3ConR h3')[0].addEventListener('touchstart',function(){
    $(this).find('img').stop().animate({height:'0.4rem',width:'0.4rem'},'fast');
});
$('.dfcContentInner3ConR h3')[0].addEventListener('touchend',function(){
    $(this).find('img').attr('src','img/detailFreeCourse-21.png').stop().animate({height:'0.3rem',width:'0.3rem'});
    $(this).find('span').css('color','#f01414');
});

//弹出层显示隐藏
$('.dfcButton')[0].addEventListener('touchend',function(){
    $(this).fadeToggle();
    $('.dfcButtonImg').toggleClass('dfcButtonActive');
    $('.dfcCover').slideToggle();
})
$('.dfcButtonImg')[0].addEventListener('touchend',function(){
    $('.dfcButton').fadeToggle();
    $(this).toggleClass('dfcButtonActive');
    $('.dfcCover').slideToggle();
})

//点击返回首页
$('.dfcVideoImg')[0].addEventListener('touchend',function(){
    window.location.href='indexFreeCourse.html';
})
   

//$('.paidCHeaderMenu span').animate({
//     'left':'3.20rem',
//     'width':'0.5rem'
// },500).animate({
//     'width':'0.16rem'
// },100)