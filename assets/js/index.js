const currentDay = document.getElementById('currentDay');
const cards = document.getElementsByClassName('card');
const deleteButtons = document.getElementsByClassName('delete-button');
const addCardButton = document.getElementById('addCardButton');

document.addEventListener('DOMContentLoaded', function () {
  const currentDay = document.getElementById('currentDay');

  // Affichage de la date du jour
  const newDate = new Date();
  const day = newDate.getDate() ;
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  currentDay.innerHTML = day.toString() + '/' + month.toString() + '/' + year.toString();
});



let cardArray = [];

addCardButton.addEventListener('click', createCard);


function createCard() {
  const card = new Card('title');
  cardArray.push(card);
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
  localStorage.setItem('Card-' + card.id, card.id);
  const maValeur = localStorage.getItem('Card');
  console.log(localStorage);

}


