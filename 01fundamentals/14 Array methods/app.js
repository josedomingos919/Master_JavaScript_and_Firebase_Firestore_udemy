const arr1 = [3, 4, 5];
const arr2 = [0, 5, 444];

//Add
//arr1.push(23); // last position
//arr1.unshift(56); // add in front of array

//Array
//console.log(arr1);

//console.log("pop", arr1.pop()); //remove last position of array and return the value that was removed
//console.log("shift", arr1.shift()); //remove the first

//arr1.splice(1, 1, "one", "tow");
//arr1.splice(1, 2);

//arr1.reverse();

//concat
/*
console.log(arr1.concat(arr2));
console.log(
  "sort:",
  arr2.sort((a, b) => a - b)
); */

console.log(
  "find:",
  arr1.find((e) => e > 3)
);

console.log(
  "filter:",
  arr1.filter((e) => e > 3)
);
//print
console.log(arr1);
