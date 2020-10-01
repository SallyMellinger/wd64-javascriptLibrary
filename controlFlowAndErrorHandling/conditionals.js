/*
************
CONDITIONALS
**************

// FALSEY VALUE:

    -false
    -0
    -"", '', ``
    -null
    -undefined
    -NaN (Not a Number)


    When JS is expecting a boolean value and it is returned with one of these 6 values, it is evaluated as "falsy"


    /*
************
IF
************

    -"If" something is true, do "this thing"

    */

    let light = 'on';
    if(light== 'on'){
        console.log('The light is on')
    };

    let weather = 68;

    if (weather <= 70){
            console.log('Wear a jacket.')
    };


    /*let rain = true;
    if(weather < 70 && rain !=false){
        console.log('It is a little chilly and will possibly rain.')
    }*/

    let rain = true;
    if(weather < 70 && rain){ // rain = true
        console.log('It is a little chilly and will possibly rain.')
    };

    /*
************
IF ELSE
************

    -If/else statements allow us the ability to write out a chain of events.

    */

    let today = 75;

    if(today < 70){
        console.log('It is' + today + ', wear a jacket');
    } else [
        console.log('It is ' + today + ', No jacket needed.')
    ]

/*
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/


let myName ='Eric';

if(myName=='Sally'){
    console.log('Hello my name is ' + myName);
} else [
    console.log('Hello, is your name ' + myName)
];

    /*
************
ELSE IF
************

     This is a condition that would be checked if the above condition was not met.

    */

let cookTime = 40;

if(cookTime === 45) {
    console.log('let us feast!')
} else if(cookTime >= 30){
    console.log(`It has only been ${cookTime} minutes. Wait another 5 - 15 minutes.`)
} else if(cookTime >= 20){
    console.log(`It has only been ${cookTime} minutes. Wait another 10 - 25 minutes.`)
} else {
    console.log(`It has only been ${cookTime} minutes. Perhaps at least try cooking it...`)
}

//Interpolation  - a word to know


//! CHALLENGE
/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 25;

if(age >= 25) {
    console.log(`You can rent a car!`)
} else if(age >=21){
    console.log(`You can drink!`)
} else if(age >=18){
    console.log(`You can vote!`)
} else if(age <=17){
    console.log(`Sorry, you're too young to do anything!`)
}


/*
*************
TERNARIES
*************

    -This is a quick way of considering an if/else statement. We are capable of writing out our conditional in a simple line.
    */


   /*let Name ='Eric';

   /*
   if(Name=='Sally'){
       console.log('Hello my name is ' + Name);
   } else {
       console.log('Hello, is your name ' + Name)
    }; */
   
    //condition ? if true : else result
    
let name = 'Adam';

name === 'Eric' ? console.log(`Hello, my name is ${name}`) : console.log(`Hello is your name ${name}?`);


//! CHALLENGE


/*let isStudent = false;
let isSenior = true;
let price = isStudent ? 8 : isSenior ? 6 : 10
console.log(price);
// 6*/

condition ? value if true : value if false

// Take this if/else statement and make it into a ternary.
let lampOn = false;
let daytime = true;

/*if(lampOn == true && daytime != true) {
    console.log('The lamp is on during the night')
} else if(lampOn != true && daytime != true) {
    console.log('The lamp is off during the night')
} else if(lampOn == true && daytime == true){
    console.log('The lamp is on during the day')
} else if(lampOn != true && daytime == true) {
    console.log('The lamp is off during the day')
} else {
    console.log('What lamp?')
} */

lampOn == true && datime != true ? console.log('The lamp is on during the night.') 
    : lampon != true && datime != true ? console.log('The lamp is off during the night.') 
    : lampOn == true && daytime == true ? console.log("The lamp is on during the day.") 
    : lampOn != true && daytime == true ? console.log("The lamp is off during the day.") 
    : console.log("What lamp?")

/*
*************
SWITCH
*************
*/

let instructor = 'Ing';

switch(instructor) {
    case 'Ing' :
        console.log(`${instructor} is a part of the Web Dev Team`);
        break;
    case 'Zach' :
        console.log(`${instructor} is a part of the Web Dev Team`);
        break;
    case 'Josh' :
        console.log(`${instructor} is a part of the Software Dev Team`);
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches as this time.`);
        break;
        //need to use a default to help us catch those caes when none are true.
}

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
}


function monthName(mon) {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'][mon - 1];
 }
 
 console.log(monthName(1));