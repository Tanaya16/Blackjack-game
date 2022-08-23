let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let rulesEl = document.getElementById ("rules-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🎲"
    } else if (sum === 21) {
        message = "You've got Blackjack! 🎖️"
        hasBlackJack = true
    } else {
        message = "You're out of the game! ❌"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
function rules(){
    let ruleOne = "1] If your sum is exact 21 then your the winner. \n\n"
    let ruleTwo = "2] If your sum is less than 21 then you can draw a new card. \n\n"
    let ruleThree = "3] If your sum is greater than 21 then your out of the game. \n\n"
    rulesEl.innerText =ruleOne + ruleTwo + ruleThree
}
