// Function to get a random number from 0 to inclusiveMax:
const getRandom = inclusiveMax => {
    return Math.ceil((Math.random() * inclusiveMax));
}

// Function to draw a card inside the element with the id domId with the given suit and rank:
const showCard = (suit, rank, domId) => {

    // Instructions:
    // Accepted values for rank are 2-10, A, J, K, Q. 
    // Accepted values for suit are 1 (clubs), 2 (diamonds), 3 (hearts), 4 (spades).
    // Accepted value for domId is the id of an html tag in the current document as a string.
    // Bootstrap icons is needed for this function to work

    // Validations:

    let numberError = false;
    let stringError = false;
    let typeError = false;
    let suitError = false;
    let domIdError = false

    typeof rank == "number" ?
    rank < 2 || rank > 10 ?
    numberError = true
    : null
    : typeof rank == "string" ?
    rank != "A" && rank != "J" && rank != "K" && rank != "Q" ?
    stringError = true
    : null
    : typeError = true;

    suit < 1 || suit > 4 ?
    suitError = true
    : null;

    typeof domId != "string" ?
    domIdError = true
    : null;

    if (numberError || stringError || typeError || suitError || domIdError) {
        console.log("showCard() parameter error, please read instructions.")
        return
    }

    // Card:

    const club = "bi bi-suit-club-fill";
    const diamond = "bi bi-suit-diamond-fill";
    const heart = "bi bi-suit-heart-fill";
    const spade = "bi bi-suit-spade-fill";

    const black = "corner-text";
    const red = "red-corner-text";

    let cardContainer = document.querySelector(`#${domId}`);  
    cardContainer.innerHTML += `<article class="card"><div class="corner"><i class="${suit === 1 ? club : suit === 2 ? diamond : suit === 3 ? heart : suit === 4 ? spade : null} ${suit == 2 || suit == 3 ? red : black}"></i><p class="${suit == 2 || suit == 3 ? red : black}">${rank}</p></div><h2 class="${suit == 2 || suit == 3 ? "red-center-text" : "center-text"}">${rank == "A" ? `<i class="${suit === 1 ? club : suit === 2 ? diamond : suit === 3 ? heart : suit === 4 ? spade : null} ${suit == 2 || suit == 3 ? "red-center-text" : "center-text"}"></i>` : rank}</h2><div class="bottom-right"><div class="corner"><i class="${suit === 1 ? club : suit === 2 ? diamond : suit === 3 ? heart : suit === 4 ? spade : null} ${suit == 2 || suit == 3 ? red : black}"></i><p class="${suit == 2 || suit == 3 ? red : black}">${rank}</p></div></div></article>`; 
}

// Function to show a random poker card inside the element with the id domId
const showRandomCard = domId => {
    let suit = getRandom(4);
    let rank = getRandom(13) + 1;
    rank == 11 ?
    rank = "A"
    : rank == 12 ?
    rank = "J"
    : rank == 13 ?
    rank = "K"
    : rank == 14 ?
    rank = "Q"
    : null;

    showCard(suit, rank, domId)
}

const showRandomCardWaiting = domId => {
    let waiting = document.querySelector("#waiting");

    const setAdd = () => {
        waiting.innerHTML = "Add card in 10 seconds";
    }

    waiting.innerHTML = "Adding ...";
    setTimeout(showRandomCard, 10000, domId);
    setTimeout(setAdd, 10001);
}

showRandomCard("ejercicio-3");