let wheel = document.getElementById("wheel");
let tulos = document.getElementById("tulos");

let vaihtoehdot = ["Voitit", "Hävisit", "Uudestaan", "Merkki"];

let pyorii = false;
let asteet = 0;

function pyorita() {
    if (pyorii) {
        return;
    }

    pyorii = true;
}