let wheel = document.getElementById("wheel");
let tulos = document.getElementById("tulos");

let popup = document.getElementById("popup");
let popupHeader = document.getElementById("popupHeader");
let popupResult = document.getElementById("popupResult");
let popupKuva = document.getElementById("popupKuva");

let vaihtoehdot = ["merkki2", "merkki1", "Ei mitään", "Uudestaan"];
let pyorii = false;
let asteet = 0;

function pyorita() {
    if (pyorii) {
        return;
    }

    pyorii = true;
    let arvottuNumero = Math.floor(Math.random() * vaihtoehdot.length);
    let valittuTulos = vaihtoehdot[arvottuNumero];


    asteet = asteet + 1440 - arvottuNumero * 90 - 45;

    wheel.style.transform = "rotate(" + asteet + "deg)";

    setTimeout(function () {
        tulos.innerHTML = "Tulos: " + valittuTulos;

        if (valittuTulos == "merkki1") {
            naytaPopup("Voitit haalarimerkin!", "Haalarimerkki", "merkki1.png");
        } else if (valittuTulos == "merkki2") {
            naytaPopup("Voitit erikois haalarimerkin!", "2X Haalarimerkki", "merkki2.png");
        } else if (valittuTulos == "Uudestaan") {
            naytaPopup("Uudestaan", valittuTulos, "");
        } else if (valittuTulos == "Ei mitään") {
            naytaPopup("Ei mitään", valittuTulos, "");
        }
        pyorii = false;

    }, 10000);

}

/* Tämä avaa popup-laatikon. */
function naytaPopup(otsikko, teksti, kuva) {
    popupHeader.innerHTML = otsikko;
    popupResult.innerHTML = teksti;

    if (kuva != "") {
        popupKuva.src = "/static/" + kuva;
        popupKuva.style.display = "block";
    } else {
        popupKuva.style.display = "none";
    }

    popup.style.display = "block";
}

function suljePopup() {
    popup.style.display = "none";
    popupKuva.style.display = "none";
}