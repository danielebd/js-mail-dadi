'use strict';
const giocatore = Math.floor(Math.random() * 6) + 1;
console.log('punteggio giocatore ' + giocatore);
const computer = Math.floor(Math.random() * 6) + 1;
console.log('punteggio computer ' + computer);

if(giocatore < computer){
    console.log('hai perso');
    alert('hai perso');
} else if (giocatore === computer){
    console.log('pareggio');
    alert('pareggio');
} else{
    console.log('hai vinto')
    alert('hai vinto');
}

