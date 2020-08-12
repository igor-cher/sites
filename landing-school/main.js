// header menu

let showMenu = () => {
    document.querySelector(".btn").classList.toggle('active')
    document.querySelector(".header").classList.toggle('header-active')
}

document.querySelector(".menu").addEventListener('click', (e) => {
    e.preventDefault()

    showMenu()
})


document.querySelectorAll("nav a").forEach( link => {
    link.addEventListener('click', (e)=>{
        showMenu()
    })
})


// idea list


let btns = document.querySelectorAll(".idea-button button").forEach(btn => {
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


let selected = document.getElementById('selected');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next')
selected.innerHTML = 1

 
document.addEventListener('click', (e)=> {
    e.stopPropagation()
    selected.innerHTML = Number(document.querySelector('.slick-current').getAttribute('data-slick-index'))+1

})

document.addEventListener('touchend', (e)=> {
    e.stopPropagation()

    selected.innerHTML = Number(document.querySelector('.slick-current').getAttribute('data-slick-index'))+1

})
