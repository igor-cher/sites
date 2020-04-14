
    $(".btn").click(function (e){
        e.preventDefault();
	        $(this).toggleClass("active");
		    $(".nav").slideToggle("slow");
	    });


    $(".nav ul li a").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr("href");
        var top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 1500);
    });

    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if(height > 100){
            $("header").addClass("header_opacity");
        } else{
            $("header").removeClass("header_opacity");
        }
    });
