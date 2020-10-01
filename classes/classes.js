/*
*********CLASSES*******
    - Classes can be defined by either expression or declaration.
    - Classes are functions.
    - Classes act as a bluepriint for creating objects.
        ex. model could be a property of a class of automobile. Each new automobile we create that's a 
        copy of our original class and could have a different value for the property model.
    - Body of a classes is between {}
    - Constructor method is a special method for creating and initailizing an object that was created
    with a class.
        - There can only be ONE constructor method.
        - Can use the keyword "super"
        - The super keyword is used to access and call fucntions on an object parent.
    - Introduced in ES5
    - New way to write previous existing prototype-based inheritance.
    - Closest thing in vanilla JS to OOP.

************* CLASS DECLARATION ***********
*/

class Automobile {
    constructor(make, model){
        // instanced properties must be defined inside of class methods, like the constructor method.
        this.make = make;
        this.model = model;
    }
}

// Hoisting: Unlike function declarations, class declarations are not hoisted. A class declaration needs to be declared before accessing it.

/* 
********* CLASS EXPRESSION ********

- can be named or not named
- the name giv en to an unamed class expression is local to the class's body.
    - The name of a named class can be retreived through the class's name property
*/

//*unnamed

let vehicle = class {
    constructor(make, model) {
    this.make = make;
    this.model = model;
    }
}
console.log(vehicle.name);

//*named

let Auto = class Mobile {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
};
console.log(Auto.name);

/*
******** METHODS *******
 - Introduced in ES5
     - protogype methods are shorter for method definitions.*/

     // Method Definitions: OLD SYNTAX
     const automobile = {
         start: function() {
             //
         },
         stop: function() {
             //
         }
     };

     //Prototype Method: NEW SYNTAX  ***** So... basically... a method is a function that belongs to a class?
     const autoMobile = {
         start() {
             //
         },
         stop() {

         }
     };

     class AutoMobile {
         constructor(make, model) {
             this.make = make;
             this.model = model;
         }
     //method 1
     start() {
         console.log(`This ${this.make} ${this.model}'s engine started.`);
     }

     //method 2
     stop() {
         console.log(`This ${this.make} ${this.model}'s engine stopped.`)
     }
    };

    /*
    ******* NEW INSTANCE ******
        - using the keyword 'new' we can create a new object/instance of the AutoMobile class.
    */
//new object/instace of the class

let hondaCivic = new AutoMobile('Honda', 'Civic');
hondaCivic.start();
hondaCivic.stop();
let fordEscape = new AutoMobile('Honda', 'Civic');
hondaCivic.start();
hondaCivic.stop();

/*
*********** CONSTRUCTOR METHOD ***********
    - Helps create and initialize an object created from a class.
    - Works along with the "new" keyword.
    - Needs to be included to create new objects and instance of our class.
        - set properties.
        - passes values for properties.
*/

class Cookie {
    constructor(type, icing, shape) {
        // the parameters we note will be the values we want passed and stored in the object.
        this.t = type;
        this.i = icing;
        this.s = shape;
    /// LEFT SIDE: assigning keys for the values we pass in.
        // RIGHT SIDE: the accepted values from our parameters.
    }
}

let chocolateChip = new Cookie('chocolate chip', false, 'circle');
console.log(chocolateChip.type)//will come back undefined.
console.log(chocolateChip.t);
console.log(chocolateChip.i);
console.log(chocolateChip.s);


/*

********* EXTENDS *********

 - keyword used in class declarations/expression to create a new class.
 - each new clas created inhertis the properties and methods from the parent class.
 - can have it's own properties and methods.
    - also known as a subclass.
*/

//* PARENT

class Animal {
    constructor(name) {
        this.name = name;
}

eat() {
    console.log(`${this.name} eats their food.`);
}
}

//* SUBCLASS
class Dog extends Animal {
    constructor(name; breed){
        super(name); // 'super' prior to 'this' keyword will cause error.
        this.type = breed;
    }

    play(){
        console.log(`The ${this.type} named ${this.name} fetches the ball!`)
    }
}

let Fido = new Dog('Fido', 'mutt');
Fido.eat();
Fido.play();
//Animal.play(); //breaks - can't access method within dog
