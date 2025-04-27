let slideindex=0;

let slideset=document.querySelector(".slides");
let slides=document.querySelectorAll(".slide");
let nextbutton1=document.querySelector("#nextbutton1");

slides.forEach((s)=>{
    s.style.opacity="0";
})                                // Setting opacity of all slides to 0

slides[0].style.opacity="1";        // Setting the opacity of the first slide to 1

nextbutton1.addEventListener('click',()=>{
    slides[0].style.transitionDuration="0.5s";
    slides[0].style.opacity="0";
    slideset.style.transform="translate(-33.33%,0)";
    slideset.style.transitionDuration="2s";
    slides[1].style.transitionDuration="5s";
    slides[1].style.opacity="1";

    let heading2=document.querySelector(".heading2");
    heading2.classList.add("heading2animation");

    let list=document.querySelector("ul");
    let listelement=list.children;
    listelement[0].classList.add("benefit1animation");
    listelement[1].classList.add("benefit2animation");
    listelement[2].classList.add("benefit3animation");

    let nextbutton2=document.querySelector("#nextbutton2");
    nextbutton2.classList.add("nextbutton2animation");
    
});

let nextbutton2=document.querySelector("#nextbutton2");
nextbutton2.addEventListener('click',()=>{

    slides[1].style.opacity="0";
    slideset.style.transform="translate(-66.66%,0)";
    slideset.style.transitionDuration="2s";
    slides[2].style.transitionDuration="5s";
    slides[2].style.opacity="1";
});


let images=document.querySelectorAll(".image");

function imghover(k){
    images[k].style.opacity="1";
    images[k].style.transform="scale(1.1)";
    for(let j=0;j<images.length;j++)
    {
        if(j!=k){
            images[j].style.opacity="0.5";
            images[j].style.transform="scale(0.5)";
            
        }
    }
}


for(let i=0;i<images.length;i++)
{
    images[i].style.opacity="0.8";
    images[i].style.transitionDuration="0.5s";
    images[i].addEventListener('mouseenter',()=>{
        imghover(i);
    });
    images[i].addEventListener('mouseleave',()=>{
        images.forEach((im)=>{
            im.style.opacity="0.8";
            im.style.transform="scale(1)";
        })
    })
}
