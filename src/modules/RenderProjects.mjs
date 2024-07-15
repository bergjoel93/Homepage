import { projects } from "./Projects.mjs";
/**
 * The purpose of this module is to render all of the project cards with their respective handlers (if needed)
 */

export default class RenderProjects {
  constructor() {
    this.projects = projects;
    this.cardContainer = document.querySelector(".carousel");
    this.colors = [
      "--carousel-color-0",
      "--carousel-color-1",
      "--carousel-color-2",
      "--carousel-color-3",
    ];
    this.renderCards();
  }
  // Renders the cards by appending them to the project-card-container
  renderCards() {
    let degree = 0;
    let i = 0;
    Object.keys(this.projects).forEach((key) => {
      if (i > 3) i = 0;
      const project = projects[key];
      this.cardContainer.appendChild(this.generateCard(project, degree, i));
      degree += 45;
      i++;
    });
  }

  generateCard(project, degree, i) {
    let card = document.createElement("div");
    card.className = "project-card";
    card.style.backgroundColor = `var(${this.colors[i]})`;
    card.style.transform = `rotateY(${degree}deg) translateZ(366px)`;
    card.innerHTML = `
        <div class="project-card-img-container">
        <img src="${project.img}" alt="${project.name} Screenshot" class="project-screenshot">
        </div>

        <div class="project-info-container">
        <div class="project-info-title-container">
            <h3 class="project-name">${project.name}</h3>
            <div class="project-links">
            <a class="view-code" href="${project.repo}"  target="_blank">
                <img src="./assets/icons/github-142-svgrepo-com.svg" alt="Go to code">
            </a>
            <a class="view-live" href="${project.live}"  target="_blank">
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
