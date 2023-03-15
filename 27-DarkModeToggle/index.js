const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
const pEl = document.querySelector("p");
const changeEl = document.querySelector(".change");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));


updateBody();

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
        changeEl.innerHTML = "Switch to Light Mode";
        pEl.style.color = "white";
        
    }else{
        bodyEl.style.background = "white";
        changeEl.innerHTML = "Switch to Dark Mode";
        pEl.style.color = "black";
    }
}

inputEl.addEventListener("input", ()=>{
    updateBody();
    updateLocalStorage();
})

function updateLocalStorage(){
    localStorage.setItem("mode",
    JSON.stringify(inputEl.checked));
}