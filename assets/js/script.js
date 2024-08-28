const slideRightBtn = document.getElementById("slide-right")
const slideDownBtn = document.getElementById("slide-down")
const navSection = document.getElementById("nav-section")
const navSection2 = document.getElementById("nav-section2")
const navMenu = document.getElementById("nav-menu")
const navMenu2 = document.getElementById("nav-menu2")
const closeBtn = document.getElementById("close-btn")
const closeBtn2 = document.getElementById("close-btn2")

slideRightBtn.addEventListener("click", ()=>{
    navSection.style.width="100%";
    navMenu.style.visibility="visible";
    navSection.style.transition="width 0.3s"; 
})
closeBtn.addEventListener("click", ()=>{
    navSection.style.width="0%";
    navMenu.style.visibility="hidden";
})

slideDownBtn.addEventListener("click", ()=>{
    navSection2.style.height="100vh";
    navMenu2.style.visibility="visible";
    navSection2.style.transition="height 0.3s";  
    closeBtn2.style.visibility="visible";
})
closeBtn2.addEventListener("click", ()=>{
    navSection2.style.height="0vh";
    navMenu2.style.visibility="hidden"; 
    closeBtn2.style.visibility="hidden";
})


