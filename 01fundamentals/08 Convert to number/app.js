let val;
//String to number
val = "8";
val = Number(val);
//Bolean to number
val = false;
val = null;
val = Number(val);

//both null and false is 0

val = "alam";
val = [1, 2, 3];
val = Number(val);
val = parseInt("45.48");
val = parseFloat("45.48");

let num1 = 4;
let num2 = "45";

const soma = num1 + +num2;
val = soma;

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));
