const cardList = [
  ["diamonds", "2", 1, "&#9830;"],
  ["diamonds", "3", 2, "&#9830;"],
  ["diamonds", "4", 3, "&#9830;"],
  ["diamonds", "5", 4, "&#9830;"],
  ["diamonds", "6", 5, "&#9830;"],
  ["diamonds", "7", 6, "&#9830;"],
  ["diamonds", "8", 7, "&#9830;"],
  ["diamonds", "9", 8, "&#9830;"],
  ["diamonds", "10", 9, "&#9830;"],
  ["diamonds", "J", 10, "&#9830;"],
  ["diamonds", "Q", 11, "&#9830;"],
  ["diamonds", "K", 12, "&#9830;"],
  ["diamonds", "A", 13, "&#9830;"],
  ["hearts", "2", 1, "&#9829;"],
  ["hearts", "3", 2, "&#9829;"],
  ["hearts", "4", 3, "&#9829;"],
  ["hearts", "5", 4, "&#9829;"],
  ["hearts", "6", 5, "&#9829;"],
  ["hearts", "7", 6, "&#9829;"],
  ["hearts", "8", 7, "&#9829;"],
  ["hearts", "9", 8, "&#9829;"],
  ["hearts", "10", 9, "&#9829;"],
  ["hearts", "J", 10, "&#9829;"],
  ["hearts", "Q", 11, "&#9829;"],
  ["hearts", "K", 12, "&#9829;"],
  ["hearts", "A", 13, "&#9829;"],
  ["spades", "2", 1, "&#9824;"],
  ["spades", "3", 2, "&#9824;"],
  ["spades", "4", 3, "&#9824;"],
  ["spades", "5", 4, "&#9824;"],
  ["spades", "6", 5, "&#9824;"],
  ["spades", "7", 6, "&#9824;"],
  ["spades", "8", 7, "&#9824;"],
  ["spades", "9", 8, "&#9824;"],
  ["spades", "10", 9, "&#9824;"],
  ["spades", "J", 10, "&#9824;"],
  ["spades", "Q", 11, "&#9824;"],
  ["spades", "K", 12, "&#9824;"],
  ["spades", "A", 13, "&#9824;"],
  ["clubs", "2", 1, "&#9827;"],
  ["clubs", "3", 2, "&#9827;"],
  ["clubs", "4", 3, "&#9827;"],
  ["clubs", "5", 4, "&#9827;"],
  ["clubs", "6", 5, "&#9827;"],
  ["clubs", "7", 6, "&#9827;"],
  ["clubs", "8", 7, "&#9827;"],
  ["clubs", "9", 8, "&#9827;"],
  ["clubs", "10", 9, "&#9827;"],
  ["clubs", "J", 10, "&#9827;"],
  ["clubs", "Q", 11, "&#9827;"],
  ["clubs", "K", 12, "&#9827;"],
  ["clubs", "A", 13, "&#9827;"],
];

const main = document.getElementById("main");

//
// Shows all the cards for debugging purposes
//
// for (var i = 0; i < cardList.length; i++) {
//   let item = document.createElement("div");
//   item.classList.add("card", `${cardList[i][0]}`);
//   item.innerHTML = `
//   <div class='suit'>${cardList[i][1]} ${cardList[i][3]}</div>
//   <div class='rank rank-${cardList[i][1]}'></div>
//   <div class='suit upside-down'>${cardList[i][1]} ${cardList[i][3]}</div>
//   `;
//   main.appendChild(item);
// }
//
// End show all the cards function
//

/**
 * Deal cards at the start of the game.
 */
function dealCards() {
  let shuffledCards = shuffleCards(cardList);

  player1.cards = shuffledCards.slice(0, shuffledCards.length / 2);
  player2.cards = shuffledCards.slice(shuffledCards.length / 2);
}

/**
 * Shuffles the array of cards in place.
 * @param {Array} cards a player's array of cards, derived from the `cardList` array
 */
function shuffleCards(cards) {
  let j, x, i;
  for (i = cards.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = cards[i];
    cards[i] = cards[j];
    cards[j] = x;
  }
  return cards;
}

class Player {
  constructor(cards, className) {
    this.cards = cards;
    this.className = className;
  }

  playCard() {
    return this.cards.pop();
  }
}

const player1 = new Player([], "player1");
const player2 = new Player([], "player2");
dealCards();
console.log(player1);

let decks = document.querySelectorAll(".deck");

decks.forEach((deck) => {
  let parentNode;
  deck.addEventListener("click", (e) => {
    parentNode = e.target.parentNode;

    if (parentNode.className.includes("player1")) {
      playerPlaysCard(player1);
    }

    if (parentNode.className.includes("player2")) {
      playerPlaysCard(player2);
    }
  });
});

function playerPlaysCard(player) {
  let playedCard = player.playCard();
  let newCard = document.querySelector(`.${player.className} .played-card`);
  newCard.classList.add("card", `${playedCard[0]}`);
  newCard.innerHTML = `
  <div class='suit'>${playedCard[1]} ${playedCard[3]}</div>
  <div class='rank rank-${playedCard[1]}'></div>
  <div class='suit upside-down'>${playedCard[1]} ${playedCard[3]}</div>
  `;
}
