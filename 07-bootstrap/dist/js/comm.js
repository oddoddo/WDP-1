$(function(){
    // 클릭시 해당 해쉬태그로 애니메이션 되면서 이동
    $('.navbar a, footer a[href="#home"]').on('click', function (event) {
        event.preventDefault();

        if(this.hash !== ""){
            let hash = this.hash

            $('html, body').animate({
                scrollTop : $(hash).offset().top
            },900, function(){
                window.location.hash = hash;
            })

        }

    })

    // 스크롤 시 오브젝트 애니메이션
    $(window).on('scroll', function(){
        $('.slideanim').each(function(){

            let pos = $(this).offset().top
            let winTop = $(window).scrollTop()

            if(pos < winTop + 600){
                $(this).addClass('slide-ani')
            }

        })
    })

    //스크롤 시 header 디자인 변경 (.sticky)
    // pc 버전만...
    // if ($(window).width() > 620) { 
        $(window).scroll(function () {
            if ($(this).scrollTop() > 40) {
                $('.navbar').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
            }
        });
    // }
})