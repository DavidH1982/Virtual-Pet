class Animal {
  constructor(
    name,
    age,
    eating,
    boredom,
    happiness,
    tiredness,
    hunger,
    exercise,
    health,
    thirst,
    love,
    energy
  ) {
    this.name = name;
    this.age = age;
    this.eating = eating;
    this.boredom = boredom;
    this.happiness = happiness;
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.exercise = exercise;
    this.health = health;
    this.thirst = thirst;
    this.love = love;
    this.energy = energy;
  }
  eatFood() {
    this.hunger--;
    this.thirst++;
    this.energy++;
    this.happiness++;
    this.health++;
  }
  bored() {
    this.boredom++;
    this.happiness--;
    this.hunger++;
    this.tiredness++;
    this.health--;
    this.energy--;
    this.love--;
  }

  happy() {
    this.happiness++;
    this.boredom--;
    this.tiredness--;
    this.health++;
  }
  tired() {
    this.tiredness++;
    this.health--;
  }
  playTime() {
    this.health++;
    this.happiness++;
    this.tiredness++;
    this.boredom--;
    this.energy++;
  }
  birthday() {
    this.age++;
  }
}
class Cat extends Animal {
  constructor(
    name,
    age,
    eating,
    boredom,
    happiness,
    tiredness,
    hunger,
    exercise,
    health,
    thirst,
    love,
    energy
  ) {
    super(
      name,
      age,
      eating,
      boredom,
      happiness,
      tiredness,
      hunger,
      exercise,
      health,
      thirst,
      love,
      energy
    );
  }
}
class Dog extends Animal {
  constructor(
    name,
    age,
    eating,
    boredom,
    happiness,
    tiredness,
    hunger,
    exercise,
    health,
    thirst,
    love,
    energy
  ) {
    super(
      name,
      age,
      eating,
      boredom,
      happiness,
      tiredness,
      hunger,
      exercise,
      health,
      thirst,
      love,
      energy
    );
  }
}
class Rabbit extends Animal {
  constructor(
    name,
    age,
    eating,
    boredom,
    happiness,
    tiredness,
    hunger,
    exercise,
    health,
    thirst,
    love,
    energy
  ) {
    super(
      name,
      age,
      eating,
      boredom,
      happiness,
      tiredness,
      hunger,
      exercise,
      health,
      thirst,
      love,
      energy
    );
  }
}

let animal1 = new Cat("Roy", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
let animal2 = new Dog("Richmond", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
let animal3 = new Rabbit("Larry", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

console.log(animal2);
animal2.eatFood();
animal2.bored();
animal2.playTime();
animal2.happy();
animal2.happy();
animal2.happy();
animal2.happy();
animal2.tired();
console.log(animal2);
