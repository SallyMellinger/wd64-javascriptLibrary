/*
********************
ARROW FUNCTIONS
********************

Arrow functions are expresssional functions that can be simplified into one of two forms, CONCISE and BLOCK BODY. The
main goal is to generate shorter syntax for writing a function.

**Arrow Functions also DO NOT get hoisted.

*/

function regFunc() {
    console.log('Regular');
}

regFunc();


let arrowFunc = () => console.log(5>8);
arrowFunc(); // 


//CONCISE vs. BLOCK BODY

//CONCISE

let cBody = (x, y) => console.log(x + y);
cBody(1,2);

let slightlyComplex = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) : console.log (`${x} and ${y} are where we want them`);

slightlyComplex(3,1);
slightlyComplex(1,5);

//BLOCK - the 'return' keyword IS required. We also include the curly braces.

let blockArrow = (x,y) => {
    return `${x} are within a ${y}`;
}

console.log(blockArrow('We', "Black Body"));

let sampleBlock = x => {
    console.log(x)
}

sampleBlock(99);

