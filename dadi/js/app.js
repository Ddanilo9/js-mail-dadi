// console.log('dadi')

//creo un array con il numero dei dadi per l'utente
let dadiUtente = [1, 2, 3, 4, 5, 6];
//genero un numero casuale
let randomDadiUser = Math.floor(Math.random()*dadiUtente.length);
let rValueUtente = dadiUtente[randomDadiUser];
//stampo il numero
console.log('il tuo numero è ' + rValueUtente);

//creo un array con il numero dei dadi per il pc
let dadiPc = [1, 2, 3, 4, 5, 6];
//genero un numero casuale
let randomDadiPc = Math.floor(Math.random()*dadiPc.length);
let rValuePc = dadiPc[randomDadiPc];
//spampo il numero
console.log(rValuePc);

if (rValueUtente === rValuePc){
    alert('PUNTEGGIO IN PARI');
} else if (rValueUtente > rValuePc)
    alert('HAI VINTO');
    else {
        alert('HAI PERSO, RIPROVA');
    }