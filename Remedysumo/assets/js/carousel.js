document.addEventListener('DOMContentLoaded', function() {
    var couponCarousel = $('#coupon-carousel');
    var storeCarousel = $('#store-carousel');

    couponCarousel.owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });

    storeCarousel.owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 6
            },
       
        }
    });
});
