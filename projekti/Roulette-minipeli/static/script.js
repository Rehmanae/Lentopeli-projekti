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
    let arvottuNumero = Math.floor(Math.random() * vaihtoehdot.length);
    let valittuTulos = vaihtoehdot[arvottuNumero];

    // Lisätään monta kierrosta, että pyörä näyttää oikeasti pyörivän.
    asteet = asteet + 1440 + arvottuNumero * 90;

    wheel.style.transform = "rotate(" + asteet + "deg)";

    setTimeout(function () {
        tulos.innerHTML = "Tulos: " + valittuTulos;

        if (valittuTulos == "Voitit") {
            alert("Voitit pelin!");
        }

        if (valittuTulos == "Hävisit") {
            alert("Hävisit pelin!");
        }

        pyorii = false;

    }, 3000);

}