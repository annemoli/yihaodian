//jquery 
$(function(){
    var num01 = 0; //banner02 轮播图    
    var timer01 = null; //banner02
    var myBgs = ['#001A49','#402625','#BAD5EA','#0A5DBD','#390D42','#DFDBCF','#1A3E72','#F9D4C4']; //banner02的背景色

    //content 部分
    num03 = 0;//con1
    num04 = 0;//con1
    num05 = 0;//con2
    num06 = 0;//con2  
    num07 = 0;//con3  
    num08 = 0;//con3
    num09 = 0;//con4 
    num010 = 0;//con4 
    num011 = 0;//con5  
    num012 = 0;//con5
    num013 = 0;//con6
    num014 = 0;//con6
    num015 = 0;//con7
    num016 = 0;//con7
    num017 = 0;//con8
    num018 = 0;//con8
    num019 = 0;//con7
    var timer02 = null;//con
    var timer03 = null;//con
    var timer04 = null;//con
    var timer05 = null;//con
    var timer06 = null;//con
    var timer07 = null;//con
    var timer08 = null;//con
    var timer09 = null;//con
    var timer010 = null;//con
    //head_nav
    //注册
    $('.left_1').hover(function(){
        //鼠标移入
        $(this).children('.none').css('display','block');
        $(this).children('.login').css('background-image', 'url(img/arrow1.png)');        
    },function(){
        //鼠标移出
        $(this).children('.none').css('display','none');   
        $(this).children('.login').css('background-image','url(img/arrow.png)');         
    }) 
    //城市
    $('.left_2').hover(function() {
        //鼠标移入
        $(this).children('p').children('a').css({'background-position':'-255px -79px','border-bottom':'none'});
        $(this).children('.none').css('display', 'block');
    }, function() {
        //鼠标移出
        $(this).children('p').children('a').css({'border-bottom':'1px solid #CCC','background-position':'-255px 7px'});
        $(this).children('.none').css('display','none');
    });
    //banner 01
    $('.banner button').click(function(event) {
        if ($('.banner button').html() == '展开') {
            $('.banner .small').stop().animate({'top':'300px'}, 500);
            $('.banner .big').stop().slideDown(500);
            $(this).html('收起');
            $(this).parent().stop().animate({'height':'300px'}, 500);
        } else{
            $('.banner .small').stop().animate({'top':'0'}, 500);
            $('.banner .big').stop().slideUp(500);
            $(this).html('展开');
            $(this).parent().stop().animate({'height':'60px'}, 500);
        };
    });
    //banner02 轮播图
    //自定义函数 
    function myFn1(){
        num01 ++;
        if (num01 > 7) {
            num01 = 0;
        };
        $('.bn02 .center ul li').eq(num01).stop().show().siblings().hide();
        $('.bn02 .center ol li').eq(num01).addClass('red').siblings().removeClass('red');
        $('.bn_wrap02_1').stop().fadeOut(0).stop().fadeIn(500);
        $('.bn_wrap02_1').css('background',myBgs[num01]);
    }
    //给banner所在的盒子添加鼠标事件 鼠标移上:显示动画两侧的箭头;  鼠标移出:隐藏动画两侧的箭头  
    $('.bn02 .center').hover(function() {   
         clearInterval(timer01);
         $('.bn02 .center span').css('display', 'block');
    }, function() {       
         timer01 = setInterval(myFn1, 3000);
         $('.bn02 .center span').css('display', 'none');
    });
    //开启定时器
    timer01 = setInterval(function(){
        myFn1();
    },3000); 
     //给小方块添加点击事件 
     $('.bn02 .center ol li').click(function() {
         $(this).addClass('red').siblings().removeClass('red');
         num01 = $(this).index();
         $('.bn02 .center ul li').eq(num01).stop().fadeIn(500).siblings().stop().fadeOut(0);
         $('.bn_wrap02_1').stop().fadeOut(0).stop().fadeIn(500);
         $('.bn_wrap02_1').css('background', myBgs[num01]);
    })
    //鼠标移上箭头
    $('.bn02 .center span').hover(function() {
         $(this).css('opacity','0.9');
    }, function() {
         $(this).css('opacity','0.6');
    });
    //点击箭头切换图片
    //右
    $('.bn02 .center .sp02').click(function(event) {
        myFn1(); 
    });
    //左
    $('.bn02 .center .sp01').click(function(event) {
        num01--;
        if(num01 < 0){
            num01 = 7;            
        }
        $('.bn02 .center ul li').eq(num01).stop().show().siblings().hide();
        $('.bn02 .center ol li').eq(num01).addClass('red').siblings().removeClass('red');
        $('.bn_wrap02_1').stop().fadeOut(0).stop().fadeIn(500);
        $('.bn_wrap02_1').css('background',myBgs[num01]);
    });
    //给右侧盒子添加鼠标滑过事件
    $('.bn_wrap02 .right .box03 li').hover(function() {
        $(this).addClass('current').siblings().removeClass('current');
        $('.bn_wrap02 .right .img a').eq($(this).index()).children().show();
        $('.bn_wrap02 .right .img a').eq($(this).index()).siblings().children().hide();
    })

    //con1-8里面的小轮播图
    $('.con01 .box .li02 ul').append($('.con01 .box .li02 ul li:first').clone(true));
    $('.con02 .box .li02 ul').append($('.con02 .box .li02 ul li:first').clone(true));
    $('.con03 .box .li02 ul').append($('.con03 .box .li02 ul li:first').clone(true));
    $('.con04 .box .li02 ul').append($('.con04 .box .li02 ul li:first').clone(true));
    $('.con05 .box .li02 ul').append($('.con05 .box .li02 ul li:first').clone(true));
    $('.con06 .box .li02 ul').append($('.con06 .box .li02 ul li:first').clone(true));
    $('.con07 .box .li02 ul').append($('.con07 .box .li02 ul li:first').clone(true));
    $('.con08 .box .li02 ul').append($('.con08 .box .li02 ul li:first').clone(true));
    //自定义的函数
    function myfn1(){
        num03++;
        if(num03 > 2){
            num03 = 0;
        }   
        num04++;
        if(num04 > 3){
            num04 = 1;
            $('.con01 .box .li02 ul').css('left','0');
        }
        var move = num04 * -330;
        $('.con01 .box .li02 ul').stop().animate({'left':move+'px'},500);
        $('.con01 .box .li02 ol li').eq(num03).children().addClass('block');
        $('.con01 .box .li02 ol li').eq(num03).siblings().children().removeClass('block');
        $('.con01 .box .li02 ol li').eq(num03).children('.red').css('width','0').stop().animate({'width':'30px'},3000);       
    }
     function myfn2(){
        num05++;
        if(num05 > 2){
            num05 = 0;
        }   
        num06++;
        if(num06 > 3){
            num06 = 1;
            $('.con02 .box .li02 ul').css('left','0');
        }
        var move = num06 * -330;
        $('.con02 .box .li02 ul').stop().animate({'left':move+'px'},500);
        $('.con02 .box .li02 ol li').eq(num05).children().addClass('block');
        $('.con02 .box .li02 ol li').eq(num05).siblings().children().removeClass('block');
        $('.con02 .box .li02 ol li').eq(num05).children('.red').css('width','0').stop().animate({'width':'30px'},4000);
    }
    function myfn3(){
        num07++;
        if(num07 > 2){
            num07 = 0;
        }   
        num08++;
        if(num08 > 3){
            num08 = 1;
            $('.con01 .box .li02 ul').css('left','0');
        }
        var move = num08 * -330;
        $('.con03 .box .li02 ul').stop().animate({'left':move+'px'},500);
        $('.con03 .box .li02 ol li').eq(num07).children().addClass('block');
        $('.con03 .box .li02 ol li').eq(num07).siblings().children().removeClass('block');
        $('.con03 .box .li02 ol li').eq(num07).children('.red').css('width','0').stop().animate({'width':'30px'},3000);       
    }
    function myfn4(){
        num09++;
        if(num09 > 2){
            num09 = 0;
        }   
        num010++;
        if(num010 > 3){
            num010 = 1;
            $('.con01 .box .li02 ul').css('left','0');
        }
        var move = num010 * -330;
        $('.con04 .box .li02 ul').stop().animate({'left':move+'px'},500);
        $('.con04 .box .li02 ol li').eq(num09).children().addClass('block');
        $('.con04 .box .li02 ol li').eq(num09).siblings().children().removeClass('block');
        $('.con04 .box .li02 ol li').eq(num09).children('.red').css('width','0').stop().animate({'width':'30px'},4000);       
    }
    function myfn5(){
        num011++;
        if(num011 > 2){
            num011 = 0;
        }   
        num012++;
        if(num012 > 3){
            num012 = 1;
            $('.con01 .box .li02 ul').css('left','0');
        }
        var move = num012 * -330;
        $('.con05 .box .li02 ul').stop().animate({'left':move+'px'},500);
        $('.con05 .box .li02 ol li').eq(num011).children().addClass('block');
        $('.con05 .box .li02 ol li').eq(num011).siblings().children().removeClass('block');
        $('.con05 .box .li02 ol li').eq(num011).children('.red').css('width','0').stop().animate({'width':'30px'},3000);       
    }
    function myfn6(){
        num013++;
        if(num013 > 2){
            num013 = 0;
        }   
        num014++;
        if(num014 > 3){
            num014 = 1;
            $('.con01 .box .li02 ul').css('left','0');
        }
        var move = num014 * -330;
        $('.con06 .box .li02 ul').stop().animate({'left':move+'px'},500);
        $('.con06 .box .li02 ol li').eq(num013).children().addClass('block');
        $('.con06 .box .li02 ol li').eq(num013).siblings().children().removeClass('block');
        $('.con06 .box .li02 ol li').eq(num013).children('.red').css('width','0').stop().animate({'width':'30px'},4000);       
    }
    function myfn7(){
        num015++;
        if(num015 > 2){
            num015 = 0;
        }   
        num016++;
        if(num016 > 3){
            num016 = 1;
            $('.con01 .box .li02 ul').css('left','0');
        }
        var move = num016 * -330;
        $('.con07 .box .li02 ul').stop().animate({'left':move+'px'},500);
        $('.con07 .box .li02 ol li').eq(num015).children().addClass('block');
        $('.con07 .box .li02 ol li').eq(num015).siblings().children().removeClass('block');
        $('.con07 .box .li02 ol li').eq(num015).children('.red').css('width','0').stop().animate({'width':'30px'},3000);       
    }
    function myfn8(){
        num017++;
        if(num017 > 2){
            num017 = 0;
        }   
        num018++;
        if(num018 > 3){
            num018 = 1;
            $('.con01 .box .li02 ul').css('left','0');
        }
        var move = num018 * -330;
        $('.con08 .box .li02 ul').stop().animate({'left':move+'px'},500);
        $('.con08 .box .li02 ol li').eq(num017).children().addClass('block');
        $('.con08 .box .li02 ol li').eq(num017).siblings().children().removeClass('block');
        $('.con08 .box .li02 ol li').eq(num017).children('.red').css('width','0').stop().animate({'width':'30px'},4000);       
    }
    //让第一个ol li的红盒子滑动
    $('.con01 .box .li02 ol li').eq(0).children('.red').css('width','0').stop().animate({'width':'30px'},3000);
    $('.con02 .box .li02 ol li').eq(0).children('.red').css('width','0').stop().animate({'width':'30px'},4000);
    $('.con03 .box .li02 ol li').eq(0).children('.red').css('width','0').stop().animate({'width':'30px'},3000);
    $('.con04 .box .li02 ol li').eq(0).children('.red').css('width','0').stop().animate({'width':'30px'},4000);
    $('.con05 .box .li02 ol li').eq(0).children('.red').css('width','0').stop().animate({'width':'30px'},3000);
    $('.con06 .box .li02 ol li').eq(0).children('.red').css('width','0').stop().animate({'width':'30px'},4000);
    $('.con07 .box .li02 ol li').eq(0).children('.red').css('width','0').stop().animate({'width':'30px'},3000);
    $('.con08 .box .li02 ol li').eq(0).children('.red').css('width','0').stop().animate({'width':'30px'},4000);
    //开启定时器
    timer02 = setInterval(myfn1,3000)
    timer03 = setInterval(myfn2,4000)
    timer04 = setInterval(myfn3,3000)
    timer05 = setInterval(myfn4,4000)
    timer06 = setInterval(myfn5,3000)
    timer07 = setInterval(myfn6,4000)
    timer08 = setInterval(myfn7,3000)
    timer09 = setInterval(myfn8,4000)
    //鼠标移上大盒子
    $('.con01 .box .li02').hover(function() {
        clearInterval(timer02);
        $('.con01 .box .li02 ol li').eq(num03).children('.red').css('width','0').stop().animate({'width':'30px'},0);
    }, function() {
        timer02 = setInterval(myfn1,3000)
    });
    $('.con02 .box .li02').hover(function() {
        clearInterval(timer03);
        $('.con02 .box .li02 ol li').eq(num05).children('.red').css('width','0').stop().animate({'width':'30px'},0);
    }, function() {
        timer03 = setInterval(myfn2,4000)
    });
    $('.con03 .box .li02').hover(function() {
        clearInterval(timer04);
        $('.con03 .box .li02 ol li').eq(num07).children('.red').css('width','0').stop().animate({'width':'30px'},0);
    }, function() {
        timer04 = setInterval(myfn3,3000)
    });
    $('.con04 .box .li02 ul').hover(function() {
        clearInterval(timer05);
        $('.con04 .box .li02 ol li').eq(num09).children('.red').css('width','0').stop().animate({'width':'30px'},0);
    }, function() {
        timer05 = setInterval(myfn4,4000)
    });
    $('.con05 .box .li02').hover(function() {
        clearInterval(timer06);
        $('.con05 .box .li02 ol li').eq(num011).children('.red').css('width','0').stop().animate({'width':'30px'},0);
    }, function() {
        timer06 = setInterval(myfn5,3000)
    });
    $('.con06 .box .li02').hover(function() {
        clearInterval(timer07);
        $('.con06 .box .li02 ol li').eq(num013).children('.red').css('width','0').stop().animate({'width':'30px'},0);
    }, function() {
        timer07 = setInterval(myfn6,4000)
    });
    $('.con07 .box .li02 ul').hover(function() {
        clearInterval(timer08);
        $('.con07 .box .li02 ol li').eq(num015).children('.red').css('width','0').stop().animate({'width':'30px'},0);
    }, function() {
        timer08 = setInterval(myfn7,3000)
    });
    $('.con08 .box .li02 ul').hover(function() {
        clearInterval(timer09);
        $('.con08 .box .li02 ol li').eq(num017).children('.red').css('width','0').stop().animate({'width':'30px'},0);
    }, function() {
        timer09 = setInterval(myfn8,4000)
    });
    //鼠标滑过ol li
    $('.con01 .box .li02 ol li').hover(function() {
        num03 = $(this).index();
        $(this).children().addClass('block');
        $(this).siblings().children().removeClass('block');
        num04 = $(this).index();
        var move = num04 * -330;
        $(this).parent().prev().stop().animate({'left':move+'px'},500);
    });
    $('.con02 .box .li02 ol li').hover(function() {
        num05 = $(this).index();
        $(this).children().addClass('block');
        $(this).siblings().children().removeClass('block');
        num06 = $(this).index();
        var move = num06 * -330;
        $(this).parent().prev().stop().animate({'left':move+'px'},500);
    });
    $('.con03 .box .li02 ol li').hover(function() {
        num07 = $(this).index();
        $(this).children().addClass('block');
        $(this).siblings().children().removeClass('block');
        num08 = $(this).index();
        var move = num08 * -330;
        $(this).parent().prev().stop().animate({'left':move+'px'},500);
    });
    $('.con04 .box .li02 ol li').hover(function() {
        num09 = $(this).index();
        $(this).children().addClass('block');
        $(this).siblings().children().removeClass('block');
        num010 = $(this).index();
        var move = num010 * -330;
        $(this).parent().prev().stop().animate({'left':move+'px'},500);
    });
    $('.con05 .box .li02 ol li').hover(function() {
        num011 = $(this).index();
        $(this).children().addClass('block');
        $(this).siblings().children().removeClass('block');
        num012 = $(this).index();
        var move = num012 * -330;
        $(this).parent().prev().stop().animate({'left':move+'px'},500);
    });
    $('.con06 .box .li02 ol li').hover(function() {
        num013 = $(this).index();
        $(this).children().addClass('block');
        $(this).siblings().children().removeClass('block');
        num014 = $(this).index();
        var move = num014 * -330;
        $(this).parent().prev().stop().animate({'left':move+'px'},500);
    });
    $('.con07 .box .li02 ol li').hover(function() {
        num015 = $(this).index();
        $(this).children().addClass('block');
        $(this).siblings().children().removeClass('block');
        num016 = $(this).index();
        var move = num016 * -330;
        $(this).parent().prev().stop().animate({'left':move+'px'},500);
    });
    $('.con08 .box .li02 ol li').hover(function() {
        num017 = $(this).index();
        $(this).children().addClass('block');
        $(this).siblings().children().removeClass('block');
        num018 = $(this).index();
        var move = num018 * -330;
        $(this).parent().prev().stop().animate({'left':move+'px'},500);
    });
    //鼠标滑过图片时图片透明度变化
    $('.con00 img,.jrbt img').mouseover(function() {
        $(this).stop().fadeTo(0,0.8).stop().fadeTo(1000,1);
    });

    //内容7里面的品牌轮播
    //右
    $('.con007 .pinpai .span02').click(function(event) {
        num019++;
        if(num019>2){
            num019 = 0;
            $('.con007 .pinpai #mydiv ul').css('left','0');
        }
        var move = num019 * -100;
        $('.con007 .pinpai #mydiv ul').stop().animate({'left':move+'px'},500);
    });   
    //左
    $('.con007 .pinpai .span01').click(function(event) {
        num019--;
        if(num019 < 0){
            num019 = 1;
            $('.con007 .pinpai #mydiv ul').css('left','-200px');
        }
        var move = num019 * -100;
        $('.con007 .pinpai #mydiv ul').stop().animate({'left':move+'px'},500);
    });
    //内容10中鼠标滑过li事件
    $('.con010 h2 ul li').hover(function() {
        var mythis = $(this);
        timer010 = setInterval(function(){
            mythis.addClass('color').siblings().removeClass('color');
            $('.con010 div ul').eq(mythis.index()).fadeIn(300).siblings().hide();
            var move = mythis.index() * 68 + 75;
            $('.con010 h2').css('background-position',move+'px 49px')
        }, 500)
    }, function() {
        clearInterval(timer010);
    });
    //通过节点添加span
    var myTag = $('<span><i></i>还剩两天</span>');
    $('.con010 div ul li').append(myTag);
    //添加hover事件
    $('.con010 div ul li').hover(function() {
        $(this).children('span').stop().animate({'bottom':'0'}, 500);
    }, function() {
        $(this).children('span').stop().animate({'bottom':'-30px'}, 500);
    });

    //侧边栏  滚动条事件
    $(window).scroll(function(event) {
        //侧边栏的整体显示与隐藏
        if($(window).scrollTop() > 1){
            $('.cbl').show();
        }else{
            $('.cbl').hide();
        }
        //鼠标滚到内容区域时相对应的icon显示文字
        //内容1（进口 海购）
        if($(window).scrollTop() > 1261){
            $('.cbl li').eq(0).children('.p01').hide();
        }else if($(window).scrollTop() > 850){
            $('.cbl li').eq(0).children('.p01').show();
        }else{
           $('.cbl li').eq(0).children('.p01').hide(); 
        }
        //内容2（活色 生鲜）
        if($(window).scrollTop() > 1678){
            $('.cbl li').eq(1).children('.p01').hide();
        }else if($(window).scrollTop() > 1264){
            $('.cbl li').eq(1).children('.p01').show();
        }else{
           $('.cbl li').eq(1).children('.p01').hide(); 
        }
        //内容3（食品 饮料）
        if($(window).scrollTop() > 2092){
            $('.cbl li').eq(2).children('.p01').hide();
        }else if($(window).scrollTop() > 1678){
            $('.cbl li').eq(2).children('.p01').show();
        }else {
            $('.cbl li').eq(2).children('.p01').hide(); 
        };
        //内容4（个护 厨卫）
        if($(window).scrollTop() > 2686){
            $('.cbl li').eq(3).children('.p01').hide();
        }else if($(window).scrollTop() > 2092){
            $('.cbl li').eq(3).children('.p01').show();
        }else {
            $('.cbl li').eq(3).children('.p01').hide(); 
        };
        //内容5（母婴 玩具）
        if($(window).scrollTop() > 3100){
            $('.cbl li').eq(4).children('.p01').hide();
        }else if($(window).scrollTop() > 2686){
            $('.cbl li').eq(4).children('.p01').show();
        }else {
            $('.cbl li').eq(4).children('.p01').hide(); 
        };
        //内容6（精品 家具）
        if($(window).scrollTop() > 3514){
            $('.cbl li').eq(5).children('.p01').hide();
        }else if($(window).scrollTop() > 3100){
            $('.cbl li').eq(5).children('.p01').show();
        }else {
            $('.cbl li').eq(5).children('.p01').hide(); 
        };
        //内容7（流行 百货）
        if($(window).scrollTop() > 4108){
            $('.cbl li').eq(6).children('.p01').hide();
        }else if($(window).scrollTop() > 3514){
            $('.cbl li').eq(6).children('.p01').show();
        }else {
            $('.cbl li').eq(6).children('.p01').hide(); 
        };
        //内容8（手机 家电）
        if($(window).scrollTop() > 4702){
            $('.cbl li').eq(7).children('.p01').hide();
        }else if($(window).scrollTop() > 4108){
            $('.cbl li').eq(7).children('.p01').show();
        }else {
            $('.cbl li').eq(7).children('.p01').hide(); 
        };
        //内容9（团购）
        if($(window).scrollTop() > 5116){
            $('.cbl li').eq(8).children('.p01').hide();
        }else if($(window).scrollTop() > 4702){
            $('.cbl li').eq(8).children('.p01').show();
        }else {
            $('.cbl li').eq(8).children('.p01').hide(); 
        };
        //内容10（闪购
        if($(window).scrollTop() > 5116){
            $('.cbl li').eq(9).children('.p01').show();
        }else {
            $('.cbl li').eq(9).children('.p01').hide(); 
        };
        //鼠标移上侧边栏icon显示文字
        $('.cbl li').hover(function() {
            $(this).children('.p02').addClass('block');
            $(this).siblings().children('.p02').removeClass('block');
        }, function() {
            $(this).children('.p02').removeClass('block');
        });
        //鼠标点击侧边栏icon让页面显示相对应的内容
        $('.cbl li').eq(0).click(function(event) {
            $('html,body').stop().animate({'scrollTop':'1100px'},500)
        });
        $('.cbl li').eq(1).click(function(event) {
            $('html,body').stop().animate({'scrollTop':'1514px'},500);
        });
        $('.cbl li').eq(2).click(function(event) {
            $('html,body').stop().animate({'scrollTop':'1928px'},500);
        });
        $('.cbl li').eq(3).click(function(event) {
            $('html,body').stop().animate({'scrollTop':'2342px'},500);
        });
        $('.cbl li').eq(4).click(function(event) {
            $('html,body').stop().animate({'scrollTop':'2936px'},500);
        });
        $('.cbl li').eq(5).click(function(event) {
            $('html,body').stop().animate({'scrollTop':'3350px'},500);
        });
        $('.cbl li').eq(6).click(function(event) {
            $('html,body').stop().animate({'scrollTop':'3764px'},500);
        });
        $('.cbl li').eq(7).click(function(event) {
            $('html,body').stop().animate({'scrollTop':'4358px'},500);
        });
        $('.cbl li').eq(8).click(function(event) {
            $('html,body').stop().animate({'scrollTop':'4952px'},500);
        });
        $('.cbl li').eq(9).click(function(event) {
            $('html,body').stop().animate({'scrollTop':'5366px'},500);
        });
        $('.cbl li').eq(10).click(function(e) {
            $('html,body').stop().animate({'scrollTop':'0px'},500);
        });
    })

})

    