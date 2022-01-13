let verified = true;
let loggedin = true;
let hasPaid = true;
let isGuest = true;

if(verified && loggedin && hasPaid){
    console.log("Access granted to paid course!");
}
else if(verified || isGuest){
    console.log("Guest access granted");
}
else{
    console.log("no access granted");
}
