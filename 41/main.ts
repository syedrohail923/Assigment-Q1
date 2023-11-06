//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians_name = ["Jaadu" , "Bhola" , "Venom"];
function make_great(names) {
    for (let i = 0; i < names.length; i++) {
      names[i] = "the Great " + names[i];
    }
  }
  function show_magicians(names) {
    for (let i = 0; i < names.length; i++) {
      console.log(names[i]);
    }
  }
  make_great(magicians_name);
  show_magicians(magicians_name);