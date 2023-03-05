const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "0Z2Hhll35laRF8S3Efie8A==po3RmJXXfZiE5sGb";

const options = {
    method : "GET",
    headers: {
        "X-Api-Key" : apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
    
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Please Wait!";
    
        const response = await fetch(apiURL, options);
        const data = await response.json();
        
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke";

        jokeEl.innerText = data[0].joke;
                
    } catch (error) {
        jokeEl.innerText = "An error occured, Please try again later!";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke";
        console.log(error);    
    }
   
}

btnEl.addEventListener("click", getJoke);
