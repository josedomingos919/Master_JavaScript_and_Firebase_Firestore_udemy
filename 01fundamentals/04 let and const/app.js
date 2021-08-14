//let can be assigned value
let name;
name = "José Ndonge";
console.log(name);
name = "Helena Lucas";
console.log(name);

//app.js:9 Uncaught TypeError: Assignment to constant variable.
//it will cause an error

const name1 = "José";
//name1 = "Antoníca Campos"; // error

//Object
const user = {
  name: "José",
  age: 19,
};

//user = "José"; // error
console.log(user);
user.name = "Domingos";
user.age = 20;

//array

const arr = [];
console.log(arr);
arr.push(3, 6);
console.log(arr);
