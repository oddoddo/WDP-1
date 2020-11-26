$(function(){

  // 스크롤 시 .navbar 디자인 변경
  $('.navbar').each(function(){
    
    $(window).scroll(function(){
      if($(this).scrollTop() > 40){
        $('.navbar').addClass('sticky')
      }else{
        $('.navbar').removeClass('sticky')
      }
    })
    // 윈도우 스크롤 이벤트를 발생시키시오.
    // (header의 초기 디자인을 조정하기 위해)
    $(window).trigger('scroll');
  })
  


})