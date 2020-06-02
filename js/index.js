$(function () {
    $('.slider').slick({
        nextArrow: '<button class="slick__arrow slick__next"><img src="images/arrowNext.svg" alt="next-arrow"></button>',
        prevArrow: '<button class="slick__arrow slick__prev"><img src="images/arrowPrev.svg" alt="prev-arrow"></button>',
        fade: true,
        responsive: [
            {
                breakpoint: 441,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});






