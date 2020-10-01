//console.log("test")

const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');
//querySelector will get all elements with a specific tag, getElementByTag will only get the first one on the page

//eventListener
searchForm.addEventListener('submit', fetchSpace);

//FETCH FUNCTION
function fetchSpace(e) {
    e.preventDefault();  //this method allows use to cancel a default action by the broswer.
    
    
    //console.log('Clicked!');

    fetch(baseURL) // starts the process of fetching from our resource
        .then(results => {
            //console.log(results) // show our response
            return results.json() // This method takes in a response (results), resards to completion and returns the result as a json format
        })
        .then(json => {
            //console.log(json)
            displayRockets(json);
        });
}

//DISPLAY FUNCTION
function displayRockets(data){
    console.log('DisplayRocket: ', data);

    let rockets = data.forEach(r => {
        console.log(r);
        let rocket = document.createElement('li'); //create a li tag
        //rocket.innerText = r.name
        rocket.innerText = `${r.name} is in the country ${r.country}`
        spaceShips.appendChild(rocket);
    });
}