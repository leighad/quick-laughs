const BASE_URL = 'https://v2.jokeapi.dev/joke/programming'

function fetchJoke(){
    fetch(BASE_URL)
    .then(res => res.json())
    // .then(console.log)
    .then(data => renderJoke(data))
}

function renderJoke(data){
    const jokeContainer = document.getElementById('joke-container')
    const h3Tag = document.createElement('h3')
    const h4Tag = document.createElement('h4')

    if (data.flags.values != true && data.id != 47 && data.id != 8) {
        if (data.type == 'single'){
            h3Tag.innerText = data.joke
            jokeContainer.appendChild(h3Tag)
        } else {
            h3Tag.innerText = data.setup
            h4Tag.innerText = data.delivery
            jokeContainer.appendChild(h3Tag)
            jokeContainer.appendChild(h4Tag)
        }
    }
}

fetchJoke()


