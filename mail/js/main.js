'use strict';

const folder = ['a@gmail.com', 'b@gmail.com', 'c@gmail.com', 'd@gmail.com', 'e@gmail.com', 'f@gmail.com'];
const mail = prompt('inserisci mail');

let risultato = false;


for (let i = 0; i < folder.length; i++ ) {

    const partecipante = folder[i];

    if(partecipante === mail){
        risultato = true;
        console.log('vero');
    }
    else {
        console.log('falso');
    }
    
    break //l'ho inserito perchè altrimenti in console mi inseriva falso anche se la condizione e true
}

if (risultato === true) {
    alert('benvenuto');
} else {
    alert('no puoi entrare');
}