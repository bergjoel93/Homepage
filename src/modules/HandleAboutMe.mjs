/**
 * Responsible for handling the interactions between the user and the About Me section.
 */

export default class AboutMe {
  constructor() {
    this.aboutInfoContainer = document.querySelector(".about-info-container");
    this.aboutContainer = document.querySelector(".about-container");
    this.handleAboutMe();
  }

  handleAboutMe() {
    // Select the about me button
    const aboutMeBtn = document.querySelector(".about-about-me");
    aboutMeBtn.addEventListener("click", () => {
      this.aboutInfoContainer.innerHTML = "";
      this.aboutInfoContainer.appendChild(this.injectAboutMe());
      this.aboutContainer.style.backgroundColor = "var(--about-color-0)";
    });
    // select the skills button
    const skillsBtn = document.querySelector(".about-skills");
    skillsBtn.addEventListener("click", () => {
      this.aboutInfoContainer.innerHTML = "";
      this.aboutInfoContainer.appendChild(this.injectSkills());
      this.aboutContainer.style.backgroundColor = "var(--about-color-1)";
      this.labelWhenHover();
    });

    const certificatesBtn = document.querySelector(".about-certificates");
    certificatesBtn.addEventListener("click", () => {
      this.aboutInfoContainer.innerHTML = ``;
      // append the html to above.
      this.aboutContainer.style.backgroundColor = "var(--about-color-2)";
    });

    const otherBtn = document.querySelector(".about-other");
    otherBtn.addEventListener("click", () => {
      this.aboutInfoContainer.innerHTML = ``;
      // append stuff
      this.aboutContainer.style.backgroundColor = "var(--about-color-3)";
    });
  }
  injectAboutMe() {
    const aboutMeContainer = document.createElement("div");
    aboutMeContainer.className = "about-me-container";
    aboutMeContainer.innerHTML = `
          <h2>A little bit about me</h2>
          <p>
          My name is Joel, and I'm an educated/self-taught web developer
          with a passion for user-experience, design, and back-end coding. I
          am passionate about creating websites with crisp, clean designs
          that prioritize user-freindliness. A great website offers an
          intuitive and seamless experience, focusing on what the user needs
          to control and ensuring they can do so with minimal effort. I
          enjoy the challenge of solving problems to enhance the user
          interaction and satisfaction.
          </p>
    `;
    return aboutMeContainer;
  }
  injectSkills() {
    const skillsContainer = document.createElement("div");
    skillsContainer.className = "skills-container";
    skillsContainer.innerHTML = `
 
              <div class="skills-card">
                <div class="column-1">
                  <h3>Web Development:</h3>
                </div>
                <div class="column-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    alt="JavaScript logo"
                    data="JavaScript"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                    alt="CSS logo"
                    data="CSS"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
                    alt="HTML5 logo"
                    data="HTML5"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                    alt="PHP logo"
                    data="PHP"
                  />
                </div>
              </div>
  
              <div class="skills-card">
                <div class="column-1">
                  <h3>Programming Languages:</h3>
                </div>
                <div class="column-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                    alt="Java logo"
                    data="Java"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    alt="C++ logo"
                    data="C++"
                  />
                </div>
              </div>
  
              <div class="skills-card">
                <div class="column-1">
                  <h3>Database:</h3>
                </div>
                <div class="column-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                    alt="MySQL logo"
                    data="MySQL"
                  />
                </div>
              </div>
  
              <div class="skills-card">
                <div class="column-1">
                  <h3>Other:</h3>
                </div>
                <div class="column-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg"
                    alt="WebPack Logo"
                    data="WebPack"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg"
                    alt="esLint Logo"
                    data="esLint"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg"
                    alt="VSCode Logo"
                    data="VSCode"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
                    alt="Node Package Manager Logo"
                    data="Node Package Manager"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                    alt="GitHub Logo"
                    data="GitHub"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                    alt="Git Logo"
                    data="Git"
                  />
                </div>
              </div>
  
              <div class="skills-card">
                <div class="column-1">
                  <h3>Currently Learning:</h3>
                  <h4>As of July 10th 2024</h4>
                </div>
                <div class="column-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt="React Logo"
                    data="React"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                    alt="Node.js Logo"
                    data="Node.js"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
                    alt="MongoDB Logo"
                    data="MongoDB"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                    alt="Express Logo"
                    data="Express"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                    alt="Next.js Logo"
                    data="Next.Js"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                    alt="TypeScript Logo"
                    data="TypeScript"
                  />
                </div>
              </div>

    `;
    return skillsContainer;
  }

  labelWhenHover() {
    const icons = document.querySelectorAll(".column-2 img");

    icons.forEach((icon) => {
      icon.addEventListener("mouseover", (event) => {
        const messageBox = document.createElement("div");
        messageBox.classList.add("message-box");
        messageBox.textContent = icon.getAttribute("data");
        document.body.appendChild(messageBox);

        const updateMessageBoxPosition = (e) => {
          messageBox.style.left = `${e.pageX + 10}px`;
          messageBox.style.top = `${e.pageY + 10}px`;
        };

        updateMessageBoxPosition(event); // Initial position
        messageBox.style.opacity = 1;
        messageBox.style.transform = "translateY(0)";

        icon.addEventListener("mousemove", updateMessageBoxPosition);

        icon.addEventListener(
          "mouseout",
          () => {
            messageBox.style.opacity = 0;
            messageBox.style.transform = "translateY(-10px)";
            setTimeout(() => {
              document.body.removeChild(messageBox);
            }, 300); // Match the transition duration
          },
          { once: true }
        );
      });
    });
  }
}
