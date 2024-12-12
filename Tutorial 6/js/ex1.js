// TODO: define the Dog class here
class Dog {
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  }
  bark() {
    if (this.zie > 60) {
      return "Grr! Grr!";
    } else {
      return "Woof! Woof!"
    }

    // Optional - Use Ternary Operator
    // Return (this.size > 60) ? "Grr! Grr!" : "Woof! Woof!";
  }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);