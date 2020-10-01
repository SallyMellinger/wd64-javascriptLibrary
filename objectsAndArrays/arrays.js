/*
*********
ARRAYS
*********

POPULATING & REFERRING
*/

let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);

// JS counts starting a 0. So in this array, it would be 0-2
//When we call an array, appending square brackets onto the end of our array with the index number we want to reference. This is SQUARE BRACKET NOTATION.

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Amira']];
//console.log(typeof students); //tells you want type of array
//console.log(students instanceof Array); //tells you whether or not it's an array. Remember that arrays are technically objects.

//console.log(students[2]); would show Rhys

/*
? QUICK CHALLENGE
************
    - dive into the array and pull out the name 'Marshall'
    - dive into the nested array and pull the value 'Will'
    - print out (console log) "Hello Marshall!"
    - print out (console log) "Hello Will!"
*/
let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Will']];

console.log
console.log(`Hello, ${students[1]}!`)
console.log(`Hello ${students[6][2]}`);

// ARRAY METHODS

//We have multiple methods to allow us to manipulate arrays as we may need.

let food = [`Pecan Pie`, `Shrimp`, `Quesadilla`, `Cheese Cake`, `Hotdog`];

//For each

for (foodItem of food) {
    console.log(foodItem);
}

//Add to our array
food.push('Pizza'); //Appends Pizza to the end of our array
console.log('push:', food);

//Remove and insert

        // (1) (2)   (3)
food.splice(1, 1, 'Bananas');
//removes shrimp and adds bananas => 1. Position, 2. How many to remove 3. what to add
console.log('splice:', food);

food[1] = 'apple';
console.log(food);

//Remove from end
food.pop(); //pop removes the last item of an array
console.log('pop: ', food);

//Adds to the start
food.unshift('Popcorn', 'Steak');// unshift adds one or more elements to the beginning of the array
console.log('unshift: ', food);

//Remove from start
food.shift();//shift removes the first element in an array
console.log(`shift: `, food);

//LENGTH

//we can use a method called length() that can tell us how many values are within our array.

let long = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(long.length);

let colors = ['blue', 'black', 'red', 'yellow'];
console.log(colors.length);

console.log(colors);
console.log(colors.toString())

let bool = [true, true, false];
console.log(bool.toString());

//method is the name for a function within the scope of an object so yes but not much

//ITERATING
/*
    forEach - the forEach() method executes a provided function once for each element in an array - much like a for loop or a for of loop.
    
    Runs 3 arguments:
     1. the value
     2. the index
     3. the array object itself

    */

let foodList = ['apple', 'pear', 'mushroom', 'cheese', 'peach'];

for(let i = 0; i <= foodList.length; i++){
    console.log(foodList[i]);
}
//We invoke callback function for each element within our array.

let foodList = ['apple', 'pear', 'mushroom', 'cheese', 'peach'];
foodList.forEach(logItem);
//A call back function is another function we invoke within our main function

/* Syntax: function print(callback){
    callback();
}
*/
let foodList = ['apple', 'pear', 'mushroom', 'cheese', 'peach'];
foodList.forEach((foodItem, index) => {
    console.log(foodItem);
    console.log(index)
})

/*
***************
CHALLENGE
****************
*/

/*
! CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = [`Aladdin`, `Lion King`, `Frozen`, `Cinderella`, `Sleeping Beauty`];

for (movieItem of movies) {
    console.log(movieItem);
}

movies.push('Moana');
console.log('push:', movies);

movies.splice(3, 1, 'Jungle Book')
console.log('splice:', movies);


