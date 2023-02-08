const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const valueFirstEl = document.getElementById("value-first");
const valueSecondEl = document.getElementById("value-second");
const exchangeRateEl = document.getElementById("exchange-rate");

updateRate()

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/8ccf41f387fca9e031f810a0/latest/${currencyFirstEl.value}`)
    .then((res)=>res.json())
    .then((data)=> {
        const rate = data.conversion_rates[currencySecondEl.value];
        console.log(rate);
        exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " +currencySecondEl.value}`;
        valueSecondEl.value = (valueFirstEl.value * rate).toFixed(2);
    });

}


currencyFirstEl.addEventListener("change", updateRate);  
currencySecondEl.addEventListener("change", updateRate);
   
valueFirstEl.addEventListener("input", updateRate);