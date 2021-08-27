try {
  someFunction();
} catch (error) {
  console.log(error instanceof SyntaxError);
  console.log("error:=>", error);
  console.log(error.message);
  console.log(error.name);
}

//function someFunction() {}
