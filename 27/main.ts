//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

let age = 50;

if (age < 2){
    console.log("This person is a baby.");
} else if (age < 4) {
    console.log("This person is a toddler.")
} else if (age < 14) {
    console.log("This person is a kid.")
} else if (age < 20) {
    console.log("This person is teenager.")
} else if (age < 65) {
    console.log("This person is an adult.")
} else {
    console.log("The person is an elder.")
}