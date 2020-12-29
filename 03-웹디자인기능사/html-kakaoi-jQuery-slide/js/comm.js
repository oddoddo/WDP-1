// 준비 이벤트
$(function () {
    // 명령문

    //tab
    $(".tab > section").click(function () {
        $(".tab > section").removeClass("on")
        $(this).addClass("on")
    })

    // modal
    // 모달창 열기
    $('.col2 img').click(function () {
        $('#modal').show();
    })
    // 모달창 닫기
    // #modal button을 클릭했을 때 
    // #modal hide() 
    $('#modal button').click(function () {
        $('#modal').hide();
    })

    // slide
    let now = 1, // 현재 보여지는 이미지를 now 변수에 지정
        width = 100; // 이미지의 가로사이즈를 width 변수에 지정

    setInterval(function(){
        //if(조건){참일경우 실행문}else{거짓일 경우}
        // 첫번째 두번째 이미지일 경우
        if(now<3){
            $('.slide ul').animate({
                left : (width * now * (-1) ) + '%'
            })
            now++ // now = now + 1;
        }else{
            $('.slide ul').animate({left : 0})
            now = 1;
        }



        
    },1000) // 3초 마다 실행

    
    



})