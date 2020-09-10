// variables





console.log('hello');
// The console log is a debugging tool

let a = 2;

/*
- let : is our keyword
- a : is our name of our variable
- = : is our assignment operator
- 2 : is our variable value
*/

let b = 1;

console.log(a + b)

// RESTRICTIONS
/*
 - a variable name must begin with a letter, underscore, or a dollar sign.
 - numbers may follow the above characters, BUT cannot come first.
 - javascript IS case sensitive - 'hello' and 'Hello', these would be different variables
 - no spaces are allowed in variable names
 - camelCase is the best practice for naming
 - ex:
    let myName = 'Sally';
    is easier to read than
    let myname = 'Sally';
*/

let startingWithLetter = "Works";
let _startWithUnderscore = "Works";
let $startWithDollarSign = "Works";
// let 4startWithNumber = 'Breaks';

console.log(startingWithLetter, _startWithUnderscore, $startWithDollarSign);

let PascalCase;
let camelCase
let snake_case;


/*KEYWORDS

var, let, const

    -var: 'old' keyword for variable.  ** We won't be using it as often but is still a viable one to use.

    -let: "new" keyword for variable. (introduced with ES6 *newest version of ECMAScript, which is a standardization of JS)

    -const: also "new" keyword that declares an UNCHANGEABLE, or constant, variable 
    */

    var variable = 'var variable';
    let letVariable= 'let variable';

    // let function = 1; Cannot use reserved words within a variable name - *function is a reserved word.

    /* DECLARATIONS & INITIALIZATIONS*/
    //Declarations are the LEFT side of the assignment operator
    //let x;

    //Initializations are the RIGHT SIDE of the assignment operator
    //let x = 10

    //10 is our initializations.

    let y;
    console.log('declaration:', y);

    y = 10;
    console.log('initialization:', y)

    y = 33;
    console.log('initialization 2: ', y);

    //var y

    //We've set our variable with our let keyword. With each iteration, we have redeclared what it is.

    let today = 'Great!';
    const efa = 'Wonderful!';
    console.log(today, efa);

    today = 'Awesome!';
    console.log(today, efa);

    // efa = "Super";
    console.log(today, efa);
    // const allows us to make a varibale that we don't want to change.