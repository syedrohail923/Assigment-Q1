//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
var current_users = ["Hifza", "Shifa", "Bisma", "Kinza", "Alina"];
var new_users = ["Hifza", "Alina", "Yasir", "Yousuf", "Khizar"];
for (var i = 0; i < new_users.length; i++) {
    var new_username = new_users[i];
    var has_match = false;
    for (var j = 0; j < current_users.length; j++) {
        var current_username = current_users[j];
        if (new_username.toLowerCase() === current_username.toLowerCase()) {
            has_match = true;
            break;
        }
    }
    if (has_match) {
        console.log("The username '".concat(new_username, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_username, "' is available."));
    }
}
