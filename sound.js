var audioElem;
// let ichi;
let v;
// let s;
audioElem = new Audio();
audioElem.src = "AnyConv.com__02 DropIn [duke].mp3";
// function PlaySound(){
//     audioElem.play();
//     //現在の再生位置（秒）を表示
// 	audioElem.addEventListener("timeupdate", function(){
// 		document.getElementById("ichi").innerHTML = audioElem.currentTime;
// 	}, false);
//     ich=audioElem.currentTime;
// }
// function StopSound(){
//     audioElem.pause();
// }


// function GetIch(){
//   const hashValue = location.hash.substring(1);           //1.ハッシュ値を取得
//   const ichi = decodeURI(hashValue) ;                    //2.デコードして、
//   document.querySelector('#ichi').textContent = ichi ; 
//  audioElem.currentTime=ichi;
//  audioElem.play();
//  //現在の再生位置（秒）を表示
//  audioElem.addEventListener("timeupdate", function(){
//   document.getElementById("ichi").innerHTML = audioElem.currentTime;
// }, false);
// }

//Sound ON OFF初期画面遷移動作----------
window.addEventListener('DOMContentLoaded', function() {
  
  document.querySelector('#link_on').addEventListener('click', function(e){
    //e.preventDefault();
    document.getElementById("loading").innerHTML = ""; 
    //audio
    audioElem.loop=true;  
    audioElem.play();
    document.getElementById("v").innerHTML = audioElem.volume;
    //video
    document.getElementById("moving").classList.add("show");
    var video=document.getElementById("moving");
    video.play();
    video.addEventListener('ended',function(){
      document.getElementById("moving_show").innerHTML = "";
      $('body').removeClass('black');
      $('body').toggleClass('blue');  
      $('#index').delay(100).fadeIn(1500);
     $('#navi').delay(100).fadeIn(1500);
     $('#bt').delay(100).fadeIn(1500);
    })
  });
  document.querySelector('#link_off').addEventListener('click', function(e){
    //e.preventDefault();
    document.getElementById("loading").innerHTML = ""; 
    //audio
    audioElem.volume=0;
    audioElem.loop=true; 
    audioElem.play();
    document.getElementById("v").innerHTML = audioElem.volume;
    //video 
    document.getElementById("moving").classList.add("show");
   var video=document.getElementById("moving");
   video.play();
   video.addEventListener('ended',function(){
     document.getElementById("moving_show").innerHTML = ""; 
     $('body').removeClass('black'); 
     $('body').toggleClass('blue'); 
     $('#index').delay(100).fadeIn(1500);
     $('#navi').delay(100).fadeIn(1500);
     $('#bt').delay(100).fadeIn(1500);
   })          
  });
});


//画面遷移で音量を下げて、値を渡す
// window.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('#link').addEventListener('click', function(e){
//     //e.preventDefault();
//     ichi=parseInt(document.getElementById("ichi").innerHTML);
//     s=parseInt(document.getElementById("s").innerHTML);
//     if(s==1){
//       fadeout();
//     }
//     //現在のvolumeを表示
// audioElem.addEventListener("timeupdate", function(){
//   document.getElementById("v").innerHTML = audioElem.volume;
// }, false);
// v=parseInt(document.getElementById("v").innerHTML);
//     location.assign(`index.html?ichi=${ichi}&s=${s}&v=${audioElem.volume}`);              //3. 値を渡して画面遷移
//   });
// });

// //画面遷移後に値を取得して、音の処理をする
// function GetParam(){
//   // URLのパラメータを取得
// var urlParam = location.search.substring(1);
// // URLにパラメータが存在する場合
// if(urlParam) {
//   // 「&」が含まれている場合は「&」で分割
//   var param = urlParam.split('&');
//   // パラメータを格納する用の配列を用意
//   var paramArray = [];
//   // 用意した配列にパラメータを格納
//   for (i = 0; i < param.length; i++) {
//     var paramItem = param[i].split('=');
//     paramArray[paramItem[0]] = paramItem[1];
//   }
//   const ichi = parseInt(paramArray.ichi) ;
//   const s = parseInt(paramArray.s) ;
//   const v = parseInt(paramArray.v) ;                    
//   document.querySelector('#ichi').textContent = ichi ;
//   document.querySelector('#s').textContent = s ; 
//   document.querySelector('#v').textContent = v ;  
// //音の処理をする
//     audioElem.currentTime=ichi;
//     audioElem.volume=parseInt(document.getElementById("v").innerHTML);
//     audioElem.play();
//   if(s==1){
//     fadein();
//   }else if(s==0){
//     audioElem.volume=0;
//   }
//  //現在の再生位置（秒）を表示
//  audioElem.addEventListener("timeupdate", function(){
//   document.getElementById("ichi").innerHTML = audioElem.currentTime;
// }, false);
// //現在のvolumeを表示
// audioElem.addEventListener("timeupdate", function(){
//   document.getElementById("v").innerHTML = audioElem.volume;
// }, false);
// }
// }
//フェードインとフェードアウト関数-------
function fadein(){
  var vl  =audioElem.volume;
   //現在のvolumeを表示
 document.getElementById("v").innerHTML = audioElem.volume;
  if (vl < 1.0)
  {
    audioElem.volume = Math.ceil((vl+0.1)*10)/10;
    setTimeout("fadein()",100);
  }
}
function fadeout()
{
  var vl = audioElem.volume;
   //現在のvolumeを表示
 document.getElementById("v").innerHTML = audioElem.volume;
  if (vl > 0)
  {
    audioElem.volume = Math.floor((vl-0.1)*10)/10;
    setTimeout("fadeout()",100);
  }
}

//Sound ON OFFコントローラー-------
function VolumeControl(){
  v=parseInt(document.getElementById("v").innerHTML);
//音の処理をする
  if(v==0){
    fadein();
  }else if(v==1){
    //うるさい！
    fadeout();
  }    

}