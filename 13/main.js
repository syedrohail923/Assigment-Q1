//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var Guestlist = ["Hifza", "Iqra", "Fiza"];
Guestlist.forEach(function (person) {
    console.log("Dear " + person + ", I want to invite you for a dinner at my house. Please let me know if you can make it!.");
});
