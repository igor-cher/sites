
    $(".nav_toggle").on("click", function (e) {
        e.preventDefault;
        $(this).toggleClass("active");
        $(".header").toggleClass("header-active");
    });

    $(".menu_list li").has("ul").append("<span class='toggle_dropdown'></span>"); 
    var clickMe = function (){ //show dropdown menu mobile
        if($(this).siblings(".menu_list li ul").hasClass("active")){
            $(this).siblings(".menu_list li ul").removeClass("active").slideUp();
            $(this).removeClass("rotate");
        } else{
            $(this).siblings(" .menu_list li ul").insertAfter($(this)).slideDown().addClass("active");
            $(this).addClass("rotate");
            
        }
        $(".nav_list .menu_list li ul").not($(this).siblings()).hide();
    };

    var hover = function (){ //show dropdown menu desktop
        $(this).siblings(".menu_list li ul").slideDown();
        $(".menu_list li ul").not($(this).siblings()).hide();
    };

    var hideDropdown = function (){ //desktop
        $(".menu_list li ul").slideUp();
    };


    ( function (){
        if(document.documentElement.clientWidth < 1200){
            $(".menu_list li > .toggle_dropdown").on("click", clickMe);
        } else {
            $(".menu_list li > a:not(:only-child)").on("mouseover", hover);
            $(".menu_list li ul").on("mouseleave", hideDropdown);
        }
    })();
