const PROG_URL = 'https://v2.jokeapi.dev/joke/programming'
const PUN_URL = 'https://v2.jokeapi.dev/joke/pun'


const jokeContainer = document.getElementById('joke-container')

const h3Tag = document.createElement('h3')
const h4Tag = document.createElement('h4')

function fetchJoke(){
    fetch(PROG_URL)
    .then(res => res.json())
    .then(data => renderJoke(data))
}

function renderJoke(data){    
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

function getJoke(){
    const jokeButton = document.getElementById('button1')

    jokeButton.addEventListener("click", () => {
        h3Tag.innerText = ""
        h4Tag.innerText = ""
        fetchJoke()
    })
}

getJoke()



