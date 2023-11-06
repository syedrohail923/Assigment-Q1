//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

let usernames = ['admin', 'Fiza', 'Zohaib', 'Kinza', 'Yasir'];

if (usernames.length === 0) {
  console.log('We need to find some users!');
} else {
  for (let i = 0; i < usernames.length; i++) {
    let username = usernames[i];
    
    if (username === 'admin') {
      console.log('Hello admin, would you like to see a status report?');
    } else {
      console.log('Hello ' + username + ', thank you for logging in again');
    }
  }
  
  usernames = [];
  
  if (usernames.length === 0) {
    console.log('We need to find some users!');
  }
}