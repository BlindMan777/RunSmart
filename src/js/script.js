$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_chevron.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right_chevron.png"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false
              }
            }
          ]
    });
});