

    $(".testimonial .container .slider").slick({
        dots: true,
        fade: true,
        prevArrow: false,
        nextArrow: false,
        initialSlide: 1
    });

    document.querySelectorAll(".slick-slider li button").forEach ( el => {
        el.innerHTML = "";
    }); //delete numbers