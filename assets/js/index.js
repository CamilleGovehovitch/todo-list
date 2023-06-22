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
  card.createCard();
}
