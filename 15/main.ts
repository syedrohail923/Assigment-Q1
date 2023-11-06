//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let guests = ["Hifza", "Iqra", "Maham"];

console.log("Great news! We found a bigger dinner table!");

guests.unshift("Haytham");

let middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Asad");
guests.push("Mariyam");
for (let guest of guests){
    console.log(`Dear ${guest}, you are invited to the dinner.Please Join Us!`);
}