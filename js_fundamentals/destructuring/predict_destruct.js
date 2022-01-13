// Problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

/* JS Output prediction 
randomCar - logs 'Tesla'
otherRandomCar - logs 'Mercedes'
*/

// Problem 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

/* JS Output prediction 
console.log(name) - produces an error because name variable no longer exists
console.log(otherName) - logs 'Elon' since the obj name property has be destructured to be otherName
*/

// Problem 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

/* JS Output prediction 
console.log(password) - logs the value '12345'
console.log(hashedPassword) - creates a new variable hashedPassword that will log undefined - does this belong to person now as a property?
*/

// Problem 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

/* JS Output prediction 
first = 2
second = 5
third = 2
console.log(first == second) - logs false?
console.log(first == third) - logs true?
*/

// Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);



/* JS Output prediction
console.log(key) - guessed undefined, logged value
console.log(secondKey) - guessed undefined, logged array
console.log(secondKey[0]) - guessed error, logged 1
console.log(willThisWork) - 5
*/