import { retrieveProject, deleteProject } from "./createProject";
import { loadTodoForm } from "./createtodos.js";

export function displayProjects() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const projects = retrieveProject() || [];

  if (projects.length === 0) {
    content.innerHTML = '<p>No projects found.</p>';
    return;
  }
  
  // Display the projects
  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.innerHTML = `
      <h2>Project Name: ${project.title}</h2>
      <p>Project Description: ${project.description}</p>
    `;

    // Create buttons
    // Add Todo button
    const addTodoButton = document.createElement('button');
    addTodoButton.textContent = 'Add Todo';
    projectElement.appendChild(addTodoButton);

    // Append the project element to the content
    content.appendChild(projectElement);

    addTodoButton.addEventListener('click', () => {
      
      // Load and display the todo form
      const todoForm = loadTodoForm(project);
      projectElement.appendChild(todoForm);
      todoForm.style.display = 'block';
    });

    // Create Delete Project button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Project';
    projectElement.appendChild(deleteButton);

    // Event listener for Delete Project button
    deleteButton.addEventListener('click', () => {
      deleteProject(project);
      displayProjects(); // Reload the view after deleting the project
    });

    // Create View Project Details button
    const detailsButton = document.createElement('button');
    detailsButton.textContent = 'View Todo items';
    projectElement.appendChild(detailsButton);

    // Event listener for View Project Details button
    //   
    // Event listener for View Project Details button
    detailsButton.addEventListener('click', () => {
    // Hide the add todo form if it's visible
    displayProjectDetails(projectElement, project); // Call displayProjectDetails function
  });
  });
}

function displayProjectDetails(projectElement, project) {
  // Attempt to find the project details section
  let detailsSection = projectElement.querySelector('.project-details');

  // If the details section doesn't exist, create it
  if (!detailsSection) {
    detailsSection = document.createElement('div');
    detailsSection.classList.add('project-details'); // Add the class
    projectElement.appendChild(detailsSection);
  }

  // Toggle visibility of project details section
  detailsSection.style.display = detailsSection.style.display === 'none' ? 'block' : 'none';

  // Clear previous details
  detailsSection.innerHTML = '';

  // Render project details
  detailsSection.innerHTML += `
  
    <h3>Todo List</h3>
  `;

  // Render todo items
  if (project.todos.length > 0) {
    const todoList = document.createElement('ul');
    project.todos.forEach(todo => {
      const todoItem = document.createElement('li');
      todoItem.textContent = `${todo.title} - Due Date: ${todo.dueDate}`;
      todoList.appendChild(todoItem);
    });
    detailsSection.appendChild(todoList);
  } else {
    detailsSection.innerHTML += '<p>No todo items found for this project.</p>';
  }
}

