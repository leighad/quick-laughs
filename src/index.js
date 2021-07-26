const BASE_URL = 'https://v2.jokeapi.dev/joke/programming'

fetch(BASE_URL)
    .then(res => res.json())
    .then(json => console.log(json))
