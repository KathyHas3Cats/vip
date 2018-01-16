// 顶部按钮功能
// 1 x
$('.paidCicon i:nth-child(1)').click(function(){
    $('body').animate({
        'opacity':'0.1'
    },300)
    setTimeout(function(){
        location.href="index.html";
    },300)
})
// 2 cart
$('.paidCicon i:nth-child(2)').click(function(){
    $('body').animate({
        'opacity':'0.1'
    },300)
    setTimeout(function(){
        location.href="cart.html";
    },300)
})
// 3 分享
$('.paidCicon i:nth-child(3)').click(function(){
    $('.fog').css('display','block');
    $('.paidCshare').animate({
        'bottom':0,
    });
})
$('.fog').click(function(){
    $('.fog').css('display','none');
    $('.paidCshare').animate({
        'bottom':'-2rem'
    });
})

// 视频播放功能

$('.paidCstop').click(function(){
    $('video').attr({'controls':'controls','autoplay':'true'}).siblings().css('display','none');
    $('video')[0].play();
    console.log('1')
})

// 交钱部分购物车点击跳转点击跳转cart
$('.paidCFooterCartIcon').click(function(){
    location.href="cart.html";
})

// 4menu点击移动
// click
$('.paidCHeaderMenu li:nth-child(1)').click(function(){
    // if()
    $('.paidCHeaderMasgMoveBox').animate({
        'left':0
    })
    $('.paidCHeaderMenu span').animate({
        'left':'0.4rem',
        'width':'0.46rem'        
    }).animate({
        'width':'0.16rem'
    })
})
$('.paidCHeaderMenu li:nth-child(2)').click(function(){
    var ow=$('.paidCHeaderMenu span')[0].offsetLeft;
    console.log(ow);

    $('.paidCHeaderMenu span').animate({
        'left':'1.3rem',
        'width':'0.46rem'
    },500)
    setTimeout(function(){
        var nw=$('.paidCHeaderMenu span')[0].offsetLeft;
        console.log(nw);
        if(nw==ow){
            $('.paidCHeaderMenu span').stop().animate({
                'left':'1rem',
                'width':'0.16rem'
            },100).stop();
        }else if(nw>ow){
            $('.paidCHeaderMenu span').animate({
                'left':'1rem',
                'width':'0.46rem'
            }).animate({
                'width':'0.16rem',
                'left':'1.3rem',        
            }).stop()
        }else{
            $('.paidCHeaderMenu span').stop().animate({
                'width':'0.46rem',
                'left':'1.33rem'
            }).animate({
                'width':'0.16rem'
            });
        }

    },100)

    $('.paidCHeaderMasgMoveBox').animate({
        'left':'-3.75rem'
    })

})
$('.paidCHeaderMenu li:nth-child(3)').click(function(){

    var ow=$('.paidCHeaderMenu span')[0].offsetLeft;
    console.log(ow);

    $('.paidCHeaderMenu span').stop().animate({
        'left':'2.26rem',
        'width':'0.46rem'
    },600);
    setTimeout(function(){
        var nw=$('.paidCHeaderMenu span')[0].offsetLeft;
        console.log(nw);
        if(nw==ow){
            $('.paidCHeaderMenu span').stop().animate({
                'left':'2.26rem',
                'width':'0.16rem'
            },100).stop();
        }else if(nw>ow){
            $('.paidCHeaderMenu span').animate({
                'left':'1.96rem',
                'width':'0.46rem'
            }).animate({
                'width':'0.16rem',
                'left':'2.26rem',        
            }).stop();
        }else{
            $('.paidCHeaderMenu span').stop().animate({
                'width':'0.46rem',
                'left':'2.26rem'
            }).animate({
                'width':'0.16rem'
            });
        }

    },100)

    $('.paidCHeaderMasgMoveBox').animate({
        'left':'-7.5rem'
    })

})
$('.paidCHeaderMenu li:nth-child(4)').click(function(){

    $('.paidCHeaderMasgMoveBox').animate({
        'left':'-11.25rem'
    })
    $('.paidCHeaderMenu span').animate({
        'left':'2.90rem',
        'width':'0.46rem'
    },500).animate({ 
        'left':'3.20rem',    
        'width':'0.16rem'
    },100)
})

// 滑动部分视频消失的吸顶效果
var nbody=$('body')[0];
var nbox=$('.paidCOn')[0];
// 滑动开始（按下）
nbody.ontouchstart=function(ev){
    var sy=ev.touches[0].pageY;
    // 滑动
    nbody.ontouchmove=function(ev){
        var ny=ev.touches[0].pageY;
        var y = sy-ny; 
        // console.log(x);
        // 获取当前的滚动部分隐藏高度(  Y轴  )
        var tt= $('.paidCHeaderMasgOneFlexBox')[0].scrollTop;
        if(y<=0){
            if(tt<=0){
                $('.paidCHeader').css({'display':'block'});   
            } 
        }
        if(y>=179){
            $('.paidCHeader').css('display','none');
            $('.paidCHeaderMasg').css('overflow-y','auto');  
        }
        // 滑完抬起
        nbody.ontouchend=function(ev){

            
            // if(scrollL>160){

            //     $('.paidCHeaderMasgMoveBox').animate({'left':'-3.75rem'});
            //     $('.paidCHeaderMasg')[0].scrollLeft=0;
                
            // }
    
            // 抬起事件(  Y轴  )
            if(y>=179){
                $('.paidCHeader').css('display','none');
                $('.paidCHeaderMasg').css('overflow-y','auto');    
            }
            if(y<0){
                if(tt==0){
                    $('.paidCHeader').css('display','block');   
                    // $('.paidCOn').css({'display':'block','overflow-y':'auto'});
                    // $('.paidCHeaderMasg').css({'overflow-y':'static','height':'auto','display':'block'});
                } 
            }
        }
    }
}


// 左右滑动事件效果
$('.paidCHeaderMasg')[0].ontouchstart=function(ev){
    var sx=ev.touches[0].pageX;    
    $('.paidCHeaderMasg')[0].ontouchmove=function(ev){
    
        var nx=ev.touches[0].pageX;    
        var x = sx-nx;        
        // 获取当前滚动部分左隐长度
        var scrollL=$('.paidCHeaderMasg')[0].scrollLeft;
        console.log(scrollL);

        $('.paidCHeaderMasg')[0].ontouchend=function(ev){
            console.log(scrollL); 
            if(x>0){
                if(scrollL>160){
                    $('.paidCHeaderMasg')[0].scrollLeft=375;
                    if(scrollL>435){
                        $('.paidCHeaderMasg')[0].scrollLeft=750;
                        if(scrollL>810){
                            $('.paidCHeaderMasg')[0].scrollLeft=1125;
                        }
                    }
                }else{
                    $('.paidCHeaderMasg')[0].scrollLeft=0;   
                }  

            }else{

                if(scrollL<965){
                    $('.paidCHeaderMasg')[0].scrollLeft=750;
                    if(scrollL<590){
                        $('.paidCHeaderMasg')[0].scrollLeft=375;
                        if(scrollL<215){
                            $('.paidCHeaderMasg')[0].scrollLeft=0;
                        }
                    }
                }else{
                    $('.paidCHeaderMasg')[0].scrollLeft=1125;                    
                }
     
            }
            if(x>0){
                if(scrollL>160){
                    $('.paidCHeaderMenu span').stop().animate({
                        'left':'1rem',
                        'width':'0.46rem'
                    }).animate({
                        'width':'0.16rem',
                        'left':'1.3rem',        
                    });
                }
                if(scrollL>435){
                    $('.paidCHeaderMenu span').stop().animate({
                        'left':'1.96rem',
                        'width':'0.46rem'
                    }).animate({
                        'width':'0.16rem',
                        'left':'2.26rem',        
                    }).stop();
                }
                if(scrollL>810){        
                    $('.paidCHeaderMenu span').stop().animate({
                        'left':'2.90rem',
                        'width':'0.46rem'
                    }).stop().animate({ 
                        'left':'3.20rem',    
                        'width':'0.16rem'
                    })
                }
            }else{
                if(scrollL<965){
                    $('.paidCHeaderMenu span').stop().animate({
                        'left':'2.26rem',
                        'width':'0.46rem'
                    }).animate({
                        'width':'0.16rem',        
                    });
                }
                if(scrollL<590){
                    $('.paidCHeaderMenu span').stop().animate({
                        'left':'1.3rem',
                        'width':'0.46rem'
                    }).stop().animate({
                        'width':'0.16rem',     
                    });
                }
                if(scrollL<215){
                    $('.paidCHeaderMenu span').stop().animate({
                        'left':'0.4rem',
                        'width':'0.46rem'
                    }).stop().animate({
                        'width':'0.16rem',     
                    });
                }
            }
        }
    }
}
