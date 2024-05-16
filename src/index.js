import { initializeProjectForm, loadProjectForm } from "./createProject.js";
import { displayProjects } from "./viewProjects.js";

document.addEventListener('DOMContentLoaded', () => {
  // Clear content when DOM content is loaded
  clearContent();

  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Clear content before loading new content
      clearContent();

      // Load content based on tab id
      if (tab.id === 'create-project') {
        loadProjectForm();
        initializeProjectForm();
      } else if(tab.id === 'view-project') {
        displayProjects();
      } 
    });
  });
});

export function clearContent(){
  const content = document.getElementById('content');
  content.innerHTML = '';
}
