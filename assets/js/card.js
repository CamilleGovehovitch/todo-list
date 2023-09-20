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
      this.createTask();
    })

    addTaskButton.appendChild(document.createTextNode('Add Task'));
    deleteButton.appendChild(document.createTextNode('Delete'));
    controllersElement.appendChild(addTaskButton);
    controllersElement.appendChild(deleteButton);

    return controllersElement
  }

  createContentCard() {
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
    const titleTag = document.createElement('h2');

    // ajout du label de priorité
    const labelTag = this.createLabel();

    const titlePrompt = prompt('Entrez un titre');
    titleContainer.classList.add('card-title');
    titleContainer.setAttribute('id', 'titleId-' + this.id);
    titleTag.appendChild(document.createTextNode(titlePrompt));
    titleContainer.appendChild(titleTag);
    titleContainer.appendChild(labelTag);
    return titleContainer;
  }
  
  deleteCard() {
    const cardElement = document.querySelector('[data-card-id="' + this.id + '"]');
    if (cardElement) {
      cardElement.remove();
    }
  }  

  createTask() {
    const unorderedTaskList = document.getElementById('taskList-' + this.id);
    const contentElement = document.createElement('div');
    const taskContainer = document.createElement('div');
    const liContainer = document.createElement('div');
    const taskCheckControlContainer = document.createElement('div');
    const liContent = document.createElement('span');
    const liCheckbox = document.createElement('input');
    const removeIcon = document.createElement('i');

    removeIcon.classList.add('fas');
    removeIcon.classList.add('fa-times')
    liContainer.classList.add('liContent');
    taskCheckControlContainer.classList.add('task-check');
    liCheckbox.setAttribute('type', 'checkbox');

    removeIcon.addEventListener('click', () => {
      liContainer.remove();
    })
    const liTag = document.createElement('li');

    const task = prompt('Entrer une tâche');
    liContent.appendChild(document.createTextNode(task));
    liContainer.appendChild(taskCheckControlContainer);
    taskCheckControlContainer.appendChild(liCheckbox);
    taskCheckControlContainer.appendChild(liContent);
    liContainer.appendChild(removeIcon);
    liTag.appendChild(liContainer);
    unorderedTaskList.appendChild(liTag);
    contentElement.appendChild(taskContainer);

    liCheckbox.addEventListener('click', () => {
      if (liCheckbox.checked) {
        liContent.classList.add('task-checked');
      }
      if (!liCheckbox.checked) {
        liContent.classList.remove('task-checked');
      }
    })    
  }

  createLabel (){
    console.log('haaa');
    const labelContainer = document.createElement('div');
    const labelTag = document.createElement('span');

    labelTag.appendChild(document.createTextNode('priorité'));
    labelContainer.appendChild(labelTag);

    return labelContainer;
  }
} 
