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
  $(".header_bg_slide, .slide-dots, .header_cover, .glHeader_cover").on(
    "click",
    function() {
      if ($(".header, .glHeader").hasClass("open")) {
        $(".header, .glHeader").removeClass("open");
      }
    }
  );
});

// ヘッダーインナーの高さ
let pcHeight = 140,
  spHeight = 180,
  pcglHeight = 80,
  spglHeight = 60,
  winW = $(window).outerWidth(),
  winH = $(window).height(),
  outH = $(window).outerHeight(),
  scrH = screen.height;

$(window).on("resize", function() {
  if (winW > 959) {
    $(".header_bg_slide").css("height", winH - pcHeight + "px");
    $(".header_nav").css("height", winH - pcHeight + "px");
    $(".glbg").css("height", outH - pcglHeight + "px");
    $(".glHeader_nav").css("height", winH - 80 + "px");
    $(".glHeader_cover, .loading").css("height", winH + "px");
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
  if (winW > 959) {
    $(".header_bg_slide").css("height", outH - pcHeight + "px");
    $(".header_nav").css("height", outH - pcHeight + "px");
    $(".glbg").css("height", outH - pcglHeight + "px");
    $(".glHeader_nav").css("height", outH - 80 + "px");
    $(".glHeader_cover, .loading").css("height", outH + "px");
    $(".header_inner").css("height", pcHeight + "px");
  } else {
    $(".header_bg_slide").css("height", outH - spHeight + "px");
    $(".header_nav").css("height", outH + "px");
    $(".glbg").css("height", outH - 300 + "px");
    $(".glHeader_nav").css("height", outH + "px");
    $(".header_inner").css("height", spHeight + "px");
  }
});

$(window).on("scroll", function() {
  let scT = $(window).scrollTop();
  if (scT > 0 && winW > 959) {
    $(".header_nav, .header_cover").addClass("scrl");
    $(".scrl").css("height", winH + "px");
    // $(".header_cover").css("height", winH + "px");
  } else if (winW > 959) {
    $(".header_nav, .header_cover").removeClass("scrl");
    $(".header_nav").css("height", winH - pcHeight + "px");
  }
});

$(function() {
  let $content = $(".container"),
    $loadBg = $(".loading"),
    $loadWrap = $(".loading_wrap"),
    $slider = $("#slider"),
    $bar = $(".loading_wrap_line"),
    // imagesLoadedオブジェクトを作成して格納
    imgLoad = imagesLoaded("body"),
    // body全体の画像の枚数を格納
    imgTotal = imgLoad.images.length,
    //読み込んだ画像の枚数を格納
    imgLoaded = 0,
    //プログレスバー現在地に相当する値を格納( =画像読込進捗度)
    current = 0,
    // 1秒当たり20回の頻度で読込状況をチェック
    progressTimer = setInterval(updateProgress, 1000 / 20);

  $content.hide();
  imgLoad.on("progress", function() {
    imgLoaded++;
  });

  function updateProgress() {
    let target = (imgLoaded / imgTotal) * 100;

    current += (target - current) * 0.1;

    $bar.css({ width: current + "%" });

    if (current >= 100) {
      clearInterval(progressTimer);
      $content.show("0", function() {
        if ($slider.length) {
          $slider.slick("setPosition");
        }
        $loadWrap.fadeOut("500");
        $loadBg.animate({ right: "-100%" }, 1000, "easeInOutQuint");
      });
    }
    if (current > 99.9) current = 100;
  }
});

/*
$(function() {
  let $content = $(".container"),
    $loadBg = $(".loading"),
    $loadWrap = $(".loading_wrap"),
    $slider = $("#slider"),
    $bar = $(".loading_wrap_line"),
    // imagesLoadedオブジェクトを作成して格納
    imgLoad = $content.imagesLoaded,
    // body全体の画像の枚数を格納
    imgTotal = imgLoad().images.length,
    //読み込んだ画像の枚数を格納
    imgLoaded = 0,
    //プログレスバー現在地に相当する値を格納( =画像読込進捗度)
    current = 0,
    // 1秒当たり20回の頻度で読込状況をチェック
    progressTimer = setInterval(updateProgress, 1000 / 20);

  $content.hide();
  imgLoad().progress( function() {
    imgLoaded++;
  });

  function updateProgress() {
    let target = (imgLoaded / imgTotal) * 100;

    current += (target - current) * 0.1;

    $bar.css({ width: current + "%" });

    if (current >= 100) {
      clearInterval(progressTimer);
      $content.show("0", function() {
        if ($slider.length) {
          $slider.slick("setPosition");
        }
        $loadWrap.fadeOut("300");
        $loadBg.animate({ right: "-100%" }, 1000, "easeInOutQuint");
      });
    }
    if (current > 99.9) current = 100;
  }
}); */
/* $(function() {
  var content = $(".glContainer");
  content.hide();
  content.imagesLoaded({ background: true }, function() {
    content.delay("1000").show("0", function() {
      // slider.slick("setPosition");
      $(".loading_wrap").fadeOut("300", function() {
        $(".loading").animate({right: "-100%"},
          500,
        );
      });
    });
  });
}); */
/* function() {
        $(".wrap").fadeIn("20")
        $("#slider").slick("setPosition");
      }) */
