document.addEventListener("DOMContentLoaded", ()=>{

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.onclick = ()=>{
navLinks.classList.toggle("active");
};

});
