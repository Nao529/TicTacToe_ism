import Tabla from "./Tabla.js";

const szuloElem = document.querySelector(".tabla");

const TABLA = [" "," ","X"," ","O"," "," "," "," "];
let lepes = 0;
new Tabla(TABLA, szuloElem);

window.addEventListener("kattint",(event)=>{
    console.log(event.detail);
    TABLA[event.detail] = "X";
    new Tabla(TABLA, szuloElem);
});