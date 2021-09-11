$(document).ready(function() {
    $('.increment-btn').click(function (e) {
        // e.preventDefault();
        var incre_value = $(this).parents('.quantity').find('.qty-input').val();
        var value = parseInt(incre_value);
        // value = isNaN(value) ? 0 : value;
        if(value<999){
            value++;
            $(this).parents('.quantity').find('.qty-input').val(value);
        }

    });

    $('.decrement-btn').click(function (e) {
        // e.preventDefault();
        var decre_value = $(this).parents('.quantity').find('.qty-input').val();
        var value = parseInt(decre_value);
        // value = isNaN(value) ? 0 : value;
        if(value>1){
            value--;
            $(this).parents('.quantity').find('.qty-input').val(value);
        }
    });
    // 
    $('.align').on('click', function() {
        $('.category-menu').slideToggle(1000);
    })

    // 
    $('.product-details-block').owlCarousel({
        autoplay:true,
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        responsive:{
            320:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    // 
    $('.product-show_slider').owlCarousel({
        autoplay:true,
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        responsive:{
            320:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    // 
    $('.logo-motor_slider').owlCarousel({
        autoplay:true,
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        responsive:{
            320:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    // 
     // card
     $('.card').mouseover(function() {
        $(this).children('.action_link').show();
        $(this).children('.action_link').addClass('animate__slideInUp');
    })
    $('.card').mouseout(function() {
        $(this).children('.action_link').hide();
        // $(this).children('.action_link').removeClass('animate__slideInUp');
        // $(this).children('.action_link').addClass('animate__fadeOut');
    })
    
    // Description
    $('.btn-Details').on('click', function() {
        $(this).removeClass('gray')
        $('.btn-Description').addClass('gray')
        $('#Description1').fadeOut(1000)
        $('#Description3').fadeOut(1000)
        $('#Description2').fadeIn(1000)
    })
    $('.btn-Product').on('click', function() {
        $(this).removeClass('gray')
        $('.btn-Details').addClass('gray')
        $('#Description2').fadeOut(1000)
        $('#Description1').fadeOut(1000)
        $('#Description3').fadeIn(1000)
    })
    $('.btn-Description').on('click', function() {
        $(this).removeClass('gray')
        $('.btn-Product').addClass('gray')
        $('#Description3').fadeOut(1000)
        $('#Description2').fadeOut(1000)
        $('#Description1').fadeIn(1000)
    })


    $('.product-details-header').owlCarousel({
        autoplay:true,
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        responsive:{
            320:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    // menu
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
})