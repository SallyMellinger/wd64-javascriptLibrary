/*
***********
SCOPE
***********

What is scope?

 -scope is how a computer keeps track of all the variables in a program.
 -scope can also be nested, where there's an out scope (global) that encloses an inner scope.


*/

const scope = 'Earth'; // this is currently in the global scope of our JS file.

function localScope() {
   // let scope = "Indiana"; // the state (local) within the JS "world/Globe"
    //console.log(`${scope} marks the local scope`);

    let place = 'Bloomington';

    function veryLocalScope() {
        //let scope = 'Indianapolis';
        console.log(`${scope} is the capital of Indiana`)
        console.log(`Just outside, we went to ${place}.`)
    }
    veryLocalScope();

};

console.log((`${scope} marks the global scope.`));
localScope();
//Scope Chain: If a variable is not found, JS attempts to localte the requested information outside

//ORDER MATTERS


//REASSIGNMENTS / VAR vs LET
// - var is scoped to the nearest function blog.
// - let is scoped to the nearest enclosing block.

let a = 10;
    function reassign() {
        a = 30 // we are keeping this varibable open and, with the "let" keyword, we are capable of changing the value this currently being held with that variable.
        console.log(`a is being set to ${a} in this function.`);
    }