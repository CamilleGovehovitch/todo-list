const currentDay = document.getElementById('currentDay');
const cards = document.getElementsByClassName('card');
const deleteButtons = document.getElementsByClassName('delete-button');

let cardArray = [];

window.onload = () => {
  const newDate = new Date();
  const day = newDate.getDate() ;
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  currentDay.innerHTML = day.toString() + '/' + month.toString() + '/' + year.toString();
}

function createCard() {
  const card = new Card('title');
  card.createCard();
  for (let i = 0; i < cards.length; i++) {
    cards[i].setAttribute('id', card.id);
    cardArray.push(cards[i]);
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