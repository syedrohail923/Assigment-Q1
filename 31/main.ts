//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

let current_users  = ["Hifza" , "Shifa" , "Bisma" , "Kinza" , "Alina"];
let new_users = ["Hifza" , "Alina" , "Yasir" , "Yousuf" , "Khizar"]
for (let i = 0; i < new_users.length; i++)
{
    let new_username = new_users[i];
    let has_match = false;
    for (let j = 0; j < current_users.length; j++) {
        let current_username = current_users[j];
        if (new_username.toLowerCase() === current_username.toLowerCase()) {
            has_match = true;
            break;
        }
    }
    if (has_match) {
        console.log(`The username '${new_username}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${new_username}' is available.`);
    }
}