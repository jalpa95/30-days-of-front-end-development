const testimonials= [
    {
        name: " Rodrique F.",
        photoUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        text: "I don't always clop, but when I do, it's because of apple. I wish I would have thought of it first.",
    },
    {
        name: " Denice G.",
        photoUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80",
        text: "Absolutely wonderful! Wow what great service, I love it! If you want real marketing that works and effective implementation - apple's got you covered.",
    },
    {
        name: "Elladine Z.",
        photoUrl: "https://images.unsplash.com/photo-1541499768294-44cad3c95755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
        text: "I couldn't have asked for more than this. Not able to tell you how happy I am with apple. It's really wonderful.",
    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx= 0;

updateTestimonial();

function updateTestimonial() {
    const{name, photoUrl, text} =
    testimonials[idx] ;
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText= name;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    
    setTimeout(()=>{
        updateTestimonial()
    },3000);
    }
