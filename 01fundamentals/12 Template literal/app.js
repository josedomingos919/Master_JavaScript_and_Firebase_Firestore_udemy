let name = "José";
let age = 90;
let message;
message = "Hello I'm " + name + " and I'm " + age + " years old";

//template literal
message = `Template Literal: Hello I'm ${name} and I'm ${age}`;
message = `It is: ${age > 20 ? "Old" : "New"} `;
//Bugs
console.log(message);
