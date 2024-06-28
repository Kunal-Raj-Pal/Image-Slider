let slides = document.querySelector(".slides");
let nextBtn = document.querySelector(".next");
let preBtn =document.querySelector(".pre");
let slideNumber = 1;
let images = document.querySelectorAll("img");


nextBtn.addEventListener('click',()=>{
    if(slideNumber < images.length){
    slides.style.transform = `translateX(-${slideNumber*100}vh)`
    slideNumber++;
    }else{
       slides.style.transform = `translateX(0vh)`
    slideNumber++;
    }
});
/*
preBtn.addEventListener('click',()=>{
    if(slideNumber < images.length){
    slides.style.transform = `translateX(-${(slideNumber-2)*100}vh)`
    slideNumber--;
    }else{
       slides.style.transform = `translateX(${(length-1)*800}vh)`
    slideNumber =length; 
    }
});
*/
