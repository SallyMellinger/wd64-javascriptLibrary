// ASYNC/AWAIT

/*
    - Allows us to program in a synchronous manner while still allowing code to run in the background.
    - Makes our site as responsive as possible.
*/

// Async Function (syntax)
/*
    - allows us to make a normal function asynchronous. Can use "await"
    - must use the async keyword at the beginning of the fucntion declaration.
*/

async function myFn() {
    //await...
}

const myAsyncFn = async () => {
    //await...
}

const newFn = () => {
    //await...(provides a syntax error because async is not declared)
}

async function fn() {
    return 'Hello';
}

fn().then(console.log);

fn().then(dataFromAsyncFun => {
    console.log(dataFromAsyncFun)
})

// AWAIT
//pauses at each await expression

fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));

    // - Chaining .then() together returns a promise (resolve/reject) and is known as method chaining

    //const response = await fetch('https://random.dog/woof.json');
    //const json = await response.json();
    //console.log(json);

    const request = async () => {
       const response =  await fetch('https://random.dog/woof.json');
        const json = await response.json();
        return json;
    }

    request().then(json => {
        console.log(json);
    })

    function callbackFunction(){
        for(let i = 0; i < 100; i++){
            console.log(i)
        }
    
         const data = {
            name: 'Ralf Machio', 
            age: 66, 
            occupation: 'kickboxing'
        }
        return data;
    }
    
    function showData(dataFromFunction){
        return "hello " + dataFromFunction.name
    }
    
    console.log(
        showData(callbackFunction())
    )

    function callbackFunction(){
        const data = {
            name: 'Ralf Machio', 
            age: 66, 
            occupation: 'kickboxing'
        }
        return data;
    }
    
    function showGreeting(dataFromFunction){
        return "hello " + dataFromFunction.name + ", I hear you're the greatest?!"
    }
    
    console.log(
        showGreeting(callbackFunction())
    )

    // 2nd promise
var playDate = function (gift) {
    return new Promise(
        function (resolve, reject) {
            var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

            resolve(message); 
        }
    );
};

// Promise call
var checkTwice = function () {
    console.log('before Christmas'); // log before
    iCanHasGift
        .then(playDate)
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error)
        });
    console.log('after opening gifts'); // log after
}

checkTwice()


const sunny = false;
if (sunny) {
  return "It's sunny!";
} else {
 return "It's not sunny!";
}

