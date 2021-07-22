$(function() {
  var showFlag = false;
  var topBtn = $('#button');    
  topBtn.css('bottom', '-100px');
  var showFlag = false;
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
          if (showFlag == false) {
              showFlag = true;
              topBtn.stop().animate({'bottom' : '20px'}, 200); 
          }
      } else {
          if (showFlag) {
              showFlag = false;
              topBtn.stop().animate({'bottom' : '-100px'}, 200); 
          }
      }
  });
  //スクロールしてトップ
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });

  $(".fadeIn").on("fadeIn", function (event, isInView) {
    if (isInview) {
      $(this).stop().addClass("is-show");
    }
  });

});
