// Cat Facts API Example
const response = await fetch('https://alexwohlbruck.github.io/cat-facts/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});

const data = await response.json();
console.log(data);

fetch('https://cat-fact.herokuapp.com/facts/random')
  .then(response => response.json())
  .then(data => console.log(data.text))
  .catch(error => console.error(error)); 