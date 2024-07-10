import "./styles/style.css";
import HandleAboutMe from "./modules/HandleAboutMe.mjs";

// work on about section.
// When I click skills, the .about-me-container will clear and then the skills table will be inserted.
const handleAboutMe = new HandleAboutMe();

const projects = {
  Battleship: {
    name: "Battleship",
    img: "./assets/screenshots/Battleship.png",
    description:
      "The Battleship project from The Odin Project focuses on implementing the classic game Battleship using Test Driven Development (TDD). The purpose of the project is to practice TDD by writing tests for each feature before implementing it, thus ensuring that the code is robust and reliable. By completing this project, I gained a deeper understanding of TDD principles and improved my ability to isolate application functionality from DOM manipulation. The project involves creating classes or factories for Ships, Gameboards, and Players, each with specific methods to handle game logic such as placing ships, recording hits, and determining game outcomes. Players interact with the game through a user interface that allows them to take turns attacking each other's gameboards until one player's ships are all sunk. This project enhanced my skills in object-oriented programming, event handling, and creating interactive web applications.",
    repo: "https://github.com/bergjoel93/Battleship",
    live: "https://bergjoel93.github.io/Battleship/",
    for: "The Odin Project",
    learned: "Test-Driven-Development",
  },
  WeatherApp: {
    name: "Weather App",
    img: "./assets/screenshots/WeatherApp.png",
    description:
      "The Weather App project from The Odin Project involves creating a web application that displays weather information for a specified location using data fetched from a weather API. The purpose of this project is to practice integrating external APIs into a web application and to handle asynchronous operations using promises or async/await. By completing this project, I gained experience in working with APIs, processing JSON data, and dynamically updating the DOM based on user input and API responses. The application allows users to input a location, fetches the relevant weather data, and displays it on the webpage. Additionally, the app features dynamic styling based on the weather conditions, enhancing the user experience. This project improved my skills in API handling, asynchronous JavaScript, and responsive web design.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/Weather-App/",
    for: "The Odin Project",
    learned: "Retrieveing Data From API, Async Functions ",
  },
  FormValidationPractice: {
    name: "",
    img: "./assets/screenshots/",
    description: "",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: "",
  },
  Carousel: {
    name: "",
    img: "./assets/screenshots/",
    description: "",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: "",
  },
  DatePractice: {
    name: "",
    img: "./assets/screenshots/",
    description: "",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: "",
  },
  Taskr: {
    name: "To-Do List",
    img: "./assets/screenshots/",
    description:
      "The Todo List project from The Odin Project is designed to consolidate and demonstrate the various web development techniques learned so far. The purpose of the project is to create a functional and user-friendly todo list application that allows users to organize tasks into projects, set priorities, and manage deadlines. By completing this project, I gained practical experience in using JavaScript to create dynamic objects, manage application logic separately from the DOM, and implement data persistence using the Web Storage API. The application features the ability to create, edit, and delete todos, organize them into projects, and store data locally to retain user input across sessions. This project helped enhance my skills in object-oriented programming, modular code structure, and utilizing external libraries for date manipulation.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: "",
  },
  RestaurantPage: {
    name: "",
    img: "./assets/screenshots/",
    description:
      "The Restaurant Page project from The Odin Project focuses on practicing DOM manipulation by dynamically generating a restaurant homepage using JavaScript. The purpose of this project is to enhance proficiency in using JavaScript to create and manipulate HTML elements, as well as to integrate Webpack for efficient module bundling. By completing this project, I gained valuable experience in setting up and configuring Webpack, creating modular JavaScript code, and managing the dynamic content of a web page through event listeners. The application features a header with navigation buttons that allow users to switch between different tabs, such as Home, Menu, and Contact, each with its own content module. The project emphasizes the separation of concerns by keeping the application logic and DOM manipulation in separate modules, improving code organization and maintainability. This project significantly improved my skills in modern JavaScript development, module bundling, and dynamic webpage creation.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: "",
  },
  TicTacToe: {
    name: "",
    img: "./assets/screenshots/",
    description:
      "The Tic Tac Toe project from The Odin Project entails creating a browser-based version of the classic game, focusing on object-oriented programming and DOM manipulation. The purpose of this project is to practice organizing code using objects and factories, ensuring minimal global variables and a clean module pattern. By completing this project, I gained experience in structuring JavaScript code to manage game state, player interactions, and game flow control efficiently. The application includes a Gameboard object to store the game state, Player objects to manage player data, and a controller object to handle the game logic and DOM interactions. Features include player name input, gameboard rendering, player move validation, and game end conditions such as win or tie detection. This project enhanced my understanding of modular code design, event handling, and dynamic UI updates.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: "",
  },

  Library: {
    name: "",
    img: "./assets/screenshots/",
    description:
      "The Library project from The Odin Project involves creating a small web application to manage a collection of books, extending the 'Book' example from a previous lesson. The purpose of this project is to practice object-oriented programming and DOM manipulation by allowing users to add, display, and manage books in a library. By completing this project, I gained experience in creating and manipulating arrays to store book objects, dynamically generating HTML elements to display book information, and handling user input through forms. The application includes features such as adding new books via a form, displaying books in a table or card format, and providing buttons to remove books or toggle their read status. This project improved my skills in working with constructors, prototypes, event handling, and associating DOM elements with data attributes for efficient data management and user interaction.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: "",
  },

  AdminDashboard: {
    name: "",
    img: "./assets/screenshots/",
    description:
      "The Admin Dashboard project from The Odin Project focuses on building a full dashboard layout using CSS Grid for the majority of the layout work. The purpose of this project is to apply and solidify knowledge of CSS Grid in a real-world scenario. By completing this project, I gained practical experience in structuring complex layouts, utilizing grid nesting for different sections, and integrating assets such as icons and fonts. The project involves setting up a sidebar, header, and main content area, each containing nested grid layouts for elements like navigation, search bars, user information, and various dashboard widgets. This project also offered an opportunity to enhance design skills by experimenting with color palettes, fonts, and overall aesthetics. The final result is a functional and visually appealing admin dashboard that demonstrates proficiency in modern CSS techniques.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: "",
  },
  SignUpForm: {
    name: "",
    img: "./assets/screenshots/",
    description:
      "The Sign-up Form project from The Odin Project is designed to apply and consolidate the HTML and CSS concepts learned in previous lessons by creating a sign-up form for an imaginary service. The purpose of this project is to practice structuring a form, applying external assets, and using advanced CSS techniques for styling. By completing this project, I gained experience in setting up a project repository, organizing HTML and CSS files, and managing design assets such as background images and custom fonts. The form includes various input fields with specific styling for states like invalid and focused inputs, achieved using pseudo-classes. This project also involves adding a semi-transparent background for better text readability and ensuring the form's responsiveness across different desktop resolutions. Overall, this project enhanced my skills in creating aesthetically pleasing and functional web forms.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: "",
  },
  Calculator: {
    name: "",
    img: "./assets/screenshots/",
    description:
      "The Calculator project from The Odin Project is a comprehensive exercise designed to consolidate the JavaScript, HTML, and CSS skills learned throughout the course. The purpose of this project is to create a functional on-screen calculator that performs basic arithmetic operations. By completing this project, I gained experience in creating and testing mathematical functions, managing state within the application, and dynamically updating the user interface based on user interactions. The calculator features functions for addition, subtraction, multiplication, and division, as well as a display area and buttons for digits and operations. The project emphasizes avoiding the use of the dangerous `eval()` function by building custom functions to evaluate expressions. Additionally, it includes handling edge cases such as rounding long decimals, preventing multiple decimal points, and providing error messages for invalid operations like division by zero. This project enhanced my ability to structure complex JavaScript logic, create interactive web applications, and refine the user interface for a better user experience.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: "",
  },
  EtchASketch: {
    name: "",
    img: "./assets/screenshots/",
    description:
      "The Etch-a-Sketch project from The Odin Project is a creative exercise designed to strengthen DOM manipulation skills using JavaScript and Flexbox for layout. The purpose of this project is to build a browser-based sketchpad that allows users to draw by hovering over a grid of squares. By completing this project, I gained experience in dynamically creating and styling elements, setting up event listeners for user interactions, and using Flexbox to create a grid layout. The application features a grid of div elements that change color when hovered over, simulating the effect of drawing. Additionally, a button allows users to customize the grid size, prompting for a new number of squares per side and regenerating the grid accordingly. Extra credit challenges include randomizing square colors and implementing a progressive darkening effect. This project enhanced my proficiency in JavaScript event handling, dynamic content generation, and CSS layout techniques.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: "",
  },
  LandingPage: {
    name: "",
    img: "./assets/screenshots/",
    description:
      "The Landing Page project from The Odin Project involves creating a complete web page based on provided design images, focusing on HTML and CSS skills. The purpose of this project is to practice translating a visual design into a functional web page, honing layout and styling skills. By completing this project, I gained experience in setting up a project repository, structuring HTML content, and applying CSS to match the design specifications. The project is divided into manageable sections, such as the header, main content, and footer, which are styled individually to achieve the desired layout. Key tasks include using Flexbox for layout, selecting appropriate fonts, and integrating images. This project also emphasizes the importance of committing changes frequently and using external resources to solve challenges. The end result is a polished, visually appealing landing page that demonstrates proficiency in web design and development fundamentals.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: "",
  },
};
