// $functionは$(document).ready(function()...の略
// 画像を除くDOMの読み込みが終わったらfunctionを処理する

$(function() {
  $(".btn-gnavi").on("click", function() {
    var rightVal = 0;
    if ($(this).hasClass("open")) {
      rightVal = -300;
      $(this).removeClass("open");
      // openクラスを持っていた場合はメニューを閉じて、openクラスを削除
    } else {
      $(this).addClass("open");
      // openクラスを持たない場合はopenクラスを付与
    }
    $("#global-navi")
      .stop()
      .animate(
        {
          right: rightVal
        },
        200
      );
  });
});

$(window).on("resize", function () {
  winW = $(window).width();
  winH = $(window).height();
  if (winW > 767) {
    $(".header_bg").css("height", winH * 0.82 + "px");
  } else {
    $(".header_bg").css("height", winH * 0.70 + "px");
  }
});

$(function () {
  winW = $(window).width();
  winH = $(window).height();
  if (winW > 767) {
    $(".header_bg").css("height", winH * 0.82 + "px");
  } else {
    $(".header_bg").css("height", winH * 0.70 + "px");
  }
});

$(window).on("resize", function() {
  winW = $(window).width();
  winH = $(window).height();
  if (winW > 767) {
    $(".header_inner").css("height", winH * 0.18 + "px");
  } else {
    $(".header_inner").css("height", winH * 0.3 + "px");
  }
});

$(function() {
  winW = $(window).width();
  winH = $(window).height();
  if (winW > 767) {
    $(".header_inner").css("height", winH * 0.18 + "px");
  } else {
    $(".header_inner").css("height", winH * 0.3 + "px");
  }
});
