let x = 10;
console.log(x)

//! 1: getElementById

console.log(document);
console.log(document.body);

//document.getElementById('testParagraph').style.color = "blue";

let testPara = document.getElementById('testParagraph');
testPara.style.color = 'red';
console.log(testPara);
//console.dir(testPara);

//Will get the first ID

//!2: Query Selector All & innerText/innerHTML
console.log(document.querySelectorAll('p.sampleClass'));
//querySelectorAll returns a NodeList
//Nodes are items in HTML like elements and text.

//document.querySelectorAll('p.sampleClass')[2].innerText = "My text has changed!";

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
    pTag.innerText = "My text has changed using a forEach() method.";
    pTag.textContent = "My text has changed using a forEach() method.";
    pTag.innerHTML = "My text has changed using a forEach() method.";
});

let showSpan = document.getElementById('spanTest');
console.log(showSpan.innerText);
console.log(showSpan.textContent);
console.log(showSpan.innerHTML);

/*
 -innerText simply reference or allows us to change the text of a specified element.
 Will return ONLY visible text in a "node".

 -textContent does the same thing that innerText does, but will return the FULL text of a 'node'

 -innerHTML allows us to see text as well as HTML elemnts, which will be nested
 inside of the current HTML element we're referencing. */

 //! 3: ADDEVENTLISTENER - click

 //let btn = document.getElementById("clickThis");

 /*btn.addEventListener('click', event => {
     event.target.style.backgroundColor= 'lightblue';
     event.target.innerText = 'CLICKED'
     console.log(btn)
 });*/

/*let btn = document.getElementById("clickThis");
btn.style.backgroundColor = 'red';
btn.addEventListener('click', event => {
    event.target.style.backgroundColor = 'green';   
});*/

btn = document.getElementById("clickThis");
let red = true;
btn.addEventListener('click', event => {
    event.target.style.backgroundColor = red ? 'blue' : 'red';
        red = !red;})

//4: ADDEVENTLISTNER - keyup

let input = document.getElementById('nameInput');
input.addEventListener('keyup', e => {
    console.log(e.target.value);
    //console.log(document.getElementsByTagName('p'))
    document.getElementsByTagName('p')[0].innerText = 'Something Changed!';

    if(e.target.value == '') {
        document.getElementsByTagName('p')[1].innerText =
        'nothing has been typed...'
    } else {
        document.getElementsByTagName('p')[1].innerText =
        `Everyone, say hello to ${e.target.value}`;
    }
    });