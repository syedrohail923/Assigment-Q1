// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    var ordinal = void 0;
    if (number === 1) {
        ordinal = number + "st";
    }
    else if (number === 2) {
        ordinal = number + "nd";
    }
    else if (number === 3) {
        ordinal = number + "rd";
    }
    else {
        ordinal = number + "th";
    }
    console.log(ordinal);
}
