'use strict';
const x = Math.floor(Math.random() * 6) + 1;
console.log(x);
const y = Math.floor(Math.random() * 6) + 1;
console.log(y);

if(x < y){
    console.log('hai perso');
    alert('hai perso');
} else if (x === y){
    console.log('pareggio');
    alert('pareggio');
} else{
    console.log('hai vinto')
    alert('hai vinto');
}

