
 (function(){
  let divs = document.querySelectorAll('body section')
  divs.forEach((div, i) => {
      div.style.animation = `toTopBottom 1s cubic-bezier(0.51, 0.92, 0.24, 1.5)forwards ${i / 7 + 0.3}s`;
  })
})()


  window.addEventListener("resize", ()=> {
    const width = window.innerWidth;
    const image = document.querySelectorAll(".hero_section")[0];
    const logo = document.querySelectorAll(".main_logo a img")[0];
  
    image.style.backgroundImage = width >= 1024 ?
        "url(../img/videobackground.png)" :
        "url(../img/videobackground_mobile.png)";
    
    width >= 1024 ? logo.src = "../img/logo_desktop.png"
        : logo.src = "../img/logo_mobile.png";
  })
  

  $(".btn").click(function (e){
    $(this).toggleClass("active");
    $(".header").toggleClass("header_active");
    $(".header .header_nav .menu").toggle();
    $(".header .header_nav .main_logo").toggle();
 });


  const button = document.getElementById("addInvestors");
  
  function showItems(e){
    e.preventDefault();
    document.querySelectorAll(".inv").forEach( (el)=>{
        el.classList.toggle("invToggle");
    });
  };
  
  button.addEventListener("click", showItems);


  
