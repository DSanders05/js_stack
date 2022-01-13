//Create a Ninja class with attribute name, health, speed, strength
//Along with these attributes include methods for sayName(), showStats(), and drinkSake()

class Ninja{
    constructor(ninjaName, ninjaHealth){
        this.name = ninjaName;
        this.health = ninjaHealth;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`${this.name} is my name.`);
    }

    showStats(){
        console.log(`${this.name}\'s stats are: \n Health: ${this.health}\n Speed: ${this.speed}\n Strength: ${this.strength}`);
    }

    drinkSake(){
        console.log(`${this.name} sits to enjoy a nice mug of sake. Health has been imporved by +10 points!`);
        this.health += 10;
    }
}

let Raiden = new Ninja("Raiden", 120);

Raiden.sayName();
Raiden.showStats();
Raiden.drinkSake();
Raiden.showStats();


/* 
Super Ninja Assignment - Extend Ninja class and create the Sensei class. Sensei's should have 200 health, 10 Speed, and 10 Strength by default.
Additionally a Sensei should posess a new attribute called wisdom and that default should also be 10.
Finally add a method for speakWisdom() which should call on the drinkSake() method created before and console.log a wise message along with it.
*/

class Sensei extends Ninja{
    constructor(senseiName){
        super(senseiName, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        console.log("Cheers!")
        super.drinkSake();
    }
}

let SubZero = new Sensei("SubZero");

SubZero.speakWisdom();