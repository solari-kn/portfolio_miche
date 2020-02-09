// $functionは$(document).ready(function()...の略
// 画像を除くDOMの読み込みが終わったらfunctionを処理する

$(function() {
  $(".header_hmg").on("click", function() {
    if ($(".header").hasClass("open")) {
      $(".header").removeClass("open");
      // openクラスを持っていた場合はメニューを閉じて、openクラスを削除
    } else {
      $(".header").addClass("open");
      // openクラスを持たない場合はopenクラスを付与
    }
  });
});

// ヘッダーインナーの高さ
var pcHeight = 180;
var spHeight = 180;

$(window).on("resize", function() {
  winW = $(window).outerWidth();
  winH = $(window).outerHeight();
  scrH = screen.height;
  spH = scrH - 50;
  if (winW > 767) {
    $(".header_bg").css("height", winH - pcHeight + "px");
    $(".header_nav").css("height", winH - pcHeight + "px");
    $(".header_inner").css("height", pcHeight + "px");
  } else {
    $(".header_bg").css("height", winH - spHeight + "px");
    $(".header_nav").css("height", winH + "px");
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
    $(".header_nav").css("height", winH + "px");
    $(".header_inner").css("height", spHeight + "px");
  }
});

// $(window).on("scroll", function() {
//   scT = $(window).scrollTop();
//   winH = $(window).height();
//   if (scT > 0) {
//     $(".header_nav").addClass("scrl");
//     $(".scrl").css("height", winH + "px");
//   } else {
//     $(".header_nav").removeClass("scrl");
//   }
// });
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

// もし少しでもスクロールしたらポジションをfixed 高さをスクリーンいっぱいにする
