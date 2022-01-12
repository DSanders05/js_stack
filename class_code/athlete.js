//Create a class using the class keyword
class Athlete{
    //constructor functions run when a new athlete object is created and this function will initialize the new athlete with the atribute defined in the constructor function
    constructor(nameInput, speed){
        this.name = nameInput;
        this.energy = 100;
        this.speed = speed;
        this.strength = 75;
        this.teammate = null;
    }
    //outside constructor are functionalities that the Athlete instances themselves can perform but still within the class itself
    sayName(){
        console.log("My name is " + this.name)
    }

    playGame(sportName, energySpent){
        console.log(`${this.name} is playing ${sportName}`);
        console.log(this.energy -= energySpent);

    }
}

//creating instances of the Athlete class below --> you can also refer to these as Athlete objects
let a1 = new Athlete("Jordan", 90)
let a2 = new Athlete("Serena", 73)
let a3 = new Athlete("Phelps", 85)

// a3.teammate = a2
// console.log(a1)
// console.log(a2)
// console.log(a3)
a1.sayName()
a2.sayName()
a3.sayName()

a2.playGame("Tennis", 20)

/* 
Inheritance -> We can create a "sub" class that inherits from a parent class with more specific properties, features, and functionality.
See Below
*/

class Swimmer extends Athlete{
    constructor(){
        super("Alonso", "92");
        this.lungCapacity = 100;
    }
}

//creates and instance of the swimmer class that inherits attributes from parent Athlete class
let swimmer1 = new Swimmer()

console.log(swimmer1)
swimmer1.sayName() //Swimmer can do everything the Athlete parent class can do plus what is defined in Swimmer class itself
