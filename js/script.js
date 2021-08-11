const open_ = document.querySelector(".open");
const close_ = document.querySelector(".close");
const mobile_nav = document.querySelector(".mobile-nav");

open_.addEventListener("click", (e)=>{
    close_.className = "close open-nav"
    open_.className = "open close-nav"
    mobile_nav.id = "scale"
})

close_.addEventListener("click", (e)=>{
    close_.className = "close close-nav"
    open_.className = "open open-nav"
    mobile_nav.id = "unscale"
})
