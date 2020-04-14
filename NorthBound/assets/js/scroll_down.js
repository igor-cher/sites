

    $(".hero_btn").on("click","a", function (e) {
        e.preventDefault();
        var id  = $(this).attr("href");
        var top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 1500);
    });