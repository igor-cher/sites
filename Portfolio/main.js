// (function(){
//     window.addEventListener("load", function(){
//         $('.preloader').fadeOut(3000); // set duration in brackets 
//     })
// })();


//header nav

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    e.currentTarget.classList.toggle("active");
    document.querySelector('.nav').classList.toggle('navActive')
})

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    document.querySelector('.nav').classList.remove('navActive')
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



let modalBlock = document.querySelector('.myModal');

  document.querySelectorAll('.popup').forEach(p =>{
    p.addEventListener("click", ()=>{
      modalBlock.classList.add('showModal');
    })
  })
  document.addEventListener('click',(event)=>{
    (event.target.id === 'close') ? modalBlock.classList.remove('showModal') : null;
  })
            

// services

document.querySelectorAll('.service').forEach(s=>{
    s.addEventListener('click', ()=>{
        modalBlock.classList.add('showModal');
    })  
})