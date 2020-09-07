$(document).ready(() => {
    console.log("Ready!");
    $(".pets__main_slider").slick({
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      cssEase: 'linear',
      prevArrow: '<button class="prev"><img src="../../assets/images/all/arrow-left.png" alt="images" /></button>',
      nextArrow: '<button class="prev"><img src="../../assets/images/all/arrow-right.png" alt="images" /></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
 

});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
  $('.btn span').removeClass('btn__active');
  $('.menu').removeClass('menu__active');
  $('.menuText').removeClass('hideHeaderElements');
  
})
