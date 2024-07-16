import "./styles/style.css";
import HandleAboutMe from "./modules/HandleAboutMe.mjs";
import RenderProjects from "./modules/RenderProjects.mjs";
import Carousel from "./modules/Carousel.mjs";
import { handleNav } from "./modules/Nav.mjs";

// work on about section.
// When I click skills, the .about-me-container will clear and then the skills table will be inserted.
const handleAboutMe = new HandleAboutMe();
const renderProjects = new RenderProjects();

// Carousel
$(document).ready(function () {
  const carousel = new Carousel(".carousel", ".next", ".prev");
});

// Handle navigation menu
handleNav();

// handle resume button
const resumeBtn = document.querySelector(".download-resume");
resumeBtn.addEventListener("click", () => {
  window.open("./assets/resume/Joel-Resume.pdf");
});

// handle back to top button
const backToTopBtn = document.querySelector(".back-to-top-button");
backToTopBtn.addEventListener("click", () => {
  const home = document.querySelector("#section-home");
  window.scrollTo({
    top: home.offsetTop,
    behavior: "smooth",
  });
});
