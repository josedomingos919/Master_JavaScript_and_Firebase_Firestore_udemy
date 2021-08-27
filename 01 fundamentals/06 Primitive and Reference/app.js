let x = 20;
let y = x;

console.log(x, y);
x = 30;
console.log(x, y);

//References
let a = { value: 20 };
b = a;
console.log(a, b);

a.value = 30;
console.log(a, b);

//Example2
let name = "José";

//Past as Parameter
function message(name) {
  name = "Petter";
  console.log("Nome Function: ", name);
}

message(name);
console.log("Out of function", name);

//Past as Reference

//Example3
let user = { name: "António" };

//Past as Parameter
function messageUser(user) {
  user.name = "Petter";
  console.log("Nome Function: ", user);
}

messageUser(user);
console.log("Out of function", user);
