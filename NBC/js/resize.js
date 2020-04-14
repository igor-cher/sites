

    let checkSize = ()=>{ 
        let width = document.documentElement.clientWidth; 
        let image = document.getElementById("img");

        width >= 768 ? image.src = "../images/hero_section_photo.png"
            : image.src = "../images/hero_section_mobile.png";
    };

    window.addEventListener("resize", checkSize); 

    checkSize(); 
