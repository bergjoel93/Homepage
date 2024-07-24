import "./styles/style.css";
import HandleAboutMe from "./modules/HandleAboutMe.mjs";
import RenderProjects from "./modules/RenderProjects.mjs";
import Carousel from "./modules/Carousel.mjs";
import { handleNav } from "./modules/Nav.mjs";

const handleAboutMe = new HandleAboutMe();
const renderProjects = new RenderProjects();
handleAboutMe.renderAboutMe();

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

// // Handle mobile hamburger nav menu
// document.addEventListener("DOMContentLoaded", () => {
//   const hamburgerMenu = document.getElementById("hamburger-menu");
//   const mobileNavButtonsContainer = document.getElementById(
//     "mobile-nav-buttons-container"
//   );
//   const closeButton = document.getElementById("close-button");

//   hamburgerMenu.addEventListener("click", () => {
//     if (mobileNavButtonsContainer.style.display == "flex") {
//       mobileNavButtonsContainer.style.display = "none";
//     } else {
//       mobileNavButtonsContainer.style.display = "flex";
//     }
//   });

//   window.addEventListener("click", (event) => {
//     if (
//       event.target !== mobileNavButtonsContainer &&
//       event.target !== hamburgerMenu &&
//       !mobileNavButtonsContainer.contains(event.target)
//     ) {
//       mobileNavButtonsContainer.style.display = "none";
//     }
//   });
// });

// // Handle about menu for mobile
// document.addEventListener("DOMContentLoaded", () => {
//   // Ensure script runs after DOM is fully loaded
//   const aboutHamburger = document.querySelector("#about-menu-toggle"); // Updated selector
//   const mobileAboutMenu = document.querySelector("#mobile-menu-container"); // Updated selector

//   aboutHamburger.addEventListener("click", (event) => {
//     event.stopPropagation(); // Prevent the click from propagating to the window
//     console.log("test");
//     if (mobileAboutMenu.style.display === "flex") {
//       mobileAboutMenu.style.display = "none";
//     } else {
//       mobileAboutMenu.style.display = "flex";
//     }
//   });

//   window.addEventListener("click", (event) => {
//     if (
//       !mobileAboutMenu.contains(event.target) &&
//       event.target !== aboutHamburger
//     ) {
//       mobileAboutMenu.style.display = "none";
//     }
//   });

//   mobileAboutMenu.addEventListener("click", (event) => {
//     event.stopPropagation(); // Prevent the click inside the menu from propagating to the window
//   });
// });
