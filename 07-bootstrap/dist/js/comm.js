$(function(){

    // 메뉴 클릭시 해당 해쉬태그로 애니메이션 되면서 이동
    $('.navbar a, footer a[href="#home"]').click(function(event){
        // a링크의 기능 없애기
        event.preventDefault();

        // 만약 링크에 해쉬태그가 비어있지 않다면...
        if(this.hash !== ""){

            let hash = this.hash

            $('html, body').animate({
                scrollTop : $(hash).offset().top
            },800)
        }
    })

    // 스크롤 시 .navbar 디자인 변경
    $(window).scroll(function(){
        // 만약 40만큼만 스크롤 하면
        if($(this).scrollTop() > 40){
            $('.navbar').addClass('sticky')
        }else{
            $('.navbar').removeClass('sticky')
        }
    })

    // 스크롤시 오브젝트 애니메이션
    // 윈도우를 스크롤 했을 때
    $(window).scroll(function(){

        console.log('윈도우 스크롤 값 : ' + $(window).scrollTop())
        console.log('오브젝트의 위치값 : ' + $('.slideani').offset().top)
        
        $('.slideani').each(function(){

            let pos = $(this).offset().top,
                winscroll = $(window).scrollTop()

            // 만약 스크롤 값이 오브젝트 값보다 커질 경우
            if(pos < winscroll + 600){
                $(this).addClass('ani-top')
            }




        })

    })




    // swiper
    var swiper = new Swiper('.swiper-mainslide', {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var swiper = new Swiper('.swiper-mslide', {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });



})