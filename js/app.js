//mail
//chiedere all'utente la sua mail e dichiaro la variabile mail
const mailUtente = prompt('inserisci la tua mail');

 //creo un array con le emails nel database
const mails = ['mario.rossi@gmail.com', 'paoloverdi@gmail.com', 'marcovia.34@gmail.com']
let ePresente = false

//creo un ciclo per le emails
for (let i = 0; i < mails.length; i++){

//se la mail che inserisce l'utente è presente nel database verrà data una conferma positiva
let mailPresenti = mails[i]
console.log(mailPresenti)

if (mailPresenti === mailUtente){
ePresente = true
// console.log('LA MAIL è PRESENTE')
} else{
    // console.log('LA MAIL NON è PRESENTE')
}
}
//stampo se le mail sono presenti o no
if (ePresente === true) {
    alert('LA MAIL è PRESENTE')
} else {
    alert('LA MAIL NON è PRESENTE')
}

//*************************************************************************************************************** */


