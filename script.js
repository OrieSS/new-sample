// 読み込んだらフェードアウト
$(window).load(function () {
    // 消えるタイミングはお好みで
    $('.loading').delay(3500).fadeOut(300);
    $('body').toggleClass('black');
});
// 10秒待っても読み込みが終わらない時は強制的にローディング画面をフェードアウト
function stopload(){
    $('.loading').delay(1000).fadeOut(700);
}
setTimeout('stopload()',10000);

//フェードイン
$(function(){
  $('body').fadeIn(1000);
});
$(function(){
  $('work').fadeIn(1000);
});

(function (window, $) {
    'use strict';
  
    $.fn.useSound = function (_event, _id) {
      var se = $(_id);
      this.on(_event, function(){
        se[0].currentTime = 0;
        se[0].play();
      });
      return this;
    };
  
  })(this, this.jQuery);
  
  $('.btn a').useSound('mousedown touchstart', '#sound');




  $('.hoge-link a').on('click', function() {
    var tag_id = $(this).data('id');
  
    if (isNaN(tag_id)) {
      return false;
    }
    var api_url = 'https://www.googleapis.com/books/v1/volumes?q=阿刀田高&maxResults=2&startIndex=' + tag_id;
  
    $.ajax({
      url: api_url,
      dataType: 'json',
      success: function(data) {
        array = data.items;
        $(".hogehoge").html("");
        $.each(array, function(i) {
          var thumurl = array[i].volumeInfo.imageLinks.thumbnail;
          var sslthumurl = thumurl.replace('http', 'https');
          var htmltext = "";
          htmltext = htmltext + "<article class=\"hoge\">";
          htmltext = htmltext + "<a href=\"" + array[i].saleInfo.buyLink + "\" target=\"_blank\">";
          htmltext = htmltext + "<picture>";
          htmltext = htmltext + "<img src=\"" + sslthumurl + "\" alt=\"\">";
          htmltext = htmltext + "</picture>";
          htmltext = htmltext + "<h3>" + array[i].volumeInfo.title + "</span></h3>";
          $(".hogehoge").append(htmltext);
        });
      }
    });
  });