class Card {
  constructor (title) {
    this.title = title;
  }
  createCard() {
    const cardManager = document.getElementById('cardManager');
    const cardElement = document.createElement('div');
    const controllersCard = this.createControllersCard();
    const contentCard = this.createContentCard();

    cardElement.classList.add('card');

    cardManager.appendChild(cardElement);
    cardElement.appendChild(controllersCard);
    cardElement.appendChild(contentCard);
  } 

  createControllersCard() {
    const controllersElement = document.createElement('div');
    const addTaskButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    controllersElement.classList.add('card-controllers');

    addTaskButton.appendChild(document.createTextNode('Add Task'));
    deleteButton.appendChild(document.createTextNode('Delete'));
    controllersElement.appendChild(addTaskButton);
    controllersElement.appendChild(deleteButton);

    return controllersElement
  }

  createContentCard() {
    const cardManager = document.getElementById('cardManager');
    const contentElement = document.createElement('div');
    const checkBoxElement = document.createElement('checkbox');
    const labelElement = document.createElement('label');

    contentElement.classList.add('card-content');
    contentElement.appendChild(checkBoxElement);
    contentElement.appendChild(labelElement);

    return contentElement;
  }
}