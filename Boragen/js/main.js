
(function (){
    const width = window.innerWidth;
    const image = document.querySelectorAll(".hero_section")[0];
    const logo = document.querySelectorAll(".main_logo a img")[0];
  
    image.style.backgroundImage = width >= 1024 ?
        "url(../img/videobackground.png)" :
        "url(../img/videobackground_mobile.png)";
    
    width >= 1024 ? logo.src = "../img/logo_desktop.png"
        : logo.src = "../img/logo_mobile.png";
  })();
  

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
    this.classList.toggle("opened");
    if(this.classList.contains("opened")){
        this.innerHTML = "hide investors";
    } else{
        this.innerHTML = "more investors";
    }
  };
  
  button.addEventListener("click", showItems);


  