console.clear();

function logSeparator(number) {
  console.log("-------------\nExercise "+number+":\n-------------");
}

logSeparator(1);

logText();

function logText() {
  console.log("\nThis text does not appear. Why?\n");
};

logSeparator(2);

function greet(name) {
  console.log("\nWelcome "+name+", good to see you again!\n");
};

greet("Alice");
greet("Bob");
greet("Mary");

logSeparator(3);
console.log("\nDone!");
