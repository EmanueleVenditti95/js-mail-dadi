
// // definire i giocatori
// const players = ['player1','player2']


// // assegnare un numero casuale a ciascuno dei giocatori
// for ( i = 0 ; i < 2 ; i++) {
//     let number = Math.floor(Math.random() * (6) + 1)
//     let playerScore = number[i]
//     console.log(i,playerScore)
// }


// assegnare un numero casuale al giocatore e al pc
let playerScore = Math.floor(Math.random() * (6) + 1)
let pcScore = Math.floor(Math.random() * (6) + 1)
console.log(playerScore,pcScore)


// confrontare i numeri usciti per vedere quale è il più alto,così da stabilire il vincitore
if (playerScore > pcScore) {
    console.log('You win!')
}else if (playerScore < pcScore) {
    console.log('You lose!') 
}else {
    console.log('It\'s a tie!')
}