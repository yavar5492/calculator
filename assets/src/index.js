const namberBtn = document.querySelectorAll(".number button");
const inputEl = document.querySelector("#previwe");
const plusBtn = document.querySelectorAll(".btn-operators");
const minusBtn = document.querySelector("#minus");
const multiplied = document.querySelector("#multiplied");
const equalEl = document.querySelector("#equal");

let isResultShown = false;
let b = 0;
let operator = "";
namberBtn.forEach(e => {
    e.addEventListener("click", (e) => {
        var btn = e.currentTarget;
        console.log(btn);

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
        console.log(e);
        b = Number(inputEl.value);
        console.log(b);
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
    console.log(m);
    inputEl.value = m;
    isResultShown = true;
})