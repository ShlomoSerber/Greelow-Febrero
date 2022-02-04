// Function to sort an array of numbers in an array of numbers from small to big
const sortToBiggest4 = (array, logArray) => {
    let run = [];

    for (i = 0; i < array.length; i++) {
        array.forEach((card , index) => {
            if ((index + 1) < array.length && card[2] > array[index + 1][2]) {
                let first = array[index];
                array[index] = array[index + 1];
                array[index + 1] = first;
            }
            run.push(array[index]);
        })
        logArray.push(run);
        run = [];
    }
}

// Function to get a random number from 0 to inclusiveMax:
const getRandom4 = inclusiveMax => {
    return Math.ceil((Math.random() * inclusiveMax));
}

// Function to draw a card inside the element with the id domId with the given suit and rank:
const showCard4 = (suit, rank, domId) => {

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

// Variables used in sorting
let cards4 = [];
let convertedCards = [];
let sorted = false;
let sortLog = [];

// Function to get a number amount of random cards
const setRandomCards = (number, array) => {

    for (i = 0; i < number; i++) {
        let suit = getRandom4(4);
        let rank = (getRandom4(13) + 1);

        // I passed rank 2 times because when i tried using the first rank to sort, it didn't work because i later convert the second rank to a letter. The problem is that the variable i sort is card4, the ranks of which i never change to letters (the function convertRanks only changes the variable convertedCards). I don't know why this happens and i tried to solve it but after some thime i gave up and added a second rank for sorting (which is never converted).
        array.push([suit, rank, rank])
    }
}

// Function to convert card ranks to appropiate parameters for showCard() function
const convertRanks = (originalArray, newArray) => {

    newArray.push(...originalArray);

    newArray.forEach(card => {
        card[1] == 11 ?
        card[1] = "A"
        : card[1] == 12 ?
        card[1] = "J"
        : card[1] == 13 ?
        card[1] = "K"
        : card[1] == 14 ?
        card[1] = "Q"
        : null;
    });
}

// Function to show cards
const showCards = (numberDomId, domId, sortLogDomId, sorted) => {
    let number = document.querySelector(`#${numberDomId}`);
    let element = document.querySelector(`#${domId}`);
    let log = document.querySelector(`#${sortLogDomId}`);

    if (element.innerHTML.length > 0 && !sorted) {
        element.innerHTML = "";
        log.innerHTML = "";
        cards4 = [];
        convertedCards = [];
    }

    for (i = 0; i < number.value; i++) {
        if (!sorted) {
            setRandomCards(number.value, cards4);
            convertRanks(cards4, convertedCards);
            convertedCards.forEach(card => {
                showCard4(card[0], card[1], domId);
            })
        } else if (sorted) {
            element.innerHTML = ""
            log.innerHTML = ""
            convertedCards = [];
            sortLog = [];
            sortToBiggest4(cards4, sortLog);
            convertRanks(cards4, convertedCards);
            convertedCards.forEach(card => {
                showCard4(card[0], card[1], domId);
            })

            log.innerHTML += `<h3 class="title-margin">Sorting log (may already be sorted before final step):</h3>`;
            sortLog.forEach((sort, index) => {
                log.innerHTML += `<div id="sort-${index}" class="log-container"><h4 class="log-title">Step ${index + 1}:</h4></div>`;
                sort.forEach(card => {
                    showCard4(card[0], card[1], `sort-${index}`);
                })
            })
        }
    }

    number.value = 1;
}