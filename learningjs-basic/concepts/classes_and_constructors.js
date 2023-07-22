// Inheritance

class Person {
    talk() {
        return console.log("Talking");
    }
}

const me = new Person();
const you = new Person();

me.talk();
you.talk();

// assignment of new attributes
me.age = 12;

console.log("Assignment of attributes")
console.log(me.age);
console.log(you.age);

// using prototype to fix original class bugs or add new functions to the class

console.log("Using protoypes to modify or add functions")

Person.prototype.talk = function() {
    return console.log("Changed talk");
}

Person.prototype.walk = function() {
    return console.log("Walking at the age of " + this.age);
}

me.talk();
you.talk();

me.walk();
you.walk();

// constructor function
// non-proto version, directly nested under the construction, talk becomes a property and not a method
// changes itself to the constructor function properties are immutable
// instances of the constructor can be changed
// changes to classes are cascaded, changes to classes are done via prototyping
// separate properties (things the object has, use constructors) vs  methods (things the object will do)

console.log("Constructors vs Classes")

function AnotherPerson() {
    this.age = 0;
    this.talk = function () {
        return console.log("I'm talking.")
    }
}

const they = new AnotherPerson();

console.log(they.age + " - this is the initial value taken from the constructor");

AnotherPerson.age = 10;
const them = new AnotherPerson();

console.log("we tried to modify the .age property of the constructor but by assigning a value of 10 but the objects do not inherit them, constructors are immutable")
console.log(they.age);
console.log(them.age) + " - this was created after assigning a value of 10 to the constructor but it didn't carry over";

console.log("but we can assign properties individually to the instances of the constructor")
them.age = 2
them.name = "Jared";
console.log(them.age);
console.log(them.name);

// class extension

console.log("Class Extension")

class Scientist extends Person {
    doScience() {
        console.log("I'm doing science!")
    }
}

const scientician = new Scientist();

scientician.talk();
scientician.doScience();

// ideally classes contain constructors and methods see sample code below

/*
class PersonClass {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    introduce() {
        console.log(
        `Hi, my name is ${this.name}. I am ${this.age} years old and I am ${this.height}cm tall.`
        );
    }
}
*/