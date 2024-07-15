import { projects } from "./Projects.mjs";
/**
 * The purpose of this module is to render all of the project cards with their respective handlers (if needed)
 */

export default class RenderProjects {
  constructor() {
    this.projects = projects;
    this.cardContainer = document.querySelector(".project-card-container");
    this.renderCards();
  }
  // Renders the cards by appending them to the project-card-container
  renderCards() {
    Object.keys(this.projects).forEach((key) => {
      const project = projects[key];
      this.cardContainer.appendChild(this.generateCard(project));
    });
  }

  generateCard(project) {
    let card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
        <div class="project-card-img-container">
        <img src="${project.img}" alt="${project.name} Screenshot" class="project-screenshot">
        </div>

        <div class="project-info-container">
        <div class="project-info-title-container">
            <h3 class="project-name">${project.name}</h3>
            <div class="project-links">
            <a class="view-code" href="${project.repo}">
                <img src="./assets/icons/github-142-svgrepo-com.svg" alt="Go to code">
            </a>
            <a class="view-live" href="${project.live}">
                <img src="./assets/icons/open-in-new-svgrepo-com.svg" alt="Go to live website">
            </a>
            </div>
        </div>
        <div class="project-description-container">
            <p class="project-description">
            ${project.description}
            </p>
        </div>
        </div>

    `;
    return card;
  }
}
