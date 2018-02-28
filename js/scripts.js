// scripts.js

var a = prompt('Podaj a');
var b = prompt('Podaj b');
var value = (a * a) - (2 * a * b) - (b * b);
alert(value);
console.log(value);

var positiveOrNegative = value >= 0 ? 'Wynik dodatni' : 'Wynik ujemny';
console.log(positiveOrNegative);
alert(positiveOrNegative);

var equalToZero = value == 0 ? 'Wynik równy 0' : 'Wynik różny od zera';
console.log(equalToZero);
alert(equalToZero);