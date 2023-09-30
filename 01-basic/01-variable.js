const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = '12345'
accountCity = "jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "hc@ch.com"
accountPassword = "22334455"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
becouse of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountId,accountState])