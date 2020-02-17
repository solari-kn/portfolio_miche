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
  $("#slider").slick({
    customPaging: function(slider, i) {
      return $("<div>");
    },
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnHover: false,
    slidesToShow: 1,
    fade: true,
    slide: ".header_bg_slide",
    dotsClass: "slide-dots",
    zIndex: 1
  });
});

$(function() {
  $(".header_bg_slide, .slide-dots").on("click", function() {
    if ($(".header").hasClass("open")) {
      $(".header").removeClass("open");
    }
  });
});
// ヘッダーインナーの高さ
var pcHeight = 140;
var spHeight = 180;

$(window).on("resize", function() {
  winW = $(window).outerWidth();
  winH = $(window).height();
  outH = $(window).outerHeight();
  scrH = screen.height;
  spH = scrH - 50;
  if (winW > 959) {
    $(".header_bg_slide").css("height", winH - pcHeight + "px");
    $(".header_nav").css("height", winH - pcHeight + "px");
    $(".glHeader_nav").css("height", winH - 80 + "px");
    $(".header_inner").css("height", pcHeight + "px");
  } else {
    $(".header_bg_slide").css("height", winH - spHeight + "px");
    $(".header_nav").css("height", outH + "px");
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
    $(".glHeader_nav").css("height", winH - 80 + "px");
    $(".header_inner").css("height", pcHeight + "px");
  } else {
    $(".header_bg_slide").css("height", winH - spHeight + "px");
    $(".header_nav").css("height", winH + "px");
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

// もし少しでもスクロールしたらポジションをfixed 高さをスクリーンいっぱいにする