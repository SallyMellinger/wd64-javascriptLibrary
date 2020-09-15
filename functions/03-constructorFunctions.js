/*
*********************
CONSTRUCTOR FUNCTIONS
********************* 
 - Functions allow us to esily create a unique solution for different circumstances by using parameters.
    -creating several different objects with the same keys but different values.

*/

function Person(name, age, canVote){

    this.name = name;
    this.age = age;
    this.canVote = canVote;
}


    let pnext = new Person('Jame', 80, true);
    console.log(pnext)