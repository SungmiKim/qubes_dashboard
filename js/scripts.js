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

$(ham_btn).click(function () {
  $(".sub").addClass("on");
});
