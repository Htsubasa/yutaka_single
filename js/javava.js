$(function(){
    $('.btn-gnavi').on('click',function(){
      var rightVal = 0;
      if($(this).hasClass('hb-open')){
        rightVal = 0;
        $(this).removeClass('hb-open');
      }else{
        $(this).addClass('hb-open');
      }
    });
});


(function($) {
    $(function () {
      $('.btn-gnavi').on('click', function() {
        $('body').toggleClass('open');
      });
    });
})(jQuery);


$(window).on('scroll', function (){
    var elem = $('.border');
    elem.each(function () {
      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
      if(scrollPos > elemOffset - wh + 100){
        winW = $(window).width();
        spped = 1000;
        $('.border').animate({
            height: '250px'
        }, spped);          }
    });
  });


$(window).on('scroll', function (){
    var elem = $('.menu-border');
    elem.each(function () {
      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
      if(scrollPos > elemOffset - wh + 100){
        winW = $(window).width();
        spped = 1000;
        $('.menu-border').animate({
            height: '650px'
        }, spped);          }
    });
  
  });

 
    $(window).on('scroll', function (){
        var elem = $('.news-border');
        elem.each(function () {
          var elemOffset = $(this).offset().top;
          var scrollPos = $(window).scrollTop();
          var wh = $(window).height();
          if(scrollPos > elemOffset - wh + 100){
            winW = $(window).width();
            spped = 1000;
            $('.news-border').animate({
                height: '450px'
            }, spped);          }
        });
      });


$(document).ready(function () {
        hsize = $(window).height();
        $(".mainvisual-inner").css("height", hsize + "px");
      });
      $(window).resize(function () {
        hsize = $(window).height();
        $(".mainvisual-inner").css("height", hsize + "px");
    });
/*mainvisual height adjustmment*/ 




$(function () {
    // bodyにdivを追加
    




    


    







$(window).scroll(function (){
    $('.en-title,.menu-title,.news-title').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('active');
            }
        });
});
});



$(window).scroll(function (){
    $('.intro-content,.menu-contain,.news-contain').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 200){
              $(this).addClass('active');
            }
        });
});

$(window).scroll(function (){
    $('.menu-contain,.news-contain').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 150){
              $(this).addClass('active');
            }
        });
});



$(window).scroll(function (){
    $('.button').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + -40){
              $(this).addClass('active');
            }
        });
});







/*pick_up_menu_jquery*/

$(function(){
     $('.gallery-slider').infiniteslide({
        'height': 800,		// 高さを指定
        'speed': 10,		// スピードを指定
        'direction' : 'left',	// スライドする向きを指定
        'clone' : 2		// 子要素のコピー数を指定
        });
    });




    var window_h = $(window).height();
    $("#wh span").text(window_h);
    //スクロールイベント
    $(window).on("scroll", function() {
      var scroll_top = $(window).scrollTop();
      $("#scroll span").text(scroll_top);
    
      $(".vertical-line").each(function() {
        var elem_pos = $(this).offset().top;
        $(this).find(".box_pos span").text(Math.floor(elem_pos));
      　
        //どのタイミングでフェードインさせるか
        if (scroll_top >= elem_pos - window_h+150) {
          $(this).addClass("fadein");
        } else {
          $(this).removeClass("fadein");
        }
      });
    });


    $(window).scroll(function (){
        $('p').each(function(){
            var elemPos = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
              if (scroll > elemPos - windowHeight + 180){
                  $(this).addClass('active');
                }
            });
    });

    $(window).scroll(function (){
      $('.material-photo,.store-photo').each(function(){
          var elemPos = $(this).offset().top,
              scroll = $(window).scrollTop(),
              windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + -30){
                $(this).addClass('active');
              }
          });
  });


    $(window).on('scroll', function (){
        var elem = $('.store-border');
        elem.each(function () {
          var elemOffset = $(this).offset().top;
          var scrollPos = $(window).scrollTop();
          var wh = $(window).height();
          if(scrollPos > elemOffset - wh + 100){
            winW = $(window).width();
            spped = 1000;
            $('.store-border').animate({
                height: '250px'
            }, spped);          }
        });
      });


    

    
      $(function () {
        // bodyにdivを追加
    $('h2').append('<div id="curtain">');
    $('.topvisual-wrap').prepend('<div id="curtain2">');
        // 追加したdivを塗りつぶしてから透明化アニメーション
        var curtain = $('#curtain').css({
            position: 'absolute',
            left: 0, top: 0,
            width: '100%', height: '100%',
            backgroundColor: 'black',
            opacity: 100
        });
        var curtain2 = $('#curtain2').css({
            position: 'absolute',
            left: 0, top: 0,
            width: '100%', height: '100%',
            backgroundColor: 'black',
            opacity: 100,
            //zIndex: -1,
        });
        curtain.animate({
            opacity: 0
        },2000).promise().then(function(){
            curtain2.animate({
                opacity: 0
            }, 2000)
        });
    });




    $(function() {
      var height=$(".header").height();
      $(".mainvisual").css("padding-top", height );//10pxだけ余裕をもたせる
  });


  $(function(){
    var imgHeight = $('.mainvisual').outerHeight(); //画像の高さを取得。これがイベント発火位置になる。
    var header = $('.header'); //ヘッダーコンテンツ
  
    $(window).on('load scroll', function(){
       if ($(window).scrollTop() < imgHeight) {
         //メインビジュアル内にいるので、クラスを外す。
         header.removeClass('header-bacground');
       }else {
         //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
         header.addClass('header-bacground');
       }
    });
  });




  $(function(){
      $('.header').delay(3200).queue(function(){
        $(this).addClass('fadein').dequeue();
      });
    });

    $(function(){
        $('.header').delay(3000).queue(function(){
          $(this).addClass('fadein-menu').dequeue();
        });
      });




$(function(){
    $('.mainvisual-inner').delay(1700).queue(function(){
    $(this).addClass('inneractive').dequeue();
});
});


$(function(){
    $('.mainvisual-logo').delay(600).queue(function(){
    $(this).addClass('visualfadein').dequeue();
});
});







