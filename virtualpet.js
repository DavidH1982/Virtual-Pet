const inquirer = require("inquirer");
const loadingbar = require("loadingbar");

class pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  food = 10;
  drink = 10;
  hunger = 20;
  thirst = 10;
  sleep = 100;
  energy = 30;
  play = 5;
  health = 10;
  age = 1;

  feed() {
    console.log(`${this.name} is eating`);
    this.food += 25;
    this.drink += 10;
    this.hunger -= 20;
    this.thirst -= 5;
    this.energy += 40;
    this.health += 10;
    this.food = Math.min(100, this.food);
    this.drink = Math.min(100, this.drink);
    this.hunger = Math.max(0, this.hunger);
    this.thirst = Math.max(0, this.thirst);
    this.energy = Math.min(100, this.energy);
    this.health = Math.min(100, this.health);
    console.log(`Hunger:`, loadingbar(this.hunger), this.hunger);
    console.log(`Thirst:`, loadingbar(this.thirst), this.thirst);
    console.log(`Energy:`, loadingbar(this.energy), this.energy);
    console.log(`Health:`, loadingbar(this.health), this.health);
  }
  drinks() {
    console.log(`${this.name} is drinking`);
    this.drink += 20;
    this.thirst -= 15;
    this.health += 10;
    this.drink = Math.min(100, this.drink);
    this.thirst = Math.max(0, this.thirst);
    this.health = Math.min(100, this.health);
    console.log(`Thirst:`, loadingbar(this.thirst), this.thirst);
    console.log(`Health:`, loadingbar(this.health), this.health);
  }
  sleeping() {
    console.log(`${this.name} is sleeping`);
    this.hunger += 10;
    this.thirst += 10;
    this.energy += 50;
    this.sleep += 50;
    this.health += 30;
    this.hunger = Math.min(100, this.hunger);
    this.thirst = Math.min(100, this.thirst);
    this.energy = Math.min(100, this.energy);
    this.sleep = Math.min(100, this.sleep);
    this.health = Math.min(100, this.health);
    console.log(`Hunger:`, loadingbar(this.hunger), this.hunger);
    console.log(`Thirst:`, loadingbar(this.thirst), this.thirst);
    console.log(`Energy:`, loadingbar(this.energy), this.energy);
    console.log(`Sleep:`, loadingbar(this.sleep), this.sleep);
    console.log(`Health:`, loadingbar(this.health), this.health);
  }
  plays() {
    console.log(`${this.name} is playing`);
    this.energy -= 60;
    this.hunger += 40;
    this.thirst += 50;
    this.food -= 30;
    this.drink -= 40;
    this.sleep -= 50;
    this.play += 45;
    this.energy -= 20;
    this.health += 20;
    this.energy = Math.max(0, this.energy);
    this.hunger = Math.min(100, this.hunger);
    this.thirst = Math.min(100, this.thirst);
    this.food = Math.max(0, this.food);
    this.drink = Math.max(0, this.drink);
    this.sleep = Math.max(0, this.sleep);
    this.play = Math.min(100, this.play);
    this.energy = Math.max(0, this.energy);
    this.health = Math.min(100, this.health);
    console.log(`Energy:`, loadingbar(this.energy), this.energy);
    console.log(`Hunger:`, loadingbar(this.hunger), this.hunger);
    console.log(`Thirst:`, loadingbar(this.thirst), this.thirst);
    console.log(`Sleep:`, loadingbar(this.sleep), this.sleep);
    console.log(`Fun:`, loadingbar(this.play), this.play);
    console.log(`Energy:`, loadingbar(this.energy), this.energy);
    console.log(`Health:`, loadingbar(this.health), this.health);
  }
  birthday() {
    this.age++;
    this.health -= 20;
  }
}

let myPet;

const init = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "type",
        message: "What type of pet do you want?",
        choices: [
          "Cat",
          "Dog",
          "Hamster",
          "Rabbit",
          "Pony",
          "Tarantula",
          "Lizard",
          "Goldfish",
        ],
      },
      {
        type: "input",
        name: "name",
        message: "What is your pets name?",
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
      myPet = new pet(answers.name, answers.type);
    })
    .then(() => gameLoop())
    .catch((error) => {
      console.log(error);
    });
};
const gameLoop = () => {
  //   console.log(myPet)

  // if (
  //   myPet.food <= 0 ||
  //   myPet.drink <= 0 ||
  //   myPet.health <= 0 ||
  //   myPet.energy <= 0
  // ) {
  //   console.log(`${myPet.name} has died`);
  //   return; // if condition is met the function will end here
  // }

  if (myPet.energy < 30) {
    console.log(`${myPet.name} is tired`);
  }
  //   myPet.degradeValues()
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: ["Eat", "Drink", "Sleep", "Play", "Check Stats"],
      },
    ])
    .then((answer) => {
      if (answer.action === "Eat") {
        myPet.feed();
      } else if (answer.action === "Drink") {
        myPet.drinks();
      } else if (answer.action === "Sleep") {
        myPet.sleeping();
      } else if (answer.action === "Play") {
        myPet.plays();
      } else if (answer.action === "Check Stats") {
        console.log(`${myPet.type} named ${myPet.name}`);
        console.log(`Food Level: ${myPet.food}`, loadingbar(myPet.food));
        console.log(`Drink Level: ${myPet.drink}`, loadingbar(myPet.drink));
        console.log(`Hunger: ${myPet.hunger}`, loadingbar(myPet.hunger));
        console.log(`Thirst: ${myPet.thirst}`, loadingbar(myPet.thirst));
        console.log(`Sleep Level: ${myPet.sleep}`, loadingbar(myPet.sleep));
        console.log(`Energy Level: ${myPet.energy}`, loadingbar(myPet.energy));
        console.log(`Fun: ${myPet.play}`, loadingbar(myPet.play));
        console.log(`Health: ${myPet.health}`, loadingbar(myPet.health));
        console.log(`Age: ${myPet.age}`);
      }
    })

    .then(() => gameLoop());
};
init();
