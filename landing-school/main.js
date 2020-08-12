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


let counter = 1;
let selected = document.getElementById('selected');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next')
selected.innerHTML = counter

 
document.addEventListener('click', (e)=> {
    e.stopPropagation()

    if(e.target.classList.contains("prev")){
        if(counter === 1 ){
            prev.disabled = true;
        } else{
            prev.disabled = false
            next.disabled = false
            counter--;
            selected.innerText = counter;
        }
    
    } else if(e.target.classList.contains("next")){
        if(counter === 3){
            next.disabled = true;
        } else{
            next.disabled = false
            counter++;
            selected.innerText = counter;
        }
    }

    return counter;
})

document.addEventListener('touchend', (e)=> {
    e.stopPropagation()

    // if(e.target.classList.contains("prev")){
    //     if(counter === 1 ){
    //         prev.disabled = true;
    //     } else{
    //         prev.disabled = false
    //         next.disabled = false
    //         counter--;
    //         selected.innerText = counter;
    //     }
    
    // } else if(e.target.classList.contains("next")){
    //     if(counter === 3){
    //         next.disabled = true;
    //     } else{
    //         next.disabled = false
    //         counter++;
    //         selected.innerText = counter;
    //     }
    // }


    selected.innerHTML = Number(document.querySelector('.slick-current').getAttribute('data-slick-index'))+1

    return counter;
})




