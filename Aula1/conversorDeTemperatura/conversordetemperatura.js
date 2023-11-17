var valorEmCelsius = prompt("Insira a temperatura em Celsius: ");
var conversaoEmFahrenheit = (valorEmCelsius * 9)/5 + 32; 
conversaoEmFahrenheit = conversaoEmFahrenheit.toFixed(2);
var conversaoEmKelvin = parseFloat(valorEmCelsius) + 283.15;

alert("A conversão de " + valorEmCelsius + " em Fahrenheit: " + conversaoEmFahrenheit + " e em Kelvin: " + conversaoEmKelvin);
