// Create an account class
class account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }
  credit(amt) {
    this.balance += amt;
  }
  describe() {
    return `owner: ${this.name}, balance: ${this.balance}`
  }
}

// Let's test
// const testAcct = new account("Joe");
// let acctDesc = testAcct.describe();
// console.log(acctDesc);

// testAcct.credit(100);
// console.log(testAcct.describe());  //Short cut

////////////////// METHOD 1

console.log("/////////////////// Method 1 ///////////////////");
// Create three accounts
const seanAccount = new account("Sean");
const bradAccount = new account("Brad");
const georgesAccount = new account("Georges");

// Credit the accounts
seanAccount.credit(1000);
bradAccount.credit(1000);
georgesAccount.credit(1000);

// Display accounts
console.log(seanAccount.describe());
console.log(bradAccount.describe());
console.log(georgesAccount.describe());

////////////////// Method 2
console.log("/////////////////// Method 2 ///////////////////");

// Put the account objects in an array and iterate to credit and describe
const accounts = [];
accounts.push(seanAccount);
accounts.push(bradAccount);
accounts.push(georgesAccount);

// Iterate (note, balance will now be 2000)
accounts.forEach(account => {
  account.credit(1000);
  console.log(account.describe());
})


////////////////// Method 3

console.log("/////////////////// Method 3 ///////////////////");
// Create an array with the names
// Use a loop to create the objects, credit each object, and describe

const names = ["Sean", "Brad", "Georges"];

// Create an array to store the accounts
const accounts2 = [];

names.forEach(name => {
  x = new account(name);  
  // Add this to the accounts2 array to have visibility outside the loop.
  accounts2.push(x);

  x.credit(1000);
  console.log(x.describe());
});

// You can still access the objects.
// For example
accounts2[0].credit(500);
console.log(accounts2[0].describe());

////////////////// Method 4

console.log("/////////////////// Method 4 ///////////////////");
// Same as Method 3, but use an index in the forEach loop

const names4 = ["Sean", "Brad", "Georges"];

// Create an array to store the accounts
const accounts4 = [];

names4.forEach((name, idx) => {
  accounts4.push(new account(name));

  accounts4[idx].credit(1000);
  console.log(accounts4[idx].describe());
})

////////////////// Method 5
// Only included this per class discussion

console.log("/////////////////// Method 5 ///////////////////");

// What if I have an array of names and I want to create object with "acct" appended?  For example: acctSean, acctBrad, acctGeorges

// There are several approaches, see the following link:
// https://www.geeksforgeeks.org/how-to-use-dynamic-variable-names-in-javascript/

// Let's use the Map method mentioned in class.
// Will store key, value pairs as follows:
// key: the variable for the object: "acct"+Name (e.g. acctSean)
// value: the account object (e.g. new account("Sean"))

// So, the key is the name of the varialbe we wanted 
// and the value is the object created

// Given
const names5 = ["Sean", "Brad", "Georges"];

// Create the mapping variable and map each key to an object
const acctMap = new Map();
names5.forEach(name => {
  acctMap.set(`acct${name}`, new account(name));
});

// Loop through the acctMap to credit the account and describe
acctMap.forEach((value, key) => {
  value.credit(1000);
  console.log(value.describe());
});
// The above works, but all we did is iterate through the objects
// How do I access the object with the name?

// Use the "get" method of the Map.  e.g.
console.log(acctMap.get("acctSean").describe());






