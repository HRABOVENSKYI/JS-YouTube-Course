// implicit binding
const person = {
    name: 'Teodor',

    sayMyName: function() {
        console.log(`My name is ${this.name}`);
    }
}

person.sayMyName(); // My name is Teodor





// explicit binding
function sayMyName() {
    console.log(`My name is ${this.name}`);
}

sayMyName.call(person); // My name is Teodor





// new binding
function Person(name) {
    // this = {}
    this.name = name;
}

const p1 = new Person('Teodor');
const p2 = new Person('Batman');

console.log(p1.name); // Teodor
console.log(p2.name); // Batman





// Default binding
sayMyName() // My name is undefined, because we take global 'this', which does not have name property