//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

console.log("apple" == "apple"); // true
console.log("apple" == "orange"); // false
console.log(`"apple"` != "banana"); // false
console.log("apple" != "apple"); // false
console.log("Apple".toLowerCase() == "apple"); // true
console.log("Apple".toLowerCase() == "apple"); // true
console.log(5 == 5); // true
console.log(5 == 10); // false
console.log(5 > 2); // true
console.log(10 < 5); // false
console.log(5 >= 5); // true
console.log(10 <= 5); // false
console.log(5 > 2 && 10 < 5); // false
console.log(5 > 2 && 10 > 5); // true
console.log(5 > 2 || 10 < 5); // true
console.log(5 < 2 || 10 < 5); // false
let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("apple")); // true
console.log(fruits.includes("grape")); // false