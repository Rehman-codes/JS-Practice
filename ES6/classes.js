/* ---------------------- Key Concepts of Classes in JavaScript ----------------------
Class Declaration: The simplest way to define a class.
Constructor: A special method for creating and initializing an object created with a class.
Methods: Functions defined within a class.
Inheritance: Using extends to create a class that inherits from another class.
Static Methods: Methods that belong to the class itself, not instances of the class.
Getters and Setters: Special methods to get and set the values of properties. 
*/

// -------------------------------------Basic Class Declaration -------------------------------------
class Animal {
    // Constructor method to initialize the object
    constructor(name, age) {
        this.name = name; // public instance property
        this.age = age; // public instance property
    }

    // Instance Method
    speak() {
        console.log(`${this.name} makes a sound.`);
    }

    // Getter
    get description() {
        return `${this.name} is ${this.age} years old.`;
    }

    // Setter
    set rename(newName) {
        this.name = newName;
    }

    // Static Method
    static info() {
        console.log("Animals are multicellular, eukaryotic organisms of the kingdom Animalia.");
    }
}

// Creating an instance of Animal
const dog = new Animal("Rex", 5);
dog.speak(); // Rex makes a sound.
console.log(dog.description); // Rex is 5 years old.

dog.rename = "Max"; // Using setter to change the name
console.log(dog.description); // Max is 5 years old.

Animal.info(); // Animals are multicellular, eukaryotic organisms of the kingdom Animalia.

//  -------------------------------------Inheritance: Extending a Class -------------------------------------
class Dog extends Animal {
    // Constructor for the subclass
    constructor(name, age, breed) {
        super(name, age); // Call the parent class constructor
        this.breed = breed; // Additional property specific to Dog
    }

    // Overriding the speak method
    speak() {
        console.log(`${this.name}, the ${this.breed}, barks.`);
    }
}

// Creating an instance of Dog
const bulldog = new Dog("Buddy", 3, "Bulldog");
bulldog.speak(); // Buddy, the Bulldog, barks.
console.log(bulldog.description); // Buddy is 3 years old.

//  -------------------------------------Private Fields and Methods (Supported in modern JavaScript) -------------------------------------
class Cat {
    // Private field (with a # prefix)
    #name;
    #age;

    // Constructor method to initialize the object
    constructor(name, age) {
        this.#name = name; // private instance property
        this.#age = age; // private instance property
    }

    // Public method
    speak() {
        this.#logSound(); // calling private method
        console.log(`${this.#name} meows.`);
    }

    // Private method
    #logSound() {
        console.log("Logging sound...");
    }

    // Getter for private field
    get name() {
        return this.#name;
    }

    // Setter for private field
    set name(newName) {
        this.#name = newName;
    }

    // Getter for private field
    get age() {
        return this.#age;
    }

    // Setter for private field
    set age(newAge) {
        this.#age = newAge;
    }
}

// Creating an instance of Cat
const cat = new Cat("Whiskers", 2);
cat.speak(); // Logging sound... Whiskers meows.
console.log(cat.name); // Whiskers

cat.name = "Shadow"; // Using setter to change the name
console.log(cat.name); // Shadow

// Static method example
Cat.info = function() {
    console.log("Cats are small, carnivorous mammals that are often kept as pets.");
};

Cat.info(); // Cats are small, carnivorous mammals that are often kept as pets.

//  -------------------------------------Class Expression -------------------------------------
const Bird = class {
    constructor(species) {
        this.species = species;
    }

    fly() {
        console.log(`${this.species} is flying.`);
    }
};

// Creating an instance of Bird
const eagle = new Bird("Eagle");
eagle.fly(); // Eagle is flying.
