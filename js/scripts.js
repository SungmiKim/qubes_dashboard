// 팝업
function openPop(num) {
  $(".pop_bg").fadeIn();
  $(".pop_ct" + num).fadeIn();
  if ($(".pop_ct" + num).hasClass("fixed")) {
    $("body").addClass("fix");
  }
  $(".pop_close").click(function () {
    $(".pop_bg").fadeOut();
    $(".pop_ct").fadeOut();
    $("body").removeClass("fix");
  });
}

const navtab = {
  init: function () {
    this.motab();
  },
  motab: function () {
    let mBtn = $(".ham_btn");

    // 모바일 버튼 클릭
    $(mBtn).click(function () {
      $(".snb").addClass("on");
    });
    // 화면 클릭
    $(".content").click(function () {
      $(".snb").removeClass("on");
    });
  },
};

$(document).ready(function () {
  navtab.init();
});

// $(ham_btn).click(function () {
//   $(".sub").addClass("on");
// });

//약관 펼쳐보기
$(function () {
  $(".agree_box .agree_1_label_open").on("click", function () {
    $(".agree_1_label_close").show();
  });
  $(".agree_box .agree_1_label_open").on("click", function () {
    $(".agree_1_label_open").hide();
  });
  $(".agree_box .agree_1_label_close").on("click", function () {
    $(".agree_1_label_open").show();
  });
  $(".agree_box .agree_1_label_close").on("click", function () {
    $(".agree_1_label_close").hide();
  });

  $(".input_box .agree_box .agree_1_label_open").on("click", function () {
    $(".agree_txt").slideDown();
  });
  $(".agree_box .agree_1_label_close").on("click", function () {
    $(".agree_txt").slideUp();
  });
});
