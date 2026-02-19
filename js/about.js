document.addEventListener("DOMContentLoaded",()=>{

const nav=document.querySelector(".nav-links");
document.querySelector(".hamburger").onclick=()=>{
nav.classList.toggle("active");
};

const slides=document.querySelectorAll(".about-slide");

let index=0;

function showSlide(){

slides.forEach(slide=>slide.classList.remove("active"));

slides[index].classList.add("active");

index++;

if(index>=slides.length){
index=0;
}

}

showSlide();

setInterval(showSlide,3000);

});
