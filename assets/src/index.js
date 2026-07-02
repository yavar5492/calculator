const namberBtn = document.querySelectorAll(".number button");
const inputEl = document.querySelector("#previwe");
const plusBtn = document.querySelectorAll(".btn-operators");
const minusBtn = document.querySelector("#minus");
const multiplied = document.querySelector("#multiplied");
const equalEl = document.querySelector("#equal");
const btnEL = document.querySelector("#btn-remove-value-input-previwe")

let isResultShown = false;
let b = 0;
let operator = "";

namberBtn.forEach(e => {
    e.addEventListener("click", (e) => {
        btnEL.classList.add("display")
        var btn = e.currentTarget;
        if (isResultShown) {
            inputEl.value = "";
            isResultShown = false;
        }
        inputEl.value += btn.textContent;
    })
})

plusBtn.forEach(e => {
    e.addEventListener("click", (ev) => {
        operator = e.getAttribute("id");
        b = Number(inputEl.value);
        inputEl.value = "";
    })
})



equalEl.addEventListener("click", (e) => {
    var c = Number(inputEl.value);
    var m = "";
    if (operator == "minus") {
        m = b - c;
    }
    if (operator == "plus") {
        m = b + c;
    }
    if (operator == "multiplied") {
        m = b * c;
    }
    if (operator == "distribution") {
        m = b / c;
    }
    if (operator == "radical") {
        m = Math.sqrt(b);
    }
    if (typeof m === 'number' && !Number.isInteger(m)) {
        m = m.toFixed(5);
    }
    inputEl.value = m;
    isResultShown = true;
})
btnEL.addEventListener("click", e => {
    inputEl.value = inputEl.value.slice(0, -1);
    if(inputEl.value == "") {
        btnEL.classList.remove("display")
    }
})