import "./styles/style.css";
import HandleAboutMe from "./modules/HandleAboutMe.mjs";
import RenderProjects from "./modules/RenderProjects.mjs";

// work on about section.
// When I click skills, the .about-me-container will clear and then the skills table will be inserted.
const handleAboutMe = new HandleAboutMe();
const renderProjects = new RenderProjects();

var carousel = $(".carousel"),
  currdeg = 0,
  num = 1;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e) {
  if (e.data.d == "n") {
    currdeg = currdeg - 45;
    $(".text" + num).fadeOut();
    if (num == 8) {
      num = 1;
    } else {
      num = num + 1;
    }
    $(".text" + num).fadeIn();
  }
  if (e.data.d == "p") {
    currdeg = currdeg + 45;
    $(".text" + num).fadeOut();
    if (num == 1) {
      num = 8;
    } else {
      num = num - 1;
    }
    $(".text" + num).fadeIn();
  }
  carousel.css({
    "-webkit-transform": "rotateY(" + currdeg + "deg)",
    "-moz-transform": "rotateY(" + currdeg + "deg)",
    "-o-transform": "rotateY(" + currdeg + "deg)",
    transform: "rotateY(" + currdeg + "deg)",
  });
}
