
// dichiarare un array con la lista delle mail accettate
const allowedEmails = [
    'jon-snow@gmail.com',
    'jon-fire@gmail.com',
    'jon-earth@gmail.com',
    'jon-sky@gmail.com'
]
console.log(allowedEmails)

let mailDOMElement = document.getElementById('mail')

//chiedere all'utente la sua mail
const userEmail = prompt('Inserisci la tua mail')
console.log(userEmail)

// eseguire un ciclo for per ciclare l'array delle mail e confrontarlo con la mail inserita dall'utente per cercare un match
for (i=0 ; i < allowedEmails.length ; i++) {
let currentEmail = allowedEmails[i]
console.log(currentEmail)

    if (userEmail !== currentEmail) {
        console.log('Accesso negato')
        mailDOMElement.innerHTML = 'Accesso negato'
    }else {
        console.log('Accesso consentito')
        mailDOMElement.innerHTML = 'Accesso consentito'
        break
    }

}