// Mapear os elementos
const amountElement = document.getElementById("amount");
const fromCurrencyElement = document.getElementById("fromCurrency");
const toCurrencyElement = document.getElementById("toCurrency");
const convertButton = document.getElementById("convertBtn");
const resultElement = document.getElementById("result");

// criar o evento de click
convertButton.addEventListener("click", async() => {

    // pegar os valores do usuario
    const valor = amountElement.value;
    const moedaDeOrigem = fromCurrencyElement.value;
    const moedadeDestino = toCurrencyElement.value;

    // validar se o usuario digitou algo
    if (valor === "" || valor <= 0){
        alert("Digite um valor válido");
        return;
    }

    try {
        // fazer a requisição para a API
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${moedaDeOrigem}`);
        const data = await response.json();
        // buscando os dados dentro da api
        const taxa = data.rates[moedadeDestino];
        const resultado = (valor * taxa).toFixed(2);
        // mostrando o resultado na tela
        resultElement.innerText = `Resultado: ${resultado} ${moedadeDestino}`;

    } catch (error) {
        console.error("Erro na conversão", error);
        resultElement.innerText = "Ocorreu um erro na conversão";
    }
});
