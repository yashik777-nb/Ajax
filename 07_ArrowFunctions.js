const sayHello = function () {
  console.log("Hello");
};

const sayHello1 = () => {
  console.log("Hello 1");
};

// One Line function does not need braces
const sayHello2 = () => console.log("Hello 2");

// One Line returns
const sayHello3 = () => "Hello 3";

// Return object literal
const objLit = () => ({
  msg: "Object Literal",
});

// Function With Single Parameters does not need brackets
const sayHello4 = (name) => `Hello ${name}`;
const sayHello5 = (firstName, lastName) => `Hello ${firstName}, ${lastName}`;

// Callbacks
const users = ["Nathan", "John", "Williams"];
const nameLengths = users.map(function (user) {
  return user.length;
});

const nameLengthsArr = users.map((user) => user.length);

sayHello();
console.log(sayHello3());
console.log(objLit());
console.log(sayHello4("Yash"));
console.log(sayHello5("Yash", "IK"));

console.log(nameLengths);
console.log(nameLengthsArr);
