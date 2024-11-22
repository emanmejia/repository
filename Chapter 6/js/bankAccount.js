const bankAccount = {
    name: "Eman",
    balance: 0,
    credit: function(amount) {
        this.balance += amount;
    },
    debit: function(amount) {
        this.balance -= amount;
    },

    describe: function() {
        return `owner: ${this.name}, balance ${this.balance}.`;
    }
};

// initial description
console.log(bankAccount.describe());

// credit 4400
bankAccount.credit(4400);

// debit 80
bankAccount.debit(80);

//show updated description
console.log(bankAccount.describe());

// initial description
console.log("after payday and date night");

// credit 2000
bankAccount.credit(2000);

// debit 450
bankAccount.debit(450);

//show updated description
console.log(bankAccount.describe());

