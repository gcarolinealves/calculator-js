const display = document.querySelector(".display");

const buttonsOperations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const deleteChar = document.querySelector(".delete");
const clear = document.querySelector(".clear-input");

const plusMinus = document.querySelector(".plus-minus");
const percent = document.querySelector(".percent");


buttonsOperations.forEach(button => {
    button.addEventListener("click", event => {
        display.value = display.value + event.target.textContent;
    })
})

equal.addEventListener("click", event => {
    display.value = eval(display.value);
})

clear.addEventListener("click", event => {
    display.value = "";
})

deleteChar.addEventListener("click", event => {
    display.value = display.value.substring(0, display.value.length-1);
})

plusMinus.addEventListener("click", event => {
    if (display.value) {
        display.value = eval(display.value);
    }

    display.value = display.value * (-1);
})

percent.addEventListener("click", event => {
    display.value = display.value.replace("%", "/100*");
})
