const BASE_URL = 'https://v2.jokeapi.dev/joke/programming'

function fetchJoke(){
    fetch(BASE_URL)
    .then(res => res.json())
    .then(console.log)
    // .then(data => renderJoke(data))
}



fetchJoke()


