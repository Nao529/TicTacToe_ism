import Tabla from "./Tabla.js";

const szuloElem = document.querySelector(".tabla");
const eredmenyElem = document.querySelector(".eredmeny");
const ujJatekGomb = document.querySelector(".ujjatek");
let TABLA = [" "," "," "," "," "," "," "," "," "];
let lepes = 0;
let jatekVege = false;
new Tabla(TABLA, szuloElem);

window.addEventListener("kattint",(event)=>{
    console.log(event.detail);
    if (jatekVege) {
        return;
    }
    if (TABLA[event.detail] === " ") {
        if (lepes % 2 === 0) {
            TABLA[event.detail] = "X";
        } else {
            TABLA[event.detail] = "O";
        }
        lepes++;
        const nyertes = ellenoriz();
        new Tabla(TABLA, szuloElem);
        if (nyertes) {
            eredmenyElem.innerHTML = nyertes + " nyert!";
            jatekVege = true;
            return;
        }
        if (dontetlen()) {
            eredmenyElem.innerHTML = "Döntetlen!";
            jatekVege = true;
            return;
        }
    }
});

function ellenoriz() {
    const nyeroKombok = [
        [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ];
    for (let i = 0; i < nyeroKombok.length; i++) {
        const [a, b, c] = nyeroKombok[i];
        if (
            TABLA[a] !== " " &&
            TABLA[a] === TABLA[b] &&
            TABLA[a] === TABLA[c]
        ) {
            return TABLA[a];
        }
    }
    return null;
}

function dontetlen() {
    for (let i = 0; i < TABLA.length; i++) {
        if (TABLA[i] === " ") {
            return false;
        }
    }
    return true;
}

ujJatekGomb.addEventListener("click", function () {
    TABLA = [" "," "," "," "," "," "," "," "," "];
    lepes = 0;
    jatekVege = false;
    eredmenyElem.innerHTML = "";
    new Tabla(TABLA, szuloElem);
});