let amountElement = document.querySelector(".js-PLN")
let CurrencyElement = document.querySelector(".js-currency")
let formElement = document.querySelector(".js-form")
let resultElement = document.querySelector(".js-result")

let rateEUR = 4.687;
let rateCHF = 4.736;
let rateCZK = 0.198;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = CurrencyElement.value;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "CHF":
            result = amount / rateCHF;
            break;
        case "CZK":
            result = amount / rateCZK;
            break;
    }

    resultElement.innerHTML = `Wynik: ${result.toFixed(2)}  ${currency}`;


})
