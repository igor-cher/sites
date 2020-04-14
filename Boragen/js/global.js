$(document).ready(function (){
  $(".all_news").slick({
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: document.querySelector(".prev"),
      nextArrow: document.querySelector(".next"),
      responsive: [
          {
              breakpoint: 1800,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  infinite: true,
                  speed: 500,
              }
          },
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true
              }
          },
      ]
  });

});