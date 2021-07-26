//画面遷移で音量を下げて、値を渡す
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#link_work').addEventListener('click', function(e){
      //e.preventDefault(); 
        $('#index').stop().fadeOut(600);
        $('#about').stop().fadeOut(600);
        $('#work_details').stop().fadeOut(600);
        $('#work').stop().delay(600).fadeIn(1500);
        $('#work_home').stop().delay(600).fadeIn(1500);
              //3. 値を渡して画面遷移
    });
    document.querySelector('#link_index').addEventListener('click', function(e){
      //e.preventDefault();        
        $('#work').stop().fadeOut(600);
        $('#about').stop().fadeOut(600);
        $('#index').stop().delay(600).fadeIn(1500);
              //3. 値を渡して画面遷移
    });
    document.querySelector('#link_about').addEventListener('click', function(e){
      //e.preventDefault();    
        $('#index').stop().fadeOut(600);
        $('#work').stop().fadeOut(600);
        $('#about').stop().delay(600).fadeIn(1500);
              //3. 値を渡して画面遷移
    });
    document.querySelector('#link_work1').addEventListener('click', function(e){
      //e.preventDefault();    
        $('#work_home').stop().fadeOut(600);
        $('#work2').stop().fadeOut(600);
        $('#work_details').stop().delay(600).fadeIn(1500);
        $('#work1').stop().delay(600).fadeIn(1500);
              //3. 値を渡して画面遷移
    });
    document.querySelector('#link_work2').addEventListener('click', function(e){
      //e.preventDefault();    
        $('#work_home').stop().fadeOut(600);
        $('#work1').stop().fadeOut(600);
        $('#work_details').stop().delay(600).fadeIn(1500);
        $('#work2').stop().delay(600).fadeIn(1500);
              //3. 値を渡して画面遷移
    });
  });
  function link_movie_id(){
    $('#index').stop().fadeOut(600);
    $('#work').stop().fadeOut(600);
    $('#contact').stop().fadeOut(600);
        $('#profile').stop().fadeOut(600);
        $('#lesson').stop().fadeOut(600);
        $('#movie_id').stop().delay(600).fadeIn(1500);
  }
  function link_contact(){
    $('#index').stop().fadeOut(600);
    $('#work').stop().fadeOut(600);
        $('#profile').stop().fadeOut(600);
        $('#lesson').stop().fadeOut(600);
        $('#movie_id').stop().fadeOut(600);
        $('#contact').stop().delay(600).fadeIn(1500);
  }

  function link_profile(){
        $('#index').stop().fadeOut(600);
        $('#work').stop().fadeOut(600);
        $('#contact').stop().fadeOut(600);
        $('#movie_id').stop().fadeOut(600);
        $('#lesson').stop().fadeOut(600);
        $('#profile').stop().delay(600).fadeIn(1500);
  }
  function link_index(){
    $('#profile').stop().fadeOut(600);
    $('#work').stop().fadeOut(600);
    $('#contact').stop().fadeOut(600);
    $('#movie_id').stop().fadeOut(600);
    $('#lesson').stop().fadeOut(600);
    $('#index').stop().delay(600).fadeIn(1500);
}
function link_lesson(){
  $('#profile').stop().fadeOut(600);
  $('#work').stop().fadeOut(600);
  $('#contact').stop().fadeOut(600);
  $('#movie_id').stop().fadeOut(600);
  $('#index').stop().fadeOut(600);
  $('#lesson').stop().delay(600).fadeIn(1500);
}
function link_work(){
  $('#profile').stop().fadeOut(600);
  $('#lesson').stop().fadeOut(600);
  $('#contact').stop().fadeOut(600);
  $('#movie_id').stop().fadeOut(600);
  $('#index').stop().fadeOut(600);
  $('#work').stop().delay(600).fadeIn(1500);
}



  //nav
  $(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
      $("#home_img").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
      $("#profile").toggleClass('mainblur');
      $("#lesson").toggleClass('mainblur');
    });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
      $("#home_img").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
      $("#profile").removeClass('mainblur');
      $("#lesson").removeClass('mainblur');
    });