const USD = 5.68
const EUR = 6.46
const GBP = 7.56


//Obtendo os elementos do formulário.
const form = document.querySelector ("form")
const amount = document.getElementById ("amount")
const currency = document.getElementById ("currency")
const footer = document.querySelector ("main footer")
const description = document.getElementById ("description")
const result = document.getElementById ("result")






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
        try {
            //Exibindo a cotação da moeda selecionada.
            description.textContent =  `${symbol} 1 = ${formatCurrencyBRL(price)}`

            //Calcula o resultado total
            let total = amount * price


            //Verifica se o resultado não é um número
            if (isNaN(total)) { 
                return alert("Por favor, digite o valor corretamente para converter")                
            }
            total = formatCurrencyBRL(total).replace("R$", "")


            //Exibe o resultado total
            result.textContent = `${total} Reais`

            //Aplica a classe que exibe o footer para mostrar o resultado
            footer.classList.add("show-result")
            
        } catch (error) {
            console.log (error)

            //Remove a classe do footer removendo ele da tela
            footer.classList.remove("show-result")
            alert("Não foi possível converter, tente novamente mais tarde") 
        }

    }
    
    //Formata a moeda em real Brasileiro
    function formatCurrencyBRL(value) {

        //Converte para número para utilizar o toLocaleString para formatar no padrão BRL
        return Number (value).toLocaleString("ipt-BR" , {
            style: "currency" ,
            currency: "BRL"
        })
        
    }