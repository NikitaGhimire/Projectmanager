import { retrieveProject, saveProject} from "./createProject.js";
//creating a todo constructor
export function Todos(title, description, dueDate, priority, notes, checklist){
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.priority = priority;
  this.notes = notes;
  this.checklist = checklist;
}

//creating a function to todo
export function createTodo(title, description, dueDate, priority, notes, checklist){
  const todo = new Todos(title, description, dueDate, priority, notes, checklist);
  return todo;
}

//saving project to local storage
export function saveTodo(todo){
  const existingTodos = retrieveTodo() || [];
  existingTodos.push(todo);
  localStorage.setItem('myTodos', JSON.stringify(existingTodos));
}

//retriving project
export function retrieveTodo() {
  const myTodos = JSON.parse(localStorage.getItem('myTodos'));
  if (!Array.isArray(myTodos) && myTodos !== null) {
    throw new Error('Invalid todo data: expected an array or null.');
  }
  return myTodos || [];
}

//function to add todo to project 
export function addTodoToProject(todo, project){
  project.todos.push(todo);
}
export function loadTodoForm(project) {
  const todoForm = document.createElement('form');
  todoForm.id = 'todoForm';
  todoForm.innerHTML = `
    <label for="title">Title:</label><br>
    <input type="text" id="title" name="title" required><br>

    <label for="description">Description:</label><br>
    <textarea id="description" name="description" required></textarea><br>

    <label for="due-date">Due Date:</label><br>
    <input type="date" id="due-date" name="due-date" required><br>

    <label for="priority">Priority:</label><br>
    <select id="priority" name="priority" required>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select><br>

    <label for="notes">Notes:</label><br>
    <textarea id="notes" name="notes"></textarea><br>

    <label for="checklist">Checklist:</label><br>
    <input type="text" id="checklist" name="checklist"><br>

    <button type="submit" id="submit-todo">Add Todo</button>
  `;
  
  // Append the form to the DOM
  document.body.appendChild(todoForm);

  // Initialize the todo form
  initializeTodoForm(project);

  return todoForm;
}


export function handleTodoFormSubmit(event, project) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form values
  const titleInput = document.getElementById('title');
  const descriptionInput = document.getElementById('description');
  const dueDateInput = document.getElementById('due-date');
  const priorityInput = document.getElementById('priority');
  const notesInput = document.getElementById('notes');
  const checklistInput = document.getElementById('checklist');
  

  const title = titleInput.value;
  const description = descriptionInput.value;
  const dueDate = dueDateInput.value;
  const priority = priorityInput.value;
  const notes = notesInput.value;
  const checklist = checklistInput.value;
  
   // Check if project object is defined
   if (!project) {
    console.error('Error: Project is undefined.');
    return;
  }
  // Create todo object
  const todo = createTodo(title, description, dueDate, priority, notes, checklist, project.title);

  console.log(todo);

  // Save the todo to localStorage
  try {
    saveTodo(todo);
    alert('Todo created successfully!');

  // Add the todo to the project's todos array
   addTodoToProject(todo, project);
   alert('added to project');


  // Save the updated project
  saveProject(project);
  alert('saved updated project');
    
  } catch (error) {
    console.error('Error saving todo:', error);
    alert('Error creating todo. Please try again.');
  }

  // Clear form inputs
  titleInput.value = '';
  descriptionInput.value = '';
  dueDateInput.value = '';
  priorityInput.value = 'High'; // Set default priority
  notesInput.value = '';
  checklistInput.value = '';

}

// Add event listener to todo form
export function initializeTodoForm(project) {
  const todoForm = document.getElementById('todoForm');
  console.log(todoForm);
  todoForm.addEventListener('submit', (event) => handleTodoFormSubmit(event, project));
  console.log("form initialised");
}