// header menu

let showMenu = () => {
    document.querySelector(".btn").classList.toggle('active')
    document.querySelector(".header").classList.toggle('header-active')
}

document.querySelector(".menu").addEventListener('click', (e) => {
    showMenu()
})


document.querySelectorAll("nav a").forEach( link => {
    link.addEventListener('click', (e)=>{
        showMenu()
    })
})


// show block

document.querySelector('.shedule-second button').addEventListener('mouseover', (e)=>{
  document.querySelector('.shedule-second div').classList.toggle('idea-list-active')
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



// idea list


document.querySelectorAll(".idea-button button").forEach(btn => {
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        e.target.classList.toggle('idea-button-active')
        e.target.parentNode.parentNode.nextElementSibling.classList.toggle('idea-list-active')
    })
})


$(document).ready(function (){
    $(".slider-main").slick({
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: document.querySelector(".prev"),
        nextArrow: document.querySelector(".next"),
        cssEase: 'linear',
        
    });

});


// validate phone
function validate(evt) {
    var theEvent = evt || window.event;
    
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }




// slider

let selected = document.getElementById('selected');
selected.innerHTML = 1

 
document.addEventListener('click', (e)=> {
    selected.innerHTML = Number(document.querySelector('.slick-current').getAttribute('data-slick-index'))+1

})

document.addEventListener('touchend', (e)=> {

    selected.innerHTML = Number(document.querySelector('.slick-current').getAttribute('data-slick-index'))+1
})

// form submit

function modal(){
    document.querySelector('.modal').classList.toggle('showModal')
}


$('form').submit(function () {
    setTimeout(()=> {
        modal()
    }, 2000)
    modal()
    return false;
});