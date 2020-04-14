//header nav

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    e.currentTarget.classList.toggle("active");
})

//services bonus

document.querySelectorAll(".showList").forEach( el => {
    el.addEventListener("click", (e)=>{
        e.preventDefault();
        e.currentTarget.nextElementSibling.classList.toggle("show");
        e.currentTarget.firstElementChild.classList.toggle("rotate");
    })
})

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
})


//https://misha.blog/javascript/javascript-validation.html