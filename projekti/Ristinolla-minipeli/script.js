console.log("Ristinolla peli käynnistyi")

// Pelaaja on X ja botti on O.
let pelaaja = "X"
let peliOhi = false

let aani = new Audio("ting.mp3")
let voittoAani = new Audio("gameover.mp3")

// Näistä riveistä voi tulla voitto.
let voittorivit = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Tällä katsotaan tuliko voitto tai tasapeli.
function tarkistaVoitto() {
    let ruudut = document.getElementsByClassName("boxtext")

    for (let i = 0; i < voittorivit.length; i++) {
        let a = voittorivit[i][0]
        let b = voittorivit[i][1]
        let c = voittorivit[i][2]