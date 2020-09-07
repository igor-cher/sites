
document.addEventListener('scroll', ()=>{
      let scroll = window.scrollY;
      let header = document.querySelector('.header')
      
      if(scroll > 100){
            header.classList.toggle('sticky')
      } else {
            header.classList.remove('sticky')
      }
})

document.querySelector('.btn span').addEventListener("click", (e) => {
      e.target.classList.toggle('btn__active');
      document.querySelector('.menu').classList.toggle("menu__active");
});
