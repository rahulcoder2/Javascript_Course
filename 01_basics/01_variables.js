const accountId = 123456;

let accountEmail = "rahulchaudhary@gmail.com";

var accountPassword = "rahul1230";

cityName = "chitwan"; // it save memory but not recommend 

let userStatus;

// let change value of variables

// accountId = 123445 // not allowed due to Assignment constant variable.

console.log(accountId);

accountEmail = "rahulchau2@gmail.com";
accountPassword = " 12456789";
cityName = "bharatpur";

/*
    now let learn how to print all variables data at once
*/

console.table([accountId, accountEmail, accountPassword, cityName, userStatus])

/*
Note:
    now in modern js we only use let and const. but in some old code there was use of var variable but not now because when we use var variable there was issue in block scope and function scope.
*/

/* 
    if you doesn't know what is scope let assume for now semi-bracket 
{
    scope
}

*/