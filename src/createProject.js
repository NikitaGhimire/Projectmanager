import { displayProjects } from "./viewProjects";

//creating a Project constructor
export function Project(title, description, todos = []){
  this.title = title;
  this.description = description;
  this.todos = todos;
  
}

//creating a function to create project
export function createProject(title, description){
  const project = new Project(title, description);
  return project;
}

//saving project to local storage
export function saveProject(project){
  let existingProjects = retrieveProject();

  // If existingProjects is null or undefined, initialize it as an empty array
  existingProjects = existingProjects || [];

  existingProjects.push(project);

  localStorage.setItem('myProjects', JSON.stringify(existingProjects));
}

//retriving project
export function retrieveProject(){
  const projects = JSON.parse(localStorage.getItem('myProjects'));
  // Check if projects is an array
  if (Array.isArray(projects)) {
    return projects;
  } else if (typeof projects === 'object' && projects !== null) {
    // Wrap single project object in an array
    return [projects];
  }
  
  return []; // Return empty array if no projects are found

  
}


export function loadProjectForm(){
  const projectForm = document.getElementById('content');
  projectForm.innerHTML = 
  `
  <form id="project-form">
    <label for="project-name">Project Name:</label><br>
    <input type="text" id="project-name" name="project-name" required><br>
      
    <label for="description">Project Description:</label><br>
    <textarea id="project-description" name="project-description"></textarea><br>
    <button type="submit">Create Project</button>
  `;
  
}

//to handle project form submit event 
export function handleProjectFormSubmit(event){
  event.preventDefault();

  //getting form values
  const projectNameInput = document.getElementById('project-name');
  const projectDescriptionInput = document.getElementById('project-description');

  const projectName = projectNameInput.value;
  const projectDescription = projectDescriptionInput.value;

  const project = createProject(projectName, projectDescription);
  

   // Save the project to localStorage
   try {
    saveProject(project);
    alert('Project created successfully!');
    displayProjects();

  } catch (error) {
    console.error('Error saving project:', error);
    alert('Error creating project. Please try again.');
  }


  //clear form input
  projectNameInput.value = '';
  projectDescriptionInput.value = '';

}

// Add event listener to project form
export function initializeProjectForm() {
  loadProjectForm();
  const projectForm = document.getElementById('project-form');
  projectForm.addEventListener('submit', handleProjectFormSubmit);
}


// Function to delete project from local storage
export function deleteProject(project) {
  // Retrieve existing projects from storage
  const existingProjects = JSON.parse(localStorage.getItem('myProjects')) || [];

  // Find the index of the project to delete
  const index = existingProjects.findIndex(p => p.title === project.title);

  // If the project is found, remove it from the array
  if (index !== -1) {
    existingProjects.splice(index, 1);

    // Save the updated projects array back to storage
    localStorage.setItem('myProjects', JSON.stringify(existingProjects));
  }
}
