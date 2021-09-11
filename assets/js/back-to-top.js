$('#back-to-top').hide();
    $(window).on('scroll', function(){
        if($(this).scrollTop() >= 600){
            $('#back-to-top').fadeIn();
        }else {
            $('#back-to-top').fadeOut();
        }
    })
    $('#back-to-top').on('click', function(){
        $('html,body').animate({
            "scrollTop" : 0,
        },2000)
    })