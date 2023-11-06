//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let guestslist = ["Hifza" , "Iqra" , "Maham" , "Asad" , "Mariyam"]
if (guestslist.length>2){
console.log("I can invite only 2 people for dinner.");

while (guestslist.length>2){ 
    let removed_guestslists = ["Asad ", "Mariyam " , "Maham"]
    guestslist.pop()
    console.log("Sorry, " + removed_guestslists + ", I can't invite you to dinner.")
    
} 
guestslist.forEach(function(guestslist) {
    console.log(guestslist + ",you're still invited to dinner.");
})};