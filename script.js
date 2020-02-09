// $functionは$(document).ready(function()...の略
// 画像を除くDOMの読み込みが終わったらfunctionを処理する

$(function() {
  $(".header").on("click", function() {
    var opcVal = 1;
    if ($(this).hasClass("open")) {
      opcVal = 0;
      $(this).removeClass("open");
      // openクラスを持っていた場合はメニューを閉じて、openクラスを削除
    } else {
      $(this).addClass("open");
      // openクラスを持たない場合はopenクラスを付与
    }
    $(".header_nav")
      .stop()
      .animate(
        {
          opacity: opcVal
        },
        300
      );
  });
});

// ヘッダーインナーの高さ
var pcHeight = 180;
var spHeight = 200;

$(window).on("resize", function() {
  winW = $(window).outerWidth();
  winH = $(window).outerHeight();
  if (winW > 767) {
    $(".header_bg").css("height", winH - pcHeight + "px");
    $(".header_nav").css("height", winH - pcHeight + "px");
    $(".header_inner").css("height", pcHeight + "px");
  } else {
    $(".header_bg").css("height", winH - spHeight + "px");
    $(".header_nav").css("height", winH - spHeight + "px");
    $(".header_inner").css("height", spHeight + "px");
  }
});

$(function() {
  winW = $(window).outerWidth();
  winH = $(window).outerHeight();
  if (winW > 767) {
    $(".header_bg").css("height", winH - pcHeight + "px");
    $(".header_nav").css("height", winH - pcHeight + "px");
    $(".header_inner").css("height", pcHeight + "px");
  } else {
    $(".header_bg").css("height", winH - spHeight + "px");
    $(".header_nav").css("height", winH - spHeight + "px");
    $(".header_inner").css("height", spHeight + "px");
  }
});

// $(window).on("resize", function() {
//   winW = $(window).outerWidth();
//   winH = $(window).height();
//   if (winW > 767) {

//   } else {
//   }
// });

// $(function() {
//   winW = $(window).outerWidth();
//   winH = $(window).height();
//   if (winW > 767) {
//   } else {
//   }
// });
