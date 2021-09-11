$(document).ready(function() {
    // menu-list
    $('.menu-list-title_block').on('click', function() {
        $(this).children('.menu-list-title_icon').children('.plus').toggle();
        $(this).children('.menu-list-title_icon').children('.minus').toggle();
        $(this).siblings().slideToggle(500)
    })
    var heightMax = $('body').height()
    $('.a-h').css({
        "height" : heightMax
    })
    $('.menu-bars').on('click', function() {
        $('.menu-tablet').removeClass('animate__fadeOutLeft')
        $('.a-h').fadeIn(1000)
        $('.menu-tablet').addClass('animate__fadeInLeft')
    })
    $('.menu-tablet-close').on('click', function() {
        $('.a-h').fadeOut(1000)
        $('.menu-tablet').removeClass('animate__fadeInLeft')
        $('.menu-tablet').addClass('animate__fadeOutLeft')
    }) 
    // category
    $('.align').on('click', function() {
        $('.category-menu').slideToggle(1000);
    })
    // from
    $('#form-1').validate({
        ruler: {
            name : "required",
            email: {
                required:"required",
                email:true
            },
            text: "required",
            
        },
        messages: {
            name: {
                required: "Please enter your name"
            },
            email: {
                required: "Please enter your email",
                email: true
            },
            text : {
                required: "Please enter your email",
            }
        }

    }) 
})