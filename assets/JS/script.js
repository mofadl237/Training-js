// cursor Event With Image Or Icons
var cursor = document.querySelector(".cursor i");
// 1-function Tehaded EL Position 
function positionMove(e){
    console.log(e.clientX);
    cursor.style.left=`${e.clientX}px`;
    cursor.style.top=`${e.clientY}px`;
    console.log(e.clientY);
}
//2- Add Document

// document.addEventListener("mousemove" ,function(e){
//     positionMove(e);
// })
// document.addEventListener("dragend" ,function(e){
//     positionMove(e);
// })

/// SlidePar Pop
// 1-get All Product 2-Image Declare For Index Image 
// 3- Declare Close btn && Next Previous
var imgList = Array.from(document.querySelectorAll(".container .item img"));
var indexImage=0;
var closeBtn = document.querySelector("#showItem .close");
var nextBtn = document.querySelector("#showItem .next");
var prevBtn = document.querySelector("#showItem .prev");
var showSlide=document.querySelector("#showProduct");
var showItem=document.getElementById("showItem");
// Function For Looop All Image And Add Event For Every One
imgList.forEach(function (ele){
    ele.addEventListener("click" , function(e){
        indexImage =imgList.indexOf(e.target);
        showSlide.classList.replace("d-none" , 'd-flex');
        showItem.style.backgroundImage=`url(${e.target.getAttribute("src")})`;
        
    })
})
function closeSlide(){
    showSlide.classList.replace("d-flex" , 'd-none');
}
function nextImg(){
    indexImage++;
    if(indexImage >= imgList.length){
        indexImage=0;
    }
    showItem.style.backgroundImage=`url(${imgList[indexImage].getAttribute("src")})`;
    
}
function prevImg(){
    indexImage--;
    if(indexImage <0){
        indexImage=imgList.length -1;
    }
    showItem.style.backgroundImage=`url(${imgList[indexImage].getAttribute("src")})`;
    
}
//Add Function For Icons
closeBtn.addEventListener("click",closeSlide); 
nextBtn.addEventListener("click",nextImg);
prevBtn.addEventListener("click",prevImg);