// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals = ['dog', 'cat', 'rabbit'];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
  }
  for (var i = 0; i < animals.length; i++) {
    switch (animals[i]) {
      case "dog":
        console.log("A dog would make a great pet.");
        break;
      case "cat":
        console.log("A cat would make a great companion.");
        break;
      case "rabbit":
        console.log("A rabbit would make a great addition to a family.");
        break;
      default:
        console.log("Unknown animal.");
    }
  }
  
console.log("These animals are all mammals")
console.log('Any of these animals would make a great pet!');