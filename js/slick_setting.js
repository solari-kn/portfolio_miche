$(function () {
  var slide = $("#slider")
  slide.slick({
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
