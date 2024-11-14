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