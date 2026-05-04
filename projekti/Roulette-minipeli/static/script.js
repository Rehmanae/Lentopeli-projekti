let wheel = document.getElementById("wheel");
let tulos = document.getElementById("tulos");

let popup = document.getElementById("popup");
let popupHeader = document.getElementById("popupHeader");
let popupResult = document.getElementById("popupResult");

let vaihtoehdot = ["Haalarimerkki", "Ei mitään", "Uudestaan", "Yritä uudestaan"];

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

        if (valittuTulos == "Haalarimerkki") {
            naytaPopup("Voitit haalarimerkin!", valittuTulos, "merkki1.png");
        } else if (valittuTulos == "Juomamerkki") {
            naytaPopup("Voitit juomamerkin!", valittuTulos, "merkki2.png");
        } else if (valittuTulos == "Ei mitään") {
            naytaPopup("Ei voittoa tällä kertaa", valittuTulos, "");
        } else {
            naytaPopup("Pyöritä uudestaan", valittuTulos, "");
        }

        pyorii = false;

    }, 3000);

}

/* Tämä avaa popup-laatikon. */
function naytaPopup(otsikko, teksti) {
    popupHeader.innerHTML = otsikko;
    popupResult.innerHTML = teksti;
    popup.style.display = "block";
}

/* Tämä sulkee popup-laatikon. */
function suljePopup() {
    popup.style.display = "none";
}