//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians = ["Jaadu", "Pappu", "Vinni", "Venom"];

function make_great(names) {
  let greatMagicians = [];

  for (var i = 0; i < names.length; i++) {
    greatMagicians.push(names[i] + " the Great");
  }
  return greatMagicians;
}

function show_magicians(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

let greatMagiciansArray = make_great(magicians);

console.log("Original magicians:");
show_magicians(magicians);

console.log("\nModified magicians:");
show_magicians(greatMagiciansArray);