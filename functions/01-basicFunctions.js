/*

****************
FUNCTIONS
****************
Functions are a process that we call upon to run an action. 
    -Take in input so that it can process it, modifiy it, or just respond to it.
    -Returns a value (but not always)
    -Can be invoked (called upon) as often as we need.
*/

//(1)     (2)
function hi(){
    console.log('Hi!');
}

//1: Keyword
//2: Name of the function and the parenthesis for the parameter.

// (1)      (2)       (3)
function functionName() {
//       (4)    
    return value
};
// (5)
functionName()

/*
    -1: KEYWORD "function"
    -2: NAME of "functionName"
    -3: PARAMETER "currently empty"
    -4: Statement "to process"
    -5: INVOKE "on switch"
*/


//Function Declaration
//A Check of code that performs a set actions when it is invoked
function funcOne() {
    console.log('Statement Here');
}

funcOne();

// Function Expression
//Assigning a function to a variable is what is called an EXPRESSION
let first = function funcTwo() {
    console.log('Second Statement');
};

first();

/*

//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  
If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59

instructor = 'Amanda'

switch(instructor) {
    case 'Ing':
    case 'Adam':
    case 'Eric':
    case 'Zach':
        console.log(`${instructor} is part of the Web Dev Team.`)
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
        console.log(`${instructor} is part of the Software Dev Team.`)
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches.`);

*/

/*
*************
PARAMETERS
*************
Function: think of rolling dice in an roleplaying game.  The rolling itself is the function.  
The parameters you send when you invoke it are the type of dice to roll and the number of dice you are going to roll.  
The function rolls the dice and returns the total (value). You can use that same function over and over again, 
just sending different dice and quantities to roll.
Allow us to accept information already declared.

*/

function parameterFunc(num) {
    console.log(num);
}

parameterFunc(2);
parameterFunc(9);


let returnedVal = 5;
parameterFunc(returnedVal);


let firstName = "Jane";
let lastName = "Doe";

function greeting(a, b) {
    console.log(`Hi, ${a}! Welcome back!`)
    console.log(`This is the first parameter: ${a}!`)
    console.log(`This is the second parameter: ${b}!`)
}

//greeting(firstName);
greeting(firstName, lastName);

let userName = 'Bill'

userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');

const userQuestion = 'Will I win the lottery?'
console.log(`${userName} asked: ${userQuestion}`)


let randomNumber = math.floor(Math.random() * 8);