(function($){
    $(function(){ 
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal'
        });           
        // 无缝滚动函数
        function carousel(){
            if(index >= $('.indexCarouselUnit').length - 1){
                $('.indexCarouselOut').css({left:-iUnitOuterWidth * 2 + iSideWidth});
                index = 3;
            } else if(index < 1){
                $('.indexCarouselOut').css({left:-iUnitOuterWidth * ($('.indexCarouselUnit').length - 3) + iSideWidth});
                index = $('.indexCarouselUnit').length - 4;
            }           
        }
        // 向右运动函数
        function rightMove(){
            index++;
            carousel()
            $('.indexCarouselOut').stop().animate({left:-iUnitOuterWidth * index + iSideWidth},1000);
            dotActive();
        }
        // 向左运动函数
        function leftMove(){
            index--;
            carousel()
            $('.indexCarouselOut').stop().animate({left:-iUnitOuterWidth * index + iSideWidth},1000);
            dotActive();
        }
        // 底部导航变色函数
        function dotActive(){
            $('.indexCarouselDot span').removeClass('indexCarouselDotActive');
            if(index >= $('.indexCarouselUnit').length - 2){
                $('.indexCarouselDot span').eq(0).addClass('indexCarouselDotActive');
            } else{
                $('.indexCarouselDot span').eq(index - 2).addClass('indexCarouselDotActive');  
            }
        }
        // 自动向右运动
        function autoMove (){
            iTimer = setInterval(function(){
                rightMove();
            },3000);
        }
        // 初始化轮播图样式
        function initUi (){
             //获取单张图片的宽度(加margin)
             iUnitOuterWidth = $('.indexCarouselUnit:first').outerWidth(true);
            //获取单张图片的宽度(不加margin)
             iUnitWidth = $('.indexCarouselUnit:first').width();
            // 获取左侧间隙的宽度
             iSideWidth = ($('html').width() - iUnitWidth) / 2;
            //动态设置轮播图ul的宽度、初始化显示第一张图片 
            $('.indexCarouselOut').width(iUnitWidth * $('.indexCarouselUnit').length).css('left',-iUnitOuterWidth * index + iSideWidth);
        }


        // 复制第一张/第二张图片
        var oFirstUnit = $('.indexCarouselUnit:first').clone();
        var oSecondUnit = $('.indexCarouselUnit:eq(1)').clone();
        // 复制倒数第二张、最后一张图片
        var oLastSecondUnit = $('.indexCarouselUnit:eq(-2)').clone();
        var oLastUnit = $('.indexCarouselUnit:last').clone();
        // 添加第一张/第二张图片到最后
        oFirstUnit.appendTo($('.indexCarouselOut'));
        oSecondUnit.appendTo($('.indexCarouselOut'));
        // 添加倒数第二张、最后一张图片到开头
        oLastUnit.prependTo($('.indexCarouselOut'));
        oLastSecondUnit.prependTo($('.indexCarouselOut'));
        // 默认显示第一张图片
        var index = 2,iTimer = null,iUnitOuterWidth,iUnitWidth,iSideWidth;
        // 初始化轮播图样式
        initUi ();
        // 自动向右运动
        autoMove ();


        /* ---------------------------滑动事件--------------------------- */
        var isdrag = false,
            flag   = true,
            disEndX=0,
            disX,
            dir;
        function thismousedown(e) {
            event.stopPropagation();
            //debugger
            clearInterval(iTimer);
            isdrag = true;
            disX = e.touches[0].pageX;
            return false;
        }
        
        function thismousemove(e) {
            // 阻止滑动事件冒泡
            event.stopPropagation();
            if(isdrag) {
                var x = (e.touches[0].pageX - disX) / 50;
                //向右滑动
                if(x > 3) {
                    // console.log(x);
                    clearInterval(iTimer);
                    $(this).css('left',parseInt($(this).css('left')) + x);                           
                    dir = 'right';
                    flag=true;
                    return false;
                } 
                //向左滑动
                if(x < -3) {
                    if(flag){
                        // console.log(x);
                        clearInterval(iTimer);
                        $(this).css('left',parseInt($(this).css('left')) + x);
                        dir = 'left';			
                    }
                    return false;
                }     
            }
            return false;
        }
        
        function thismouseup(e) {
            event.stopPropagation();
            if(dir === 'right'){
                leftMove();
            }
            if(dir === 'left'){
                rightMove();
            }
            autoMove ();
            dir = '';
            isdrag = false;
            return false;
        };

        // 轮播图滑动效果
        $('.indexCarouselOut')[0].addEventListener('touchstart', thismousedown);
        $('.indexCarouselOut')[0].addEventListener('touchmove', thismousemove);
        $('.indexCarouselOut')[0].addEventListener('touchend', thismouseup);
        
        // 初始化课程列表、讲师列表样式
        function initTeacherList(){
            // 设置课程列表高度
            $('.irCourseListSlide').height($('.irCourseListOut').outerHeight(true));
            // 设置irCourseList的宽度为屏幕宽度的95%
            $('.irCourseList').width($('.irCourseListSlide').width() * 0.95);
            // 设置讲师列表宽高
            $('.irTeacherListSlide').height($('.irTeacherListOut').outerHeight(true));
            $('.irTeacherListOut .irCourseList').width($('.irCourseListSlide').width());
            // 设置讲师列表下最后一个占位元素的宽度
            $('.irTeacherListOut').find('.irCourseListUnit:last()').width($('.irTeacherListOut').find('.irCourseListUnit:first()').width());
            //获取讲师列表当前的left定位值
            var irTeacherListOutLeft = $('.irTeacherListOut').css('left');
            $('.irTeacherListOut').css('left',irTeacherListOutLeft);
        }
        initTeacherList();
        
        // 切换设备时自动调整课程列表宽高
        $(window).resize(function(){
            // 初始化课程列表、讲师列表样式
            initTeacherList();
            // 初始化轮播图样式
            initUi ();
        });
        
        // 课程列表滑动函数
        function courseListSlide(){
            if(dir === 'left'){
                $(this).animate({'left': -$('.irTeacherListSlide').width()});  //列表左移定位
                $(this).next('.irSlideDot').children('span').toggleClass('irSlideDotActive');
            }
            if(dir === 'right'){
                $(this).animate({'left':'0'});
                $(this).next('.irSlideDot').children('span').toggleClass('irSlideDotActive');
            }
            dir = '';
            isdrag = false;
        }

        // 课程列表滑动效果
        $('.irCourseListOut').each(function(k,v){
            v.addEventListener('touchstart', thismousedown);
            v.addEventListener('touchmove', thismousemove);
            v.addEventListener('touchend', courseListSlide);
        });

        // 阻止免费课程部分顶部课程分类列表滑动事件冒泡
        $('.ifcNav')[0].ontouchmove = function(event){
            event.stopPropagation();
        }
        
        //点击课程页面跳转到课程详情页
        function toDetail(obj,url){
            obj.addEventListener('click',function(event){
                event.stopPropagation();
                window.location.href=url;
            })
        }
        $('.ifcContentInner').each(function(k,v){
            toDetail(v,'detailFreeCourse1.html');
        });
        $('.irCourseListUnit').each(function(k,v){
            toDetail(v,'paidCourse.html');
        });
        $('.indexCarouselUnit').each(function(k,v){
            toDetail(v,'paidCourse.html');
        });
        $('.irCourseRecommendUnit').each(function(k,v){
            toDetail(v,'paidCourse.html');
        });

        /* -------------------------------搜索部分------------------------------- */
        // 点击放大镜弹出搜索界面
        $('.icon-sousuo').click(function(){
            $('.indexSearch').addClass('indexSearchSlide');
        });
        // 点击返回按钮，隐藏搜索界面
        $('.indexSearchHeadeReturn').click(function(){
            $('.indexSearch').removeClass('indexSearchSlide');
        });
        // 点击清除，清空搜索历史
        $('.indexSearchClear').click(function(){
            $(this).parents('.indexSearchHistory').hide().find('.indexSearchHistoryList').empty();
        });
        $('.indexSearchInput').on('input',function(){
            if($(this).val() !== ''){
                $('.indexSearchHistory').hide();
            } else{
                $('.indexSearchHistory').show();
            }
        })
        $('.indexSearchHistoryList li').click(function(){
            $('.indexSearchHistory').hide();
            $('.indexSearchInput').val($(this).html()).focus();
        });
        document.write('aaa');
    });
})(jQuery);