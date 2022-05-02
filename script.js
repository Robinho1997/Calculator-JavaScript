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