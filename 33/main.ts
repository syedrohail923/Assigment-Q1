// Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

let pizza = ["Fajita" , "Malai" , "Tikka"]
console.log("Printing pizza names:")
for (let i = 0; i < pizza.length; i++) {
  console.log(pizza[i]);
}

for (let i = 0; i < pizza.length; i++) {
  console.log("I like " + pizza[i] + " pizza.");
}

console.log("I really love pizza!");