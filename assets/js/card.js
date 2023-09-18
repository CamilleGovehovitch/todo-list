class Card {
  static idCounter = 0;
  constructor (title) {
    this.id = Card.idCounter++;
    this.title = title;
    // this.createCard();
  }
  createCard() {
    const cardManager = document.getElementById('cardManager');
    const cardElement = document.createElement('div');
    const controllersCard = this.createControllersCard();
    const contentCard = this.createContentCard();
    const titleCard = this.createTitleCard();

    cardElement.classList.add('card');
    cardElement.setAttribute('data-card-id', this.id); // Ajouter un attribut data pour stocker l'ID
    
    cardManager.appendChild(cardElement);
    cardElement.appendChild(controllersCard);
    cardElement.appendChild(contentCard);
    cardElement.appendChild(titleCard);
  } 

  createControllersCard() {
    const controllersElement = document.createElement('div');
    const addTaskButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    controllersElement.classList.add('card-controllers');
    deleteButton.setAttribute('class', 'delete-button');

    deleteButton.addEventListener('click', () => {
      this.deleteCard();
    })

    addTaskButton.appendChild(document.createTextNode('Add Task'));
    deleteButton.appendChild(document.createTextNode('Delete'));
    controllersElement.appendChild(addTaskButton);
    controllersElement.appendChild(deleteButton);

    return controllersElement
  }

  createContentCard() {
    const contentElement = document.createElement('div');

    contentElement.classList.add('card-content');

    return contentElement;
  }

  createTitleCard() {
    const titleContainer = document.createElement('div');

    titleContainer.classList.add('card-title');

    return titleContainer;
  }
  
  deleteCard() {
    const cardElement = document.querySelector(`[data-card-id="${this.id}"]`);
    if (cardElement) {
      cardElement.remove();
    }
  }  
  
  addTask(task) {
    console.log(task);
  }
}