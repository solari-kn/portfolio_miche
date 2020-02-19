$(function() {
  $(".navOpen").on("click", function() {
    if ($(".header, .glHeader").hasClass("open")) {
      $(".header, .glHeader").removeClass("open");
      // openクラスを持っていた場合はメニューを閉じて、openクラスを削除
    } else {
      $(".header, .glHeader").addClass("open");
      // openクラスを持たない場合はopenクラスを付与
    }
  });
});



$(function() {
  $(".header_bg_slide, .slide-dots, .pfMain").on("click", function() {
    if ($(".header, .glHeader").hasClass("open")) {
      $(".header, .glHeader").removeClass("open");
    }
  });
});

// ヘッダーインナーの高さ
var pcHeight = 140;
var spHeight = 180;
var pcglHeight = 80;
var spglHeight = 60;


$(window).on("resize", function() {
  winW = $(window).outerWidth();
  winH = $(window).height();
  outH = $(window).outerHeight();
  scrH = screen.height;
  spH = scrH - 50;
  if (winW > 959) {
    $(".header_bg_slide").css("height", winH - pcHeight + "px");
    $(".header_nav").css("height", winH - pcHeight + "px");
    $(".glbg").css("height", outH - pcglHeight + "px");
    $(".glHeader_nav").css("height", winH - 80 + "px");
    $(".header_inner").css("height", pcHeight + "px");
  } else {
    $(".header_bg_slide").css("height", winH - spHeight + "px");
    $(".header_nav").css("height", outH + "px");
    $(".glbg").css("height", winH - 300 + "px");
    $(".glHeader_nav").css("height", outH + "px");
    $(".header_inner").css("height", spHeight + "px");
  }
});

$(function() {
  winW = $(window).outerWidth();
  winH = $(window).outerHeight();
  if (winW > 959) {
    $(".header_bg_slide").css("height", winH - pcHeight + "px");
    $(".header_nav").css("height", winH - pcHeight + "px");
    $(".glbg").css("height", winH - pcglHeight + "px");
    $(".glHeader_nav").css("height", winH - 80 + "px");
    $(".header_inner").css("height", pcHeight + "px");
  } else {
    $(".header_bg_slide").css("height", winH - spHeight + "px");
    $(".header_nav").css("height", winH + "px");
    $(".glbg").css("height", winH - 300 + "px");
    $(".glHeader_nav").css("height", winH + "px");
    $(".header_inner").css("height", spHeight + "px");
  }
});

$(window).on("scroll", function() {
  winW = $(window).outerWidth();
  scT = $(window).scrollTop();
  winH = $(window).height();
  if (scT > 0 && winW > 959) {
    $(".header_nav").addClass("scrl");
    $(".scrl").css("height", winH + "px");
  } else if (winW > 959) {
    $(".header_nav").removeClass("scrl");
    $(".header_nav").css("height", winH - pcHeight + "px");
  }
});
