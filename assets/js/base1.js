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
        // $(this).children('.action_link').removeClass('animate__slideInUp');
        // $(this).children('.action_link').addClass('animate__fadeOut');
    })
    // 
    $('.btn-ul').on('click', function() {
        $(this).removeClass('gray')
        $('.btn-list').addClass('gray');
        $('.product-hide1').fadeOut(1000);
        $('.product2').fadeIn(1000);
    })
    $('.btn-list').on('click', function() {
        $(this).removeClass('gray')
        $('.btn-ul').addClass('gray')
        $('.product2').fadeOut(1000);
        $('.product-hide1').fadeIn(1000)
       
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