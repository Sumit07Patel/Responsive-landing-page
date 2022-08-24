

//for hamburger

const hamburger = document.querySelector(".hamburger")
const hamCover = document.querySelector(".hamburger-cover");
const mainMenu = document.querySelector(".main-menu")
const hamBar = document.querySelectorAll(".hamburger-bar")

hamburger.addEventListener("click",()=>{
    hamCover.classList.toggle("hamburger-toggle");
    mainMenu.classList.toggle("mobile-menu-toggle");
    for(i=0; i<hamBar.length; i++){
        hamBar[i].classList.toggle("hamburger-toggle");
    }
})

//for mobile drop-down menu

const links = document.querySelectorAll(".navigations ul li");
const featureLink = links[0];
const companyLink = links[5];
const featureDropdown = document.querySelector(".feature-dropdown-menu");
const companyDropdown = document.querySelector(".company-dropdown-menu");

featureLink.addEventListener("click", ()=>{
    featureDropdown.classList.toggle("dropdown-toggle")
})
companyLink.addEventListener("click", ()=>{
    companyDropdown.classList.toggle("dropdown-toggle")
})