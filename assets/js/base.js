$(document).ready(function() {
    $('.content').owlCarousel({
        autoplay:true,
        dots: false,
        loop:true,
        margin:0,
        nav:false,
        items:1
    })
})
$('.product-show_slider').owlCarousel({
    autoplay:true,
    loop:true,
    margin:0,
    dots: false,
    nav:false,
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
$('.client-block').owlCarousel({
    autoplay:true,
    loop:true,
    margin:0,
    dots: false,
    nav:false,
    responsive:{
        0:{
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
$('.latest-news-all').owlCarousel({
    autoplay:true,
    loop:true,
    margin:0,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// category-menu 
$(document).ready(function() {
    $('.align').on('click', function() {
        $('.category-menu').slideToggle(1000);
    })
   // card
    $('.card').mouseover(function() {
        $(this).children('.action_link').show();
        $(this).children('.action_link').addClass('animate__slideInUp');
    })
    $('.card').mouseout(function() {
        $(this).children('.action_link').hide();
    })
    // btn
    $('.nake-bike').on('click', function() {
        $('.Sports').removeClass('blue');
        $('.nake-bike').addClass('blue')
        $('.product-hide1').fadeOut(500);
        $('.product-hide2').fadeIn(1000);

    })
    $('.Sports').on('click', function() {
        $('.nake-bike').removeClass('blue');
        $(this).addClass('blue')
        $('.product-hide2').fadeOut(1500);
        $('.product-hide1').fadeIn(1000);
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


