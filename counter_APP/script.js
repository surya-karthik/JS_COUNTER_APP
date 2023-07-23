// getting the html elements

const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const displayValue = document.getElementById("displayValue");
const resetBtn = document.getElementById("resetBtn");

// for decrement button click


decrementBtn.addEventListener("click", () => {

    const value = Number(displayValue.innerText);
    if (value > 0) {
        displayValue.innerText =value - 1;

    }
    else{
        alert("Negative values not allowed");

    }

});

// for incerement Button Click



incrementBtn.addEventListener ("click", ()=> {
    const value = Number(displayValue.innerText);
    if (value >= 10){
        alert("10+ values are not allowed");
    }
    else{
        displayValue.innerText = value + 1 ; 
    }


});

// To reset value to 0

resetBtn.addEventListener("click", () => {
    displayValue.innerText = 0;
});
