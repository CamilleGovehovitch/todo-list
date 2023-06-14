const currentDay = document.getElementById('currentDay');

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
}