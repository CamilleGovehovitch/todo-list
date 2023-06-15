const currentDay = document.getElementById('currentDay');
const cards = document.getElementsByClassName('card');
let cardArray = [];

window.onload = () => {
  const newDate = new Date();
  const day = newDate.getDate() ;
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  currentDay.innerHTML = day.toString() + '/' + month.toString() + '/' + year.toString();
}

function createCard() {
  // let title = window.prompt('Veuillez entrer un titre de carte').value;
  const card = new Card('title');
  card.createCard();
  for (let i = 0; i < cards.length; i++) {
    cards[i].setAttribute('id', 'card-' + (i + 1));
    cardArray.push(cards[i]);
    console.log(cardArray);
  }
}

function deleteCard(cardArray) {
  console.log(cardArray);
}