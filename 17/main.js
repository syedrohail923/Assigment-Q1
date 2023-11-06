//Seeing the World: Think of at least five places in the world you’d like to visit.Here's a step-by-step solution using JavaScript:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = ["Tokyo", "Paris", "New York", "Sydney", "Rome"];
console.log("Original order:", locations);
console.log("Alphabetical order:", __spreadArray([], locations, true).sort());
console.log("Original order:", locations);
console.log("Reverse alphabetical order:", __spreadArray([], locations, true).sort().reverse());
console.log("Original order:", locations);
locations.reverse();
console.log("Reversed order:", locations);
locations.reverse();
console.log("Original order:", locations);
locations.sort();
console.log("Alphabetical order:", locations);
locations.sort().reverse();
console.log("Reverse alphabetical order:", locations);
