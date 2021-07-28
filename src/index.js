const PROG_URL = 'https://v2.jokeapi.dev/joke/programming'
const PUN_URL = 'https://v2.jokeapi.dev/joke/pun'

const jokeContainer = document.getElementById('joke-container')

const h3Tag = document.createElement('h3')
const h4Tag = document.createElement('h4')

function fetchJokeProg(){
    fetch(PROG_URL)
    .then(res => res.json())
    .then(data => renderJokeProg(data))
}

function renderJokeProg(data){    
    if (data.flags.values != true && data.id != 8 && data.id != 47) {

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

function getJokeProg(){
    const jokeButton = document.getElementById('button1')

    jokeButton.addEventListener("click", () => {
        h3Tag.innerText = ""
        h4Tag.innerText = ""
        fetchJokeProg()
    })
}
// ********

function fetchJokePun(){
    fetch(PUN_URL)
    .then(res => res.json())
    .then(data => renderJokePun(data))
}

function renderJokePun(data){    
    if (data.flags.values != true && data.id != 62 && data.id != 64 && data.id != 87 && data.id != 95 && data.id != 136 && data.id != 155 && data.id != 156 && data.id != 177 && data.id != 240) {

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

function getJokePun(){
    const jokeButton = document.getElementById('button2')

    jokeButton.addEventListener("click", () => {
        h3Tag.innerText = ""
        h4Tag.innerText = ""
        fetchJokePun()
    })
}

getJokeProg()
getJokePun()



