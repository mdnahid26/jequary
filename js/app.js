$(function(){
    var ele = $('#ele');
  $('#hide').click(function(){
      ele.hide('slow', function(){alert( 'time close')});
  })
  $('#show').click(function(){
     ele.show('fast');
  })
    $('#toggle').click(function(){
        ele.toggle(1000);
    })
    var fade = $('#fade')
    $('#fadein').click(function(){
        fade.fadeIn(2000);
    })
    $('#fadeout').click(function(){
        fade.fadeOut(2000);
    })
    $('#fadetoggle').click(function(){
        fade.fadeToggle(2000);
    })
    $('#fadeto').click(function(){
        fade.fadeTo(2000, .3);
    })

    var slide = $('#slide')

    $('#slideUp').click(function(){
        slide.slideUp(2000)
    })
    $('#slideDown').click(function(){
        slide.slideDown(2000)
    })
    $('#animate').click(function(){
        $('#animation').animate({
            width:'500px',
            height:'500px'
        },3000).show()
    })
    $('#shows').click(function(){
        $('#animation').show(1000)
    })
    $('#stopanimate').click(function(){
        $('#animation').stop().slideUp(2000).fadeOut()
    })
})