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

  // prizes click event
  // $('.lst-prize').each(function(){

    // .lst-prize 첫번째 li에 .on 추가
  //   $('.lst-prize > li:first-child').addClass('on')

  //   // .lst-prize 두번째 li를 클릭했을 때... 기능을 넣어줘...
  //   $('.lst-prize > li').eq(1).click(function(){
  //     //.col-img img의 속성값 변경
  //     $('.col-img img').attr('src','./images/img-jackpots1.gif')
  //     // .lst-prize > li 의 .on 삭제
  //     $('.lst-prize > li').removeClass('on')
  //     // 방금 내가 클릭한 li에 .on 추가
  //     $(this).addClass('on')
  //   })

  $('.lst-prize').each(function(){
    // 첫번째 버튼 활성화
    let num = 0

    $('.lst-prize li').eq(num).addClass('on')
    $('.col-img img').attr('src', './images/img-jackpots' + num + '.gif')

    // li를 클릭했을 때
    $('.lst-prize li').click(function(){
      // 만약 .on를 가지고 있다면...
      // if($(this).hasClass('on')){
        $('.lst-prize li').removeClass('on')
      // }

      let index = $('.lst-prize li').index(this)

      $('.lst-prize li').eq(index).addClass('on')
      $('.col-img img').attr('src', './images/img-jackpots' + index + '.gif')

    })
  })

  // count
  $(".counter").countimator();

})