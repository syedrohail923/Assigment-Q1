//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
var guests = ["Hifza", "Iqra", "Maham"];
console.log("Great news! We found a bigger dinner table!");
guests.unshift("Haytham");
var middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Asad");
guests.push("Mariyam");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to the dinner.Please Join Us!"));
}
