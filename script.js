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

for (var i = 0; i < cardList.length; i++) {
  let item = document.createElement("div");
  item.classList.add("card", `${cardList[i][0]}`);
  item.innerHTML = `
  <div class='suit'>${cardList[i][1]} ${cardList[i][3]}</div>
  <div class='rank rank-${cardList[i][1]}'></div>
  <div class='suit upside-down'>${cardList[i][1]} ${cardList[i][3]}</div>
  `;
  main.appendChild(item);
}
