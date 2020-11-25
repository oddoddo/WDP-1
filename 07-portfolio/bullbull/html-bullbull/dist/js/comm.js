$(function(){

  // 스크롤 시 .navbar 디자인 변경
  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('.navbar').addClass('sticky')
    }else{
      $('.navbar').removeClass('sticky')
    }

  })



})