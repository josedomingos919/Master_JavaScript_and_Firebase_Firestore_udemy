const firstName = "José";
const lastName = "Ndonge";

let val;

//concatenate
val = firstName + lastName;
val = firstName + " " + lastName;

//append
val = "José";
val += " Domingos";

//Escaping
val = "Este é o 'Jose' ";
//val = 'Este é o 'Jose' '

//length;
val = firstName.length;

//concat
val = firstName.concat(" ", lastName);
val = firstName.toUpperCase();
val = lastName.toLocaleLowerCase();
//Result
console.log(val);
