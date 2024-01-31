
let sum=0
let cards=[];
let hasBlackJack= false;
let isAlive=false;
let message="";
let player={
    name:"per",
    dollar:50
};
let messageEl=document.getElementById("message-el");
let cardsEl=document.getElementById("cards-el");
let sumEl=document.getElementById("sum-el");
let playerEl=document.getElementById("player-el");

playerEl.textContent=player.name+" :$"+player.dollar;

function startGame(){
    let firstCard = getRandomCard();
    let secondCard =getRandomCard();
    isAlive = true;
    cards=[firstCard,secondCard];
    sum = firstCard + secondCard;
    
    reduceDollar();
    if(player.dollar>0){
    renderGame();
    }
}
function reduceDollar(){
    if(player.dollar > 0){
        player.dollar = player.dollar-10;
        playerEl.textContent=player.name+" :$"+player.dollar;
    } else {
        playerEl.textContent=player.name+" :$"+player.dollar +" coins You can't play";
    }
    
}
function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13)+1;
    if(randomNumber>10){
        return 10;
    } else if(randomNumber === 1){
        return 11;
    } else{
        return randomNumber;
    }
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent +=cards[i]+" ";
    }

    sumEl.textContent= "Sum: "+sum;

    if(sum<21){
        message="Do you want to draw a new card";
        isAlive=true;
        hasBlackJack=false;
    } else if(sum === 21){
        message= "You've got blackjack";
        hasBlackJack= true;   
    } 
    else{
        message="You're out of game";
        isAlive= false;     
    } 
    messageEl.textContent=message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum +=card;
        cards.push(card);
        renderGame();
    }
}