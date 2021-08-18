const arr1 = [1, 45, 34];
const arr2 = new Array(1, 23, 56);
const users = ["José", "Bia", "Tucha", "Jurelma", "Valfina"];
const anything = [
  "Walter",
  3,
  null,
  undefined,
  false,
  { name: "Alan", age: 30 },
  new Date(),
];

//check whether is array
console.log(Array.isArray(anything));

//change value
arr2[0] = "First Lesson";

console.log(users, anything);
console.log(arr1[1], arr2);
