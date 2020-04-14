(function($){ 
   

    if($(window).width() < 1200){
        $(".dreams").slick({
            infinite: true,
            speed: 700,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 3,
                        autoPlay: true,
            autoplaySpeed: 2000,
                        slidesToScroll: 3,
                        infinite: true,
                        speed: 500,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        autoPlay: true,
            autoplaySpeed: 2000,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
            ]
        });
    }

    if($(window).width() < 1200){
        $('.adv_list').slick({
             autoPlay: true,
             autoplaySpeed: 2000,
             dots: true,
             infinite: true,
             prevArrow: false,
             nextArrow: false,
             speed: 200,
             slidesToShow: 1
           });
       }

      /* window.addEventListener("load", (e)=>{
            const prev = document.querySelector(".slick-prev");
            const next = document.querySelector(".slick-next");
        
            prev.classList.add("fa", "fa-chevron-circle-left");
            next.classList.add("fa", "fa-chevron-circle-left", "rotateNextArrow");
            document.querySelectorAll(".slick-arrow").forEach(el=> el.innerHTML = "");
    });

    window.addEventListener("resize", ()=>{
        document.querySelectorAll(".slick-arrow").forEach(el=> el.innerHTML = "");
    });*/

})(jQuery);
