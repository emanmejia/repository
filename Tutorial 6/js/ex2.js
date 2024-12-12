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


console.log("/////// You can still access the objects. For example ///////")
accounts2[0].credit(500);
console.log(accounts2[0].describe()); // Returns Sean w/ 1500
accounts2[2].credit(-580);
console.log(accounts2[2].describe()); // Returns George w/ 420
