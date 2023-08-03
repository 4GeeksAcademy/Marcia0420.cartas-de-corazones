/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// let const cartas = [
//   { palo: 'Corazones', valor: '2' },
//   { palo: 'Corazones', valor: '3' },
//   { palo: 'Corazones', valor: '4' },
//   { palo: 'Corazones', valor: '5' },
//   { palo: 'Corazones', valor: '6' },
//   { palo: 'Corazones', valor: '7' },
//   { palo: 'Corazones', valor: '8' },
//   { palo: 'Corazones', valor: '9' },
//   { palo: 'Corazones', valor: '10' },
//   { palo: 'Corazones', valor: 'Jota' },
//   { palo: 'Corazones', valor: 'Reina' },
//   { palo: 'Corazones', valor: 'Rey' },
//   { palo: 'Corazones', valor: 'As' },

//   { palo: 'Picas', valor: '2' },
//   { palo: 'Picas', valor: '3' },
//   { palo: 'Picas', valor: '4' },
//   { palo: 'Picas', valor: '5' },
//   { palo: 'Picas', valor: '6' },
//   { palo: 'Picas', valor: '7' },
//   { palo: 'Picas', valor: '8' },
//   { palo: 'Picas', valor: '9' },
//   { palo: 'Picas', valor: '10' },
//   { palo: 'Picas', valor: 'Jota' },
//   { palo: 'Picas', valor: 'Reina' },
//   { palo: 'Picas', valor: 'Rey' },
//   { palo: 'Picas', valor: 'As' },

//   { palo: 'Clubes', valor: '2' },
//   { palo: 'Clubes', valor: '3' },
//   { palo: 'Clubes', valor: '4' },
//   { palo: 'Clubes', valor: '5' },
//   { palo: 'Clubes', valor: '6' },
//   { palo: 'Clubes', valor: '7' },
//   { palo: 'Clubes', valor: '8' },
//   { palo: 'Clubes', valor: '9' },
//   { palo: 'Clubes', valor: '10' },
//   { palo: 'Clubes', valor: 'Jota' },
//   { palo: 'Clubes', valor: 'Reina' },
//   { palo: 'Clubes', valor: 'Rey' },
//   { palo: "Clubes",valor:"As"},

//     {palo:"Diamantes",valor:"2"},
//   {palo:"Diamantes",valor:"3"},
//   {palo:"Diamantes",valor:"4"},
//   {palo:"Diamantes",valor:"5"},
//   {palo:"Diamantes",valor:"6"},
//   {palo:"Diamantes",valor:"7"},
//   {palo:"Diamantes",valor:"8"},
//   {palo:"Diamantes",valor:"9"},
//   {palo:"Diamantes",valor:"10"},
//   {palo:"Diamantes",valor:"Jota"},
//   {palo:"Diamantes",valor:"Reina"},
//   {palo:"Diamantes",valor:"Rey"},
//   {palo:"Diamantes",valor:"As"}
// ];

window.onload = function() {
  function generarCarta() {
    let palos = ["♦", "♥", "♠", "♣"];
    let valores = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "K",
      "Q",
      "A"
    ];

    let randomPalo = Math.floor(Math.random() * palos.length);
    let randomvValor = Math.floor(Math.random() * valores.length);

    // console.log(valores[randomValor] + " de " + palos[randomPalo]);
    document.getElementById("palo").innerHTML = palos[randomPalo];
    document.getElementById("palo1").innerHTML = palos[randomPalo];
    document.getElementById("numbers").innerHTML = valores[randomvValor];
    if (palos[randomPalo] == "♥" || palos[randomPalo] == "♦") {
      document.getElementById("palo").style.color = "red";
      document.getElementById("palo1").style.color = "red";
      document.getElementById("numbers").style.color = "red";
    } else {
      document.getElementById("palo").style.color = "black";
      document.getElementById("palo1").style.color = "black";
      document.getElementById("numbers").style.color = "black";
    }
  }

  document.getElementById("generar").addEventListener("click", generarCarta);
  setTimeout(generarCarta, 5000);
  generarCarta();

  // console.log(generarCarta());
};

// let whoRondon = who[Math.floor(Math.random() * who.length)];
// let actionRandon = action[Math.floor(Math.random() * action.length)];
// let whatRandon = what[Math.floor(Math.random() * what.length)];
// let whenRandon = when[Math.floor(Math.random() * when.length)];

// //write your code here
// let esxcusa =
//   whoRondon + " " + actionRandon + " " + whatRandon + " " + whenRandon;
// console.log(esxcusa);
// // function esxcusas() {
// document.getElementById("excuse").innerHTML = esxcusa;
// }
