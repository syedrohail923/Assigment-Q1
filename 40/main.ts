// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians_name = ["Jaadu" , "Bhola" , "Venom"];
function show_magicians (magicians_array){
    for (let i = 0; i < magicians_array.length; i++){
        console.log(magicians_array[i])
    }
}
show_magicians(magicians_name)