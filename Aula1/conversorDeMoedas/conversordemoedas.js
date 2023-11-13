var valorEmReal = prompt("Digite o valor em reais:");
var cotacaoEmDolar = 4.93;
var cotacaoEmEuro = 5.26;
var cotacaoEmPesoChileno= 0.0054;
var cotacaoEmWonSulCoreano = 0.0037;

var conversaoEmDolar = valorEmReal / cotacaoEmDolar;
conversaoEmDolar = conversaoEmDolar.toFixed(2);
var conversaoEmEuro = valorEmReal / cotacaoEmEuro;
conversaoEmEuro = conversaoEmEuro.toFixed(2);
var conversaoEmPesoChileno = valorEmReal / cotacaoEmPesoChileno;
conversaoEmPesoChileno = conversaoEmPesoChileno.toFixed(2);
var conversaoEmWonSulCoreano = valorEmReal / cotacaoEmWonSulCoreano;
conversaoEmWonSulCoreano = conversaoEmWonSulCoreano.toFixed(2);
var conversaoEmBitcoin = valorEmReal / 180974.50;
conversaoEmBitcoin = conversaoEmBitcoin.toFixed(2);

alert(
    "O valor convertido de R$ " + valorEmReal + " - Em Dolar: " + conversaoEmDolar + ", em Euro: " + conversaoEmEuro + ", em Peso Chileno: " + conversaoEmPesoChileno + ",  em Won Sul-Coreano: " + conversaoEmWonSulCoreano + " e em Bitcoin: " + conversaoEmBitcoin
);