jQuery(document).ready(function($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $(".menu_list_item").hover(function() {
        $(this).children('.menu_list_item_inner').stop().fadeIn('fast');
    }, function() {
        $(this).children('.menu_list_item_inner').stop().fadeOut('fast');
    });

    $(document).on('click', '.menu_list a', function() {
        if ($(this).parents('.menu_list').length) {
            $('.menu_list .menu_active').removeClass('menu_active');
            $(this).closest('li').addClass('menu_active');
        }
    });

    $(document).on('click', '.breadcrumb a', function() {
        if ($(this).parents('.breadcrumb').length) {
            $('.breadcrumb .active').removeClass('active');
            $(this).closest('a').addClass('active');
        }
    });

    $(document).on('click', '.mfp-close', function() {
        $(".testimonials-slides").trigger('play.owl.autoplay',[2000])
    });

    $(document).on('click', '.portfolio-popup', function() {
        $('.portfolio-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            gallery: {
              enabled: true
            },
            callbacks: {
                open: function() {
                    $(".testimonials-slides").trigger('stop.owl.autoplay');
                },
                close: function() {
                    $(".testimonials-slides").trigger('play.owl.autoplay',[2000])
                }
              },
            zoom: {
              enabled: true,
              duration: 300,
              easing: 'ease-in-out',
              opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
              }
            }
        });
    });

    $(document).on('click', '.back-to-top', (e) => {
        e.preventDefault();
        var element = document.getElementById('app');
            window.scrollTo({
                top: element.offsetTop,
                left: 0,
                behavior: 'smooth'
            });

            return false;
    });

});


