//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var Guestlist2 = ["Hifza", "Iqra", "Fiza"];
console.log(Guestlist2[2] + " can't make it to the dinner.");
Guestlist2[2] = "Maham";
for (var i = 0; i < Guestlist2.length; i++) {
    console.log("Dear " + Guestlist2[i] + ",  you are invited. Please join us!");
}
