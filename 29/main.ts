//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let usernames = ["admin", "Yasir", "Zohaib", "Hira", "Kinza"];

for (let i = 0; i < usernames.length; i++) 
{
    if (usernames[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?.");
    } else {
        console.log("Hello " + usernames[i] + ", Thank you for logging in again.");
    }
}