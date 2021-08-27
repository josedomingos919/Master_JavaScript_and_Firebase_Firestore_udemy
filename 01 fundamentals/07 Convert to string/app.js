let val;

//Number to String
val = 999;
val = String(val);

//Boolean to String
val = true;
val = String(true);

//date to string
val = new Date();
val = String(val);
val = val.toString();

//Array to String
val = [1, 2, 3, 4];
val = val.toString();

//Type val
console.log("val:", val);
console.log("type:", typeof val);
console.log("length:", val.length);
