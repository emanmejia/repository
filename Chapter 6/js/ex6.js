const dog = {
    name: "Luna",
    health: 100,
    species: "Pit Mix",
    size: 72,
    
    bark() {
        return `Woof! Woof!`;
    }
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look a cat! ${dog.name} barks: ${dog.bark()}`);
