(function(){
    
    window.addEventListener("load", function(){
        let operaFakeBlock = document.getElementById("warning-container");
        if(document.body.contains(operaFakeBlock)){
            operaFakeBlock.remove();
        }
        $('.holder').fadeOut(3000);
    });

})();

//header nav

const btn = document.querySelector(".btn");
const menu = document.querySelector(".menu")
const nav = document.querySelector(".nav");
const menuText = document.querySelector(".menuText");
const header = document.querySelector(".header");
const sendBlank = document.querySelector(".sendBlank");
const btnOpenWidget = document.querySelector(".btnOpenWidget");
const sendBlankForm = document.querySelector(".sendBlankForm");
const sendBlankText = document.querySelector(".sendBlankText");


menu.addEventListener("click", (e)=>{
    e.preventDefault();
    btn.classList.toggle("active");
    if(btnOpenWidget.classList.contains("rotate") && sendBlankForm.classList.contains("showSendBlankForm") && header.classList.contains("changeBackground")){
        sendBlankForm.classList.remove("showSendBlankForm");
        header.classList.remove("changeBackground");
        btnOpenWidget.classList.remove("rotate")
        sendBlankText.classList.toggle("hideHeaderElements");
    }
    menuText.classList.toggle("hideHeaderElements");
    nav.classList.toggle("open");
    header.classList.toggle("changeBackground");
    
    document.addEventListener("click", (e)=>{
        if(nav.classList.contains("open") && e.pageX > 250){
           nav.classList.remove("open")
           btn.classList.remove("active")
        }
    });
    
});

//header sendBlankForm


let rightWidget=()=>{
    if(nav.classList.contains("open") && header.classList.contains("changeBackground") && menuText.classList.contains("hideHeaderElements")){
        nav.classList.remove("open");
        btn.classList.remove("active");
        header.classList.remove("changeBackground");
        menuText.classList.remove("hideHeaderElements");
    }
    btnOpenWidget.classList.toggle("rotate")
    sendBlankText.classList.toggle("hideHeaderElements");
    sendBlankForm.classList.toggle("showSendBlankForm");
    header.classList.toggle("changeBackground");
}

sendBlank.addEventListener("click", (e)=>{
    e.preventDefault();
    rightWidget();
});


// show whole text 

// document.querySelectorAll(".item").forEach( el =>{
//     el.addEventListener("click", (e)=>{
//         console.log()
//         el.childNodes[5].classList.toggle("rotateShowAll")
//         el.childNodes[3].classList.toggle("show")
//     })
// });

//hide li

document.querySelectorAll(".showList").forEach( el => {
    el.addEventListener("click", (e)=>{
        e.preventDefault();
        e.currentTarget.nextElementSibling.classList.toggle("showFaq");
        e.currentTarget.firstElementChild.classList.toggle("rotateForFaq");
    })
})


// scroll


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    $('.nav').removeClass('open');
})

$(window).scroll(function() {
    var $header = $('.header');
    if ($(this).scrollTop() > 100) {
      if (!$header.hasClass('sticky')) $header.addClass("sticky");
    } else {
      if ($header.hasClass('sticky')) {
          $header.removeClass("sticky");
      }
    }
});

