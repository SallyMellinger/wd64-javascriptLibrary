let url = 'https://rickandmortyapi.com/api/character/';
    fetch(url) 
        .then(results => {
            
            return results.json() 
        })
        .then(json => {
            
            displayChar(json);
        });
  function displayChar(json) {
    console.log('Display:', json);
  let rick = json.results[0].image;
  let morty = json.results[1].image;

  let x = document.createElement('img')
  x.setAttribute('src', rick)
  let y = document.createElement('img')
  y.setAttribute('src', morty)
  document.body.appendChild(x);
  document.body.appendChild(y);
  
}