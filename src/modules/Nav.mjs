/**
 * This module is responsible for handling the navigation buttons so that when the user clicks on them, they will automatically scroll down to the relavent parts of the page.
 */

function handleNav() {
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-button");
    const navBarHeight = document.querySelector("nav").offsetHeight;

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        console.log(targetSection);

        window.scrollTo({
          top: targetSection.offsetTop - navBarHeight,
          behavior: "smooth",
        });
      });
    });
  });
}

export { handleNav };
