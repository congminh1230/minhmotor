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
    // btn
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
    // from
    $('#form-1').validate({
        ruler: {
            name : "required",
            Zip: {
                required:"required",
                
            },
            
        },
        messages: {
            name: {
                required: "Please enter content"
            },
            Zip: {
                required: "Please enter content",
                
            },
        }

    }) 

    
})