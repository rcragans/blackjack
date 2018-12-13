const freshDeck = createDeck();
let theDeck = freshDeck.slice();
let playerHand =[];
let dealerHand =[];
$('.deal-button').click(()=>{
    theDeck = freshDeck.slice()
    shuffleDeck(theDeck);
    let topCard = theDeck.shift();
    playerHand.push(topCard)
    topCard = theDeck.shift()
    dealerHand.push(topCard)
    topCard = theDeck.shift()
    playerHand.push(topCard)
    topCard = theDeck.shift()
    dealerHand.push(topCard)
    placeCard('player',1,playerHand[0])
    placeCard('dealer',1,dealerHand[0])
    placeCard('player',2,playerHand[1])
    placeCard('dealer',2,dealerHand[1])
    calculateTotal(playerHand,'player')
    calculateTotal(dealerHand,'dealer')
})
function calculateTotal(hand, who){
    let handTotal = 0
    hand.forEach((card,i)=>{
        let thisCardsValue = Number(card.slice(0,-1))
        handTotal += thisCardsValue
    })
    console.log(handTotal)
}
function placeCard(who,where,what){
    const classSelector = `.${who}-cards .card-${where}`
    $(classSelector).html(`<img src="./cards/${what}.png"/>`)
}
function createDeck(){
    let newDeck = [];
    const suits = ['h','s','d','c'];
    suits.forEach((s,index)=>{
        for(let c = 1; c<= 13; c++){
            newDeck.push(`${c}${s}`)
            
        }
    })
    return newDeck
}
function shuffleDeck(aDeckToBeShuffled){
    for(let i=0; i<1000000; i++){
        let rand1 = Math.floor(Math.random()*52);
        let rand2 = Math.floor(Math.random()*52);
        let card1Defender = aDeckToBeShuffled[rand1];
        aDeckToBeShuffled[rand1] = aDeckToBeShuffled[rand2];
        aDeckToBeShuffled[rand2] = card1Defender;
    }
    
}