"use strict";


function IdealGrid(obj) {

let { number, width, height, ratio, tgRatio } = obj;

let no = Math.sqrt(number);
console.log ("Wurzel ist " + no);

let columns = no * ratio;


console.log ("Kolumne kalkuliert " + columns);

if (columns > ( Math.floor(columns) + 0.5)) columns = Math.ceil(columns);
else                                        columns = Math.floor(columns);



console.log ("ideale Menge pro Zeile " + columns);

let c = Math.floor(no);
let row = Math.floor( number / columns );
console.log( "Anzahl Reihen " + row);



if (width / height < 1)
    {
        console.log("HOCHFORMAT");
    }
else  console.log("BREITFORMAT");


let nHeight = Math.trunc( ( height/row) / tgRatio);
let nWidth  = Math.trunc ( (width/ columns) );



console.log("Höhe des Blocks " + nHeight + " Breite " + nWidth);

console.log ("Die Ratio des Grids " + (nWidth / nHeight) );

return {
       width: nWidth,
       height: nHeight, 
       }

}



export default IdealGrid;