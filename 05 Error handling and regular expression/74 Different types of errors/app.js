const Person = { name: "José Domingos" };
try {
  if (!Person.email) {
    throw new TypeError("Email not exit");
  }
  someFunction();
} catch (error) {
  console.log(error instanceof SyntaxError);
  console.log("error:=>", error);
  console.log(error.message);
  console.log(error.name);
} finally {
  console.log("close file ");
}

//function someFunction() {}
