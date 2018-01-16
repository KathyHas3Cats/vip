(function($){
    $(function(){
        // 点击选中单个商品
        $('.checkOne').click(function(){
            $(this).toggleClass('checked');            
            if($('.cartContentGoodsList li .checked').length === $('.cartContentGoodsList li .checkbox').length){
                $('.checkAll').addClass('checked');  // 如果购物车中的商品全部选中结算栏中的全选按钮选中
            } else{
                $('.checkAll').removeClass('checked');  //否则取消结算栏中的全选按钮选中状态
            }
            // 计算合计
            totalPrice ();
        });
        // 点击结算栏中的全选按钮
        $('.checkAll').click(function(){
            if($(this).hasClass('checked')){  //如果购物车中的商品没有全部选中
                $('.checkbox').removeClass('checked');  //取消结算栏中的全选按钮选中状态
            } else{
                $('.checkbox').addClass('checked');  //否则结算栏中的全选按钮选中
            }
            // 计算合计
            totalPrice ();
        });

        // 计算合计函数
        var allPrice;
        function totalPrice (){
            allPrice = 0;  //设置合计为0
            // 获取已选中商品的价格总和
            $('.checkOne.checked').each(function(k,v){
                allPrice += parseInt($(v).nextAll('.cartContentGoodsListLiThree').children('span').html().replace(/￥/,''));
            });
            // 将合计添加到页面中
            $('.cartFooterTwo').html('合计：￥' + allPrice + '.00');
        }
    });
})(jQuery);