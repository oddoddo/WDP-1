$(function () {
    // new fullpage('#fullpage', {
    //   navigation: true,
    //   // anchors: ['main', 'technology', 'video', 'howto', 'footer'],
    //   sectionsColor: ['#fff', '#eee', '#fff', '#182952', '#101010'],
    // });

    var myFullpage = new fullpage('#fullpage', {
      // verticalCentered: true,
      navigation: true,
      anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
      menu: '#menu',
      sectionsColor: ['#fff', '#eee', '#fff', '#182952', '#101010'],
  });


     //howto
      $('.howto_area > li').click(function(event){
        event.preventDefault();

        $('.howto_imgList > li').css({
          "right":"-360px",
          "opacity":"0"
        });
      });

      $('.howto_area > li:nth-child(1)').click(function(){
  
        $('.howto_imgList > li:nth-child(1)').css({
          "right":"0",
          "opacity":"1"
        });
      });

      $('.howto_area > li:nth-child(2)').click(function(){
  
        $('.howto_imgList > li:nth-child(2)').css({
          "right":"0",
          "opacity":"1"
        });
      });

      $('.howto_area > li:nth-child(3)').click(function(){
  
        $('.howto_imgList > li:nth-child(3)').css({
          "right":"0",
          "opacity":"1"
        });
      });

      // $('.howto_btn').click(function(event){
      //   event.preventDefault()
      //   $('body').attr('class', 'fp-viewing-3')
      //   // $('#fp-nav li').eq(4).
      // })



}); /* document start */
