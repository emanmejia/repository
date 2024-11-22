const franklin = {
    name: "Franklin",
    wallet: 2000000,
    respect: 5,
    crew: "The Families",

    describe() {
        return `${this.name} is from ${this.crew} with a ${this.respect} respect level and $${this.wallet}`;
    }
}

// Here you will see the "This" keyword.  This is automatically set by JavaScript inside a method and represents the object on which the method was called. 

// The "describe()" method doesn't take any parameters.  It uses this to access the properties of the object on which it is called.

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,

    // Return the character description
    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points.`;
    }
};

console.log(franklin.describe());
console.log(aurora.describe());

aurora.health -= 20;
aurora.strength += 10;
aurora.xp += 15;

franklin.wallet -= 1562505;
franklin.respect -= 2;
franklin.crew = "The Lost MC";

console.log("--- Aurora after battle. ---");
console.log(aurora.describe());
console.log(franklin.describe());


/*
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25
};

// Return the character description
function describe(character) {
    return `${character.name} has ${character.health} health points and ${character.strength} as strength.`;
}

console.log(describe(aurora));
*/

/*
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25
};

console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength.`);

// Aurora is harmed by an arror
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength.`);

// Ex 3 will be the same but cleaner.
*/