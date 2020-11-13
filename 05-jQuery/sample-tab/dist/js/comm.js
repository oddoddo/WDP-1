$(function(){

    $('.tab').each(function(){

        // $(this) - 방금 내가 클릭한 .tab > .tab-nav
        // 안그러면 모든 탭 같이 움직여
        let $탭리스트 = $(this).find('.tab-nav'),
            탭링크 = $탭리스트.find('a'),
            $탭패널 = $(this).find('.tab-panel')

        $탭리스트.on('click', 'a', function(event){
            
            // 링크 클릭 기본 동작 취소
            event.preventDefault()

            let $this = $(this)
            // 만약 이미 선택된 탭이라면 (.on 가지고 있다면)
            // $(this) = $('.tab-nav a')
            if($this.parent().hasClass('on')){
                // 아무 작업도 하지 말고 처리 중지
                return
            }

            // 모든 tab의 .on 삭제
            $탭리스트.find('li').removeClass('on')
            // 방금 내가 클릭한 a태그의 엄마(li)에게 .on 붙여
            $this.parent().addClass('on')

            // 모든 패널 안보게 (hide())
            $탭패널.hide()
            // 방금 내가 클릭한 a태그의 속성값(href)을 가진 패널 표시
            // $('#work2')
            $($this.attr('href')).show()
        })

        // 첫번째 탭을 선택한 상태로...
        탭링크.eq(0).trigger('click')

    })


})