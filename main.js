function Person(fName, lNAme) {
    this.firstName = fName;
    this.lastName = lNAme;
}

const p1 =  new Person('Bruce', 'Wayne');
const p2 =  new Person('Clark', 'Kent');

p1.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}

console.log(p1.getFullName()); // Bruce Wayne
// console.log(p2.getFullName()); // throws an error


Person.prototype.getFullName = function() { // PROTOTYPE
    return this.firstName + ' ' + this.lastName;
}

console.log(p1.getFullName()); // Bruce Wayne
console.log(p2.getFullName()); // Clark Kent







// inheritansce
function SuperHero(fName, lName) {
    Person.call(this, fName, lName);
    this.isSuperHero = true;
}
SuperHero.prototype.fightCrime = function() {
    console.log('Fighting crime');
}
SuperHero.prototype = Object.create(Person.prototype); // we write this to inherit methods from the Person class
SuperHero.prototype.constructor = SuperHero // because before it was Pesron

const batman = new SuperHero('Bruce', 'Wayne');
console.log(batman.getFullName()); // Bruce Wayne
console.log(SuperHero.prototype.constructor) // [Function: SuperHero]


