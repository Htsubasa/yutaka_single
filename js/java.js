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
      'height': 300,		// 高さを指定
      'speed': 50,		// スピードを指定
      'direction' : 'left',	// スライドする向きを指定
      'clone' : 2,		// 子要素のコピー数を指定
      'slidesToShow' : 4
    });
  });


$(function(){
  $('.gallery-slider-second').infiniteslide({
     'height': 300,		// 高さを指定
     'speed': 50,		// スピードを指定
     'direction' : 'right',	// スライドする向きを指定
     'clone' : 2,		// 子要素のコピー数を指定
     'slidesToShow' : 4
   });
 });



$(function(){
  $('.gallery-slider-third').infiniteslide({
     'height': 300,		// 高さを指定
     'speed': 50,		// スピードを指定
     'direction' : 'left',	// スライドする向きを指定
     'clone' : 2,		// 子要素のコピー数を指定
     'slidesToShow' : 4
   });
 });





  var window_h = $(window).height();
  //スクロールイベント
  $(window).on("scroll", function() {
    var scroll_top = $(window).scrollTop();
  
    $(".vertical-line").each(function() {
      var elem_pos = $(this).offset().top;
    　      //どのタイミングでフェードインさせるか
      if (scroll_top >= elem_pos - window_h+150) {
        $(this).addClass("fadein");
      }     });
  });


  $(window).scroll(function (){
      $('p').each(function(){
          var elemPos = $(this).offset().top,
              scroll = $(window).scrollTop(),
              windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 140){
                $(this).addClass('active');
              }
          });
  });

  $(window).scroll(function (){
    $('.material-photo,.store-photo').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + -250){
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
      // 追加したdivを塗りつぶしてから透明化アニメーション
      var curtain = $('#curtain').css({
          position: 'absolute',
          left: 0, top: 0,
          width: '100%', height: '100%',
          backgroundColor: 'black',
          opacity: 100
      });
 
      curtain.animate({
          opacity: 0
      },1500).promise().then(function(){
          curtain2.animate({
              opacity: 0
          }, 1500)
      });
  });



  $(function() {
    var height=$(".header").height();
    $(".mainvisual").css("padding-top", height );//10pxだけ余裕をもたせる
});


$(function(){
  var imgHeight = $('.mainvisual, .topvisual, .visualtop').outerHeight(); //画像の高さを取得。これがイベント発火位置になる。
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
    $('.header').delay(2800).queue(function(){
      $(this).addClass('fadein').dequeue();
    });
  });


  $(function(){
    $('.header').queue(function(){
      $(this).addClass('fadein-menu').dequeue();
    });
  });




$(function(){
  $('.mainvisual-inner').delay(1700).queue(function(){
  $(this).addClass('inneractive').dequeue();
});
});


$(function(){
  $('.topvisual-wrap, .visualtop-wrap').delay(1300).queue(function(){
  $(this).addClass('topvisualactive').dequeue();
});
});



$(function(){
  $('.mainvisual-logo').delay(600).queue(function(){
  $(this).addClass('visualfadein').dequeue();
});
});



  jQuery(function($){
    $('.contents > div').hide();
    $('.tab-menu a').click(function () {
        $('.contents > div').hide().filter(this.hash).fadeIn(1500);
        $('.tab-menu a').removeClass('active');
        $(this).addClass('active');  
        return false;
    }).filter(':eq(0)').click();
  });



$(function(){
  $('.box').delay(1500).queue(function(){
  $(this).addClass('box-fadein').dequeue();
});
});




$(window).on('scroll', function (){
  var elem = $('.border-first');
  elem.each(function () {
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();
    if (window.matchMedia( "(max-width: 650px)" ).matches) {
    if(scrollPos > elemOffset - wh + 100){
      winW = $(window).width();
      spped = 1000;
      $('.border-first').animate({
          width: '150px'
      }, spped);          }}
  });
});



$(window).on('scroll', function (){
  var elem = $('.border-second');
  elem.each(function () {
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).width();
    if (window.matchMedia( "(max-width: 650px)" ).matches) {
    if(scrollPos > elemOffset - wh + 100){
      winW = $(window).width();
      spped = 1500;
      $('.border-second').animate({
          width: '150px'
      }, spped);        }}
  });
});



$(function(){
  $(".topvisual-wrap img:not(:first-child)").hide();
  
  setInterval(function() {
    $(".topvisual-wrap img:first-child").fadeOut(1800).next("img").fadeIn(1800).end().appendTo(".topvisual-wrap");
  },4500);
});



