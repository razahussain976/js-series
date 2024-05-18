const accountId = 112233;
let accountEmail = "raza@gmail.com";
var accountPassword = "12345";
accountcity = "lahore";     
let accountState
console.log(accountId,accountEmail,accountPassword,accountcity,accountState);

/*
prefer not to use var
because of issue in block scop and function scope

*/

accountEmail = "ramis@gmail.com";
accountPassword = "22223322";
accountcity = "karachi";

console.table([accountId,accountEmail,accountPassword,accountcity,accountState]);