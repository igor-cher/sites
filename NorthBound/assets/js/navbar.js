

    $(".btn").click(function (e){
        e.preventDefault();
	        $(this).toggleClass("active");
		    $(".nav").slideToggle("slow").css("display", "flex");
	    });

  

    $(".nav ul li a").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr("href");
        var top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 1500);
    });