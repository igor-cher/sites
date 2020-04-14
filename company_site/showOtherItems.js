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