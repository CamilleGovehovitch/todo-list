const currentDay = document.getElementById('currentDay');
const cards = document.getElementsByClassName('card');
const deleteButtons = document.getElementsByClassName('delete-button');
const addCardButton = document.getElementById('addCardButton');
document.addEventListener('DOMContentLoaded', function () {
  const currentDay = document.getElementById('currentDay');
  const cardManager = document.getElementById('cardManager');

  // Le reste de votre code JavaScript va ici
});

let cardArray = [];
let te = [];

window.onload = () => {
  const newDate = new Date();
  const day = newDate.getDate() ;
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  currentDay.innerHTML = day.toString() + '/' + month.toString() + '/' + year.toString();
}

addCardButton.addEventListener('click', createCard);


function createCard() {
  const card = new Card('title');
  card.createCard();
  for (let i = 0; i < cards.length; i++) {
    cards[i].setAttribute('id', 'card-' + (i + 1));
    cardArray.push(cards[i]);
    console.log(cardArray);
  }
}

function deleteCard(cardId) {
  let elementToDelete = null;
  for (let i = 0; i < cards.length; i++) {
    if (parseInt(cards[i].id) === cardId) {
      elementToDelete = cards[i];
    }
  }
  elementToDelete.remove();
}
