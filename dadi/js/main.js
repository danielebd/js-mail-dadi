'use strict';

const button = document.getElementById('inputButton');
let x = ('');


button.addEventListener('click',

    function () {
        const giocatore = Math.floor(Math.random() * 6) + 1;
        console.log('punteggio giocatore ' + giocatore);
        const computer = Math.floor(Math.random() * 6) + 1;
        console.log('punteggio computer ' + computer);

        if (giocatore < computer) {
            console.log('hai perso');
            //alert('hai perso');
            x = ('HAI PERSO, SCHIAPPA!');

        } else if (giocatore === computer) {
            console.log('pareggio');
            //alert('pareggio');
            x = ('PAREGGIATO, CHE NOIA');

        } else {
            console.log('hai vinto')
            //alert('hai vinto');
            x = ('HAI VINTOOOO!!!');

        }


        document.querySelector('.giocatore').innerHTML =`TU: ${giocatore}`;
        document.querySelector('.computer').innerHTML =`PC: ${computer}`;
        document.querySelector('#risultato').innerHTML =`${x}`;

        const boxRisultato = document.querySelector('.box-risultato');
        boxRisultato.classList.add("show");
        
    }
    
)

