//*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var a = "Eric";
console.log(a.toLowerCase());
console.log(a.toUpperCase());
function titlecase(a) {
    var step1 = a.split('');
    console.log(step1);
}
titlecase(a);
