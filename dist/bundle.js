/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   handleProjectFormSubmit: () => (/* binding */ handleProjectFormSubmit),\n/* harmony export */   initializeProjectForm: () => (/* binding */ initializeProjectForm),\n/* harmony export */   loadProjectForm: () => (/* binding */ loadProjectForm),\n/* harmony export */   retrieveProject: () => (/* binding */ retrieveProject),\n/* harmony export */   saveProject: () => (/* binding */ saveProject)\n/* harmony export */ });\n/* harmony import */ var _viewProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewProjects */ \"./src/viewProjects.js\");\n\n\n//creating a Project constructor\nfunction Project(title, description) {\n  let todos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  this.title = title;\n  this.description = description;\n  this.todos = todos;\n}\n\n//creating a function to create project\nfunction createProject(title, description) {\n  const project = new Project(title, description);\n  return project;\n}\n\n//saving project to local storage\nfunction saveProject(project) {\n  let existingProjects = retrieveProject();\n\n  // If existingProjects is null or undefined, initialize it as an empty array\n  existingProjects = existingProjects || [];\n  existingProjects.push(project);\n  localStorage.setItem('myProjects', JSON.stringify(existingProjects));\n}\n\n//retriving project\nfunction retrieveProject() {\n  const projects = JSON.parse(localStorage.getItem('myProjects'));\n  // Check if projects is an array\n  if (Array.isArray(projects)) {\n    return projects;\n  } else if (typeof projects === 'object' && projects !== null) {\n    // Wrap single project object in an array\n    return [projects];\n  }\n  return []; // Return empty array if no projects are found\n}\nfunction loadProjectForm() {\n  const projectForm = document.getElementById('content');\n  projectForm.innerHTML = `\n  <form id=\"project-form\">\n    <label for=\"project-name\">Project Name:</label><br>\n    <input type=\"text\" id=\"project-name\" name=\"project-name\" required><br>\n      \n    <label for=\"description\">Project Description:</label><br>\n    <textarea id=\"project-description\" name=\"project-description\"></textarea><br>\n    <button type=\"submit\">Create Project</button>\n  `;\n}\n\n//to handle project form submit event \nfunction handleProjectFormSubmit(event) {\n  event.preventDefault();\n\n  //getting form values\n  const projectNameInput = document.getElementById('project-name');\n  const projectDescriptionInput = document.getElementById('project-description');\n  const projectName = projectNameInput.value;\n  const projectDescription = projectDescriptionInput.value;\n  const project = createProject(projectName, projectDescription);\n\n  // Save the project to localStorage\n  try {\n    saveProject(project);\n    alert('Project created successfully!');\n    (0,_viewProjects__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();\n  } catch (error) {\n    console.error('Error saving project:', error);\n    alert('Error creating project. Please try again.');\n  }\n\n  //clear form input\n  projectNameInput.value = '';\n  projectDescriptionInput.value = '';\n}\n\n// Add event listener to project form\nfunction initializeProjectForm() {\n  loadProjectForm();\n  const projectForm = document.getElementById('project-form');\n  projectForm.addEventListener('submit', handleProjectFormSubmit);\n}\n\n// Function to delete project from local storage\nfunction deleteProject(project) {\n  // Retrieve existing projects from storage\n  const existingProjects = JSON.parse(localStorage.getItem('myProjects')) || [];\n\n  // Find the index of the project to delete\n  const index = existingProjects.findIndex(p => p.title === project.title);\n\n  // If the project is found, remove it from the array\n  if (index !== -1) {\n    existingProjects.splice(index, 1);\n\n    // Save the updated projects array back to storage\n    localStorage.setItem('myProjects', JSON.stringify(existingProjects));\n  }\n}\n\n//# sourceURL=webpack://projectmanager/./src/createProject.js?");

/***/ }),

/***/ "./src/createtodos.js":
/*!****************************!*\
  !*** ./src/createtodos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todos: () => (/* binding */ Todos),\n/* harmony export */   addTodoToProject: () => (/* binding */ addTodoToProject),\n/* harmony export */   createTodo: () => (/* binding */ createTodo),\n/* harmony export */   handleTodoFormSubmit: () => (/* binding */ handleTodoFormSubmit),\n/* harmony export */   initializeTodoForm: () => (/* binding */ initializeTodoForm),\n/* harmony export */   loadTodoForm: () => (/* binding */ loadTodoForm),\n/* harmony export */   retrieveTodo: () => (/* binding */ retrieveTodo),\n/* harmony export */   saveTodo: () => (/* binding */ saveTodo)\n/* harmony export */ });\n/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject.js */ \"./src/createProject.js\");\n\n//creating a todo constructor\nfunction Todos(title, description, dueDate, priority, notes, checklist) {\n  this.title = title;\n  this.description = description;\n  this.dueDate = dueDate;\n  this.priority = priority;\n  this.priority = priority;\n  this.notes = notes;\n  this.checklist = checklist;\n}\n\n//creating a function to todo\nfunction createTodo(title, description, dueDate, priority, notes, checklist) {\n  const todo = new Todos(title, description, dueDate, priority, notes, checklist);\n  return todo;\n}\n\n//saving project to local storage\nfunction saveTodo(todo) {\n  const existingTodos = retrieveTodo() || [];\n  existingTodos.push(todo);\n  localStorage.setItem('myTodos', JSON.stringify(existingTodos));\n}\n\n//retriving project\nfunction retrieveTodo() {\n  const myTodos = JSON.parse(localStorage.getItem('myTodos'));\n  if (!Array.isArray(myTodos) && myTodos !== null) {\n    throw new Error('Invalid todo data: expected an array or null.');\n  }\n  return myTodos || [];\n}\n\n//function to add todo to project \nfunction addTodoToProject(todo, project) {\n  project.todos.push(todo);\n}\nfunction loadTodoForm(project) {\n  const todoForm = document.createElement('form');\n  todoForm.id = 'todoForm';\n  todoForm.innerHTML = `\n    <label for=\"title\">Title:</label><br>\n    <input type=\"text\" id=\"title\" name=\"title\" required><br>\n\n    <label for=\"description\">Description:</label><br>\n    <textarea id=\"description\" name=\"description\" required></textarea><br>\n\n    <label for=\"due-date\">Due Date:</label><br>\n    <input type=\"date\" id=\"due-date\" name=\"due-date\" required><br>\n\n    <label for=\"priority\">Priority:</label><br>\n    <select id=\"priority\" name=\"priority\" required>\n      <option value=\"High\">High</option>\n      <option value=\"Medium\">Medium</option>\n      <option value=\"Low\">Low</option>\n    </select><br>\n\n    <label for=\"notes\">Notes:</label><br>\n    <textarea id=\"notes\" name=\"notes\"></textarea><br>\n\n    <label for=\"checklist\">Checklist:</label><br>\n    <input type=\"text\" id=\"checklist\" name=\"checklist\"><br>\n\n    <button type=\"submit\" id=\"submit-todo\">Add Todo</button>\n  `;\n\n  // Append the form to the DOM\n  document.body.appendChild(todoForm);\n\n  // Initialize the todo form\n  initializeTodoForm(project);\n  return todoForm;\n}\nfunction handleTodoFormSubmit(event, project) {\n  event.preventDefault(); // Prevent the default form submission behavior\n\n  // Get form values\n  const titleInput = document.getElementById('title');\n  const descriptionInput = document.getElementById('description');\n  const dueDateInput = document.getElementById('due-date');\n  const priorityInput = document.getElementById('priority');\n  const notesInput = document.getElementById('notes');\n  const checklistInput = document.getElementById('checklist');\n  const title = titleInput.value;\n  const description = descriptionInput.value;\n  const dueDate = dueDateInput.value;\n  const priority = priorityInput.value;\n  const notes = notesInput.value;\n  const checklist = checklistInput.value;\n\n  // Check if project object is defined\n  if (!project) {\n    console.error('Error: Project is undefined.');\n    return;\n  }\n  // Create todo object\n  const todo = createTodo(title, description, dueDate, priority, notes, checklist, project.title);\n  console.log(todo);\n\n  // Save the todo to localStorage\n  try {\n    saveTodo(todo);\n    alert('Todo created successfully!');\n\n    // Add the todo to the project's todos array\n    addTodoToProject(todo, project);\n    alert('added to project');\n\n    // Save the updated project\n    (0,_createProject_js__WEBPACK_IMPORTED_MODULE_0__.saveProject)(project);\n    alert('saved updated project');\n  } catch (error) {\n    console.error('Error saving todo:', error);\n    alert('Error creating todo. Please try again.');\n  }\n\n  // Clear form inputs\n  titleInput.value = '';\n  descriptionInput.value = '';\n  dueDateInput.value = '';\n  priorityInput.value = 'High'; // Set default priority\n  notesInput.value = '';\n  checklistInput.value = '';\n}\n\n// Add event listener to todo form\nfunction initializeTodoForm(project) {\n  const todoForm = document.getElementById('todoForm');\n  console.log(todoForm);\n  todoForm.addEventListener('submit', event => handleTodoFormSubmit(event, project));\n  console.log(\"form initialised\");\n}\n\n//# sourceURL=webpack://projectmanager/./src/createtodos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearContent: () => (/* binding */ clearContent)\n/* harmony export */ });\n/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject.js */ \"./src/createProject.js\");\n/* harmony import */ var _viewProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewProjects.js */ \"./src/viewProjects.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Clear content when DOM content is loaded\n  clearContent();\n  const tabs = document.querySelectorAll('.tab');\n  tabs.forEach(tab => {\n    tab.addEventListener('click', () => {\n      // Clear content before loading new content\n      clearContent();\n\n      // Load content based on tab id\n      if (tab.id === 'create-project') {\n        (0,_createProject_js__WEBPACK_IMPORTED_MODULE_0__.loadProjectForm)();\n        (0,_createProject_js__WEBPACK_IMPORTED_MODULE_0__.initializeProjectForm)();\n      } else if (tab.id === 'view-project') {\n        (0,_viewProjects_js__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();\n      }\n    });\n  });\n});\nfunction clearContent() {\n  const content = document.getElementById('content');\n  content.innerHTML = '';\n}\n\n//# sourceURL=webpack://projectmanager/./src/index.js?");

/***/ }),

/***/ "./src/viewProjects.js":
/*!*****************************!*\
  !*** ./src/viewProjects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayProjects: () => (/* binding */ displayProjects)\n/* harmony export */ });\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _createtodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createtodos.js */ \"./src/createtodos.js\");\n\n\nfunction displayProjects() {\n  const content = document.getElementById('content');\n  content.innerHTML = '';\n  const projects = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.retrieveProject)() || [];\n  if (projects.length === 0) {\n    content.innerHTML = '<p>No projects found.</p>';\n    return;\n  }\n\n  // Display the projects\n  projects.forEach(project => {\n    const projectElement = document.createElement('div');\n    projectElement.innerHTML = `\n      <h2>Project Name: ${project.title}</h2>\n      <p>Project Description: ${project.description}</p>\n    `;\n\n    // Add Todo button\n    const addTodoButton = document.createElement('button');\n    addTodoButton.textContent = 'Add Todo';\n    projectElement.appendChild(addTodoButton);\n\n    // Append the project element to the content\n    content.appendChild(projectElement);\n    addTodoButton.addEventListener('click', () => {\n      // Load and display the todo form\n      const todoForm = (0,_createtodos_js__WEBPACK_IMPORTED_MODULE_1__.loadTodoForm)(project);\n      projectElement.appendChild(todoForm);\n      detailsSection.innerHTML = '';\n      todoForm.style.display = 'block';\n    });\n\n    // Create Delete Project button\n    const deleteButton = document.createElement('button');\n    deleteButton.textContent = 'Delete Project';\n    projectElement.appendChild(deleteButton);\n\n    // Event listener for Delete Project button\n    deleteButton.addEventListener('click', () => {\n      (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(project);\n      displayProjects(); // Reload the view after deleting the project\n    });\n\n    // Create View Project Details button\n    const detailsButton = document.createElement('button');\n    detailsButton.textContent = 'View Todo items';\n    projectElement.appendChild(detailsButton);\n\n    // Event listener for View Project Details button\n    //   \n    // Event listener for View Project Details button\n    detailsButton.addEventListener('click', () => {\n      // Hide the add todo form if it's visible\n      todoForm.innerHTML = '';\n      displayProjectDetails(projectElement, project); // Call displayProjectDetails function\n    });\n  });\n}\nfunction displayProjectDetails(projectElement, project) {\n  // Attempt to find the project details section\n  let detailsSection = projectElement.querySelector('.project-details');\n\n  // If the details section doesn't exist, create it\n  if (!detailsSection) {\n    detailsSection = document.createElement('div');\n    detailsSection.classList.add('project-details'); // Add the class\n    projectElement.appendChild(detailsSection);\n  }\n\n  // Toggle visibility of project details section\n  detailsSection.style.display = detailsSection.style.display === 'none' ? 'block' : 'none';\n\n  // Clear previous details\n  detailsSection.innerHTML = '';\n\n  // Render project details\n  detailsSection.innerHTML += `\n  \n    <h3>Todo List</h3>\n  `;\n\n  // Render todo items\n  if (project.todos.length > 0) {\n    const todoList = document.createElement('ul');\n    project.todos.forEach(todo => {\n      const todoItem = document.createElement('li');\n      todoItem.textContent = `${todo.title} --- Due Date: ${todo.dueDate} --- Priority: ${todo.priority}   `;\n\n      // Create the delete button element\n      const deleteButton = document.createElement('button');\n      deleteButton.textContent = 'Delete this item'; // Set the button text\n      deleteButton.classList.add('delete-button'); // Add a class for styling (optional)\n\n      // Add an event listener to handle the deletion\n      deleteButton.addEventListener('click', function () {\n        // Remove the todo item from the DOM\n        todoItem.remove();\n        // Remove the item from the project.todos array\n        project.todos.splice(index, 1);\n        // Optionally, save the updated project data to persistent storage here\n      });\n\n      // Append the delete button to the to-do item\n      todoItem.appendChild(deleteButton);\n\n      // Append the to-do item to the list\n      todoList.appendChild(todoItem);\n    });\n    detailsSection.appendChild(todoList);\n  } else {\n    detailsSection.innerHTML += '<p>No todo items found for this project.</p>';\n  }\n}\n\n//# sourceURL=webpack://projectmanager/./src/viewProjects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;