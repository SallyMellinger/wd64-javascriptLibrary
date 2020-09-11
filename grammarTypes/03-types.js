/*
* *********************
! TYPES
***********************

Data and Structure Types

    -Primative data Types:
        -boolean
        -undefined
        -number
        -string
            -bigInt*
            -symbol*
        -null
        -Object
        -Function

*/

//BOOLEANS

//A boolean has two possible values: true and false

let on = true;
let off = false;

console.log(on);

// ? Null - Intentional Empty
// A null value is an empty value. Think of it as an empty containerthat has space to fill.

let empty = null;
console.log(empty);

// UNDEFINED - Unintentional Empty
// No value has been assigned to a container

let undef = undefined;
console.log(undef);
let password;
console.log(password);

/* 
-Null is like a container with nothing in it.
-Undefined is when a variable has never been set, or hasn't been created yet.

Null you can trust, undefined you cannot.
*/

//NUMBERS

let degrees = 90;
console.log(degrees);

let precise = 999999999999999999;
console.log(precise);

let rounded = 9999999999999999999;
console.log(rounded);
//JS gives us spcae for 15 9s before rounding up.

let notQuite = 0.2 + 0.1;
console.log(notQuite);
//JS rounds out at a certain number, so if math is needed. be aware.

let whatIf = (0.2 *10 + 0.1 * 10);
console.log(whatIf)
let numbersAreHard = (0.2 * 10 + 0.1 * 10)/ 10;
console.log(numbersAreHard)
//console.log('.' + whatIf)

//STRINGS

// Strings represent text and are wrapped in either single or double quotes.

let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';
let bothQuotes = 'I said, "What about Bob?"'
console.log(doubleQuote, singleQuote);

let inception = "I've";
let singleQ = 'I\'ve';
console.log(inception, singleQ)

//Number vs. String

let addTheses = 1050 + 100;
console.log(addTheses)
// Analogy... writing 1050 on one sticky note and writing 100 on another sticky note and placing them next to each other.

let addTheseAlso = '1050' + '100';
console.log(addTheseAlso)
console.log(typeof addTheses);
console.log(typeof addTheseAlso);

//We can us the operator 'typeof' to return a string telling us what our variable type is.

let stringToNumber = Number('1150')
console.log(stringToNumber);
console.log(typeof stringToNumber);

//OBJECTS
/* 
    -Objects are used to store many values instead of a singular value.
    -Consider these as a collection of various properties.
    -denoted by curly brackets: {}
*/

let frodo = {
        race: 'hobbit', //string
        rings: 1, //number
        sting: true //boolean
}

console.log(frodo);
console.log(typeof frodo);

/*ARRAYS

    -Containers that hold a list of items.
    -denoted by square brackets: []
    -all items are within the square brackets.
    -regardless of datatype, each item is separated by a comma.
    */

let arrayList = ['pos 1', 'pos 2', 'pos 3'];
console.log(arrayList);

let anotherExample = [1, 2, 'three', true]
console.log(anotherExample);

console.log(typeof anotherExample);
// js classified arrays as objects and not a datatype of their own.

/*ADDITION VS. CONCATENATION

    -JS sees the "+" symbol in two different ways
        -When combined with numbers, uses built-in math functionality.
        -When combined with strings, it ignores the math and concats the two strings.
*/

let strings = 'one' + ' ' + 'is a number';
let concatDiff = 1050 + '100';
console.log(strings);
console.log(concatDiff);
console.log(typeof concatDiff);

/*
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

/*let firstName = 'Sally';
let lastName = 'Mellinger';
let houseNumber = 705;
let street = 'Man-Chester';
let city = 'Rochester';
let state = 'IN';
let zipcode = '46975';*/

let address = {
    houseNumber: 705,
    street: 'Man-Chester',
    city: 'Rochester',
    state: 'IN',
    zipcode: "46975",
}

/*console.log(houseNumber, street,'\n',city, state, zipcode)*/
console.log(address);

//STRING PROPERTIES

/*
    -strings have properties, or the qualities associated with that string.
    -the length of a string is a property
    */

let myName = "Eric";
console.log(myName.length);

/*STRING: Methods

    -methods are tools that can help us manipulate our data*/

let myNameIs = 'Eric';
console.log(myNameIs.toUpperCase());
console.log(myNameIs.toLowerCase());

let home = 'My home is Fishers';
console.log(home.includes('Fishers'))

