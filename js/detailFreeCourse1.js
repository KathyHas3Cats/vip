//页面跳转
$('.dfc1ContentInner1 dd')[0].addEventListener('touchend',function(){
    window.location.href="detailFreeCourse.html";
})
$('.dfc1Footer')[0].addEventListener('touchend',function(){
    window.location.href="detailFreeCourse.html";
})
//向上滑动导航栏切换
var flag=true;
var isDrag = false;
var iY
var isUp,isDown;
var preHeight = $('.dfc1Nav').height();
//按下手指，获取手指位置
function thismovestart(e){
    iY = e.touches[0].pageY;
    isDrag = true;
    // console.log(iY);
    return false;
}
function thismove(e){
    if(isDrag){
        var y = e.touches[0].pageY - iY;
        // console.log(y);
        if(y < 0){
            isUp = true;
        }
        if(y > 0){
            isDown = true;
        }
    }
}
function thismoveup(e){
    if(isUp){
        $('.dfc1Nav').animate({'height':$('.dfc1Nav p').height()},300);
        $('.dfc1Navfavorite').animate({'opacity':0},300);
        $('.dfc1NavShare').animate({'opacity':0},300);
        $('.dfc1Nav p').animate({'line-height':'1.2rem','padding-top':'0','padding-left':'1.28rem'},300);
        $('.dfc1Nav').addClass('dfc1NavActive');
        $('.dfc1Nav p').addClass('dfc1PActive');
        $('.dfc1NavImg').hide(300);
        $('.dfc1NavImg1').show(300);
        $('.dfc1NavImg2').show(300);
        $('.dfc1NavImg3').show(300);
    }
    isUp = false;
    if(isDown){
        var iHeight = $('.dfc1Nav p').height() + 1.46 + 'rem';
        $('.dfc1Nav').animate({'height':preHeight},300);
        $('.dfc1Navfavorite').animate({'opacity':1},300);
        $('.dfc1NavShare').animate({'opacity':1},300);
        $('.dfc1Nav p').animate({'line-height':'1.18rem','padding-top':'1.4rem','padding-left':'0.5rem'},300);
        $('.dfc1Nav').removeClass('dfc1NavActive');
        $('.dfc1Nav p').removeClass('dfc1PActive');
        $('.dfc1NavImg1').hide(300);
        $('.dfc1NavImg').show(300);
        $('.dfc1NavImg2').hide(300);
        $('.dfc1NavImg3').hide(300);
    }
    isDown = false;
}

    $('.dfc1Content')[0].addEventListener('touchstart',thismovestart);
    $('.dfc1Content')[0].addEventListener('touchmove',thismove);
    $('.dfc1Content')[0].addEventListener('touchend',thismoveup);
