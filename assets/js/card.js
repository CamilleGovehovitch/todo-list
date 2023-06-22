class Card {
  constructor (title) {
    this.id = Date.now();
    this.title = title;
  }
  createCard() {
    const cardManager = document.getElementById('cardManager');
    const cardElement = document.createElement('div');
    const controllersCard = this.createControllersCard();
    const contentCard = this.createContentCard();
    const titleCard = this.createTitleCard();

    cardElement.classList.add('card');

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

    deleteButton.onclick = () => {
      deleteCard(this.id);
    }

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
  
  addTask(task) {
    console.log(task);
  }
}