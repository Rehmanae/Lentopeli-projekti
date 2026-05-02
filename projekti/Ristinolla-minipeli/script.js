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

        if (
            ruudut[a].innerText != "" &&
            ruudut[a].innerText == ruudut[b].innerText &&
            ruudut[b].innerText == ruudut[c].innerText
        ) {
            if (ruudut[a].innerText == "X") {
                document.querySelector(".info").innerText = "Sinä voitit!"
            } else {
                document.querySelector(".info").innerText = "Botti voitti!"
            }

            peliOhi = true
            voittoAani.play()
            document.querySelector(".imgbox img").style.width = "150px"
            return
        }
    }

    // jos kaikki ruudut on täynnä tulee tasapeli
    let tasapeli = true

    for (let i = 0; i < ruudut.length; i++) {
        if (ruudut[i].innerText == "") {
            tasapeli = false
        }
    }

    if (tasapeli) {
        document.querySelector(".info").innerText = "Tasapeli!"
        peliOhi = true
    }
}

// Tällä botti etsii hyvän paikan.
function etsiPaikka(merkki) {
    let ruudut = document.getElementsByClassName("boxtext")

    for (let i = 0; i < voittorivit.length; i++) {
        let a = voittorivit[i][0]
        let b = voittorivit[i][1]
        let c = voittorivit[i][2]

        if (ruudut[a].innerText == merkki && ruudut[b].innerText == merkki && ruudut[c].innerText == "") {
            return c
        }

        if (ruudut[a].innerText == merkki && ruudut[b].innerText == "" && ruudut[c].innerText == merkki) {
            return b
        }

        if (ruudut[a].innerText == "" && ruudut[b].innerText == merkki && ruudut[c].innerText == merkki) {
            return a
        }
    }

    return -1
}




