const USD = 5.68
const EUR = 6.46
const GBP = 7.56




//Obtendo os elementos do formulário.
const form = document.querySelector ("form")
const amount = document.getElementById ("amount")
const currency = document.getElementById ("currency")


//Manipulando o input amount para receber apenas números.
amount.addEventListener ("input", ()=>{
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")

})

//Capturando o evento de Submit (enviar) do fomrulário.
form.onsubmit = (event) => {
    event.preventDefault ()
    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break

            case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break

            case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break



    }
    
    }

    //Função para converter a moeda.
    function convertCurrency(amount, price, symbol) {
        console.log(amount,price,symbol)

    }
    