const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightconditionEl = document.getElementById("weight-condition");

function calculateBMI(){
 const heightValue = document.getElementById("height").value/100; 
 const weightValue = document.getElementById("weight").value; 
 
 const bmiValue = weightValue / (heightValue * heightValue);
 bmiInputEl.value = bmiValue;

    if(bmiValue < 18.5){
        weightconditionEl.innerText = "Under Weight";
    }else if(bmiValue >= 18.5 && bmiValue<= 24.9){
        weightconditionEl.innerText = "Normal Weight";
    }else if(bmiValue >= 25 && bmiValue<= 29.9){
        weightconditionEl.innerText = "Over Weight";
    }else if(bmiValue >= 30){
        weightconditionEl.innerText = "Obesity";
    }
}


btnEl.addEventListener("click", calculateBMI);