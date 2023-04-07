{
    const welcome = () => {
        console.log("Witam. Ta strona sluzy do przeliczania walut");
    }

    welcome();





    const calculateResult = (amount, currency) => {
        const rateEUR = 4.687;
        const rateCHF = 4.736;
        const rateCZK = 0.198;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;
            case "CHF":
                return amount / rateCHF;
            case "CZK":
                return amount / rateCZK;
        }
    }

    const init = () => {
        const formElement = document.querySelector(".js-form")

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const amountElement = document.querySelector(".js-PLN")
            const CurrencyElement = document.querySelector(".js-currency")

            const resultElement = document.querySelector(".js-result")

            const amount = +amountElement.value;
            const currency = CurrencyElement.value;

            let result = calculateResult(amount, currency);


            resultElement.innerHTML = `Wynik: ${result.toFixed(2)}  ${currency}`;


        });
    }

    init();

}