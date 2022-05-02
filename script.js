"use strict";

function showCalculation(number) {
    let ergebnissFeld = document.getElementById("ergebnissfeld");
    ergebnissFeld.innerHTML += number;
}


function ausrechnen() {
    let ergebnissFeld = document.getElementById("ergebnissfeld");
    let ergebniss = eval(ergebnissFeld.innerHTML);
    ergebnissFeld.innerHTML = ergebniss;
}

function reset() {
    let ergebnissfeld = document.getElementById("ergebnissfeld");
    if (ergebnissfeld.innerHTML.endsWith(" ")) {
        ergebnissfeld.innerHTML = ergebnissfeld.innerHTML.slice(0, -3);
    } else { 
        ergebnissfeld.innerHTML = ergebnissfeld.innerHTML.slice(0, -1 );
    }
}