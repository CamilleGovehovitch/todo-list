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

    addTaskButton.addEventListener('click', () => {
      console.log(this.id);
      this.createTask();
    })

    addTaskButton.appendChild(document.createTextNode('Add Task'));
    deleteButton.appendChild(document.createTextNode('Delete'));

    // make icons clickable
    addTaskButton.onclick = () => {
      console.log('hello');
    }
    deleteButton.onclick = () => {
      console.log()
    }
    controllersElement.appendChild(addTaskButton);
    controllersElement.appendChild(deleteButton);

    return controllersElement
  }

  createContentCard() {
    const cardManager = document.getElementById('cardManager');
    const contentElement = document.createElement('div');
    const addTaskButton = document.createElement('button');
    const unorderedTaskList = document.createElement('ul');
    contentElement.classList.add('card-content');
    unorderedTaskList.setAttribute('id', 'taskList-' + this.id);
    contentElement.appendChild(unorderedTaskList);
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