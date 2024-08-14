
/* Menu - down */

window.addEventListener("scroll", () =>{
    const header = document.querySelector("header");
    if (window.scrollY>0){
        header.classList.add("down");
    }else{
        header.classList.remove("down");
    }
   
})

