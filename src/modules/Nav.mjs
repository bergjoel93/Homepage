/**
 * This module is responsible for handling the navigation buttons so that when the user clicks on them, they will automatically scroll down to the relavent parts of the page.
 */

function handleNav() {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const mobileNavButtonsContainer = document.getElementById(
    "mobile-nav-buttons-container"
  );
  const closeButton = document.getElementById("close-button");
  const navLinks = document.querySelectorAll(".nav-button");
  const navBarHeight = document.querySelector("nav").offsetHeight;
  // Handle mobile hamburger nav menu
  document.addEventListener("DOMContentLoaded", () => {
    hamburgerMenu.addEventListener("click", () => {
      if (mobileNavButtonsContainer.style.display == "flex") {
        mobileNavButtonsContainer.style.display = "none";
      } else {
        mobileNavButtonsContainer.style.display = "flex";
      }
    });

    window.addEventListener("click", (event) => {
      if (
        event.target !== mobileNavButtonsContainer &&
        event.target !== hamburgerMenu &&
        !mobileNavButtonsContainer.contains(event.target)
      ) {
        mobileNavButtonsContainer.style.display = "none";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
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

        if (mobileNavButtonsContainer.style.display == "flex") {
          mobileNavButtonsContainer.style.display = "none";
        } else {
          mobileNavButtonsContainer.style.display = "flex";
        }
      });
    });
  });

  // Sticky Nav BAr
  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    const homeSection = document.querySelector("#section-home");
    const homeSectionHeight = homeSection.offsetHeight;

    if (window.scrollY > homeSectionHeight - 100) {
      // Adjust the -50 value to trigger earlier
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
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
}

export { handleNav };
