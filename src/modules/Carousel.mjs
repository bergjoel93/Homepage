/**
 * This module is responsible for running the card carousel for projects.
 */

export default class Carousel {
  constructor() {
    this.carousel = $(".carousel");
    this.currdeg = 0;
    this.num = 1;
    this.totalItems = 8;

    $(".next").on("click", { d: "n" }, this.rotate.bind(this));
    $(".prev").on("click", { d: "p" }, this.rotate.bind(this));
  }

  rotate(e) {
    if (e.data.d === "n") {
      this.currdeg -= 45;
      this.fadeOutText(this.num);
      this.num = this.num === this.totalItems ? 1 : this.num + 1;
      this.fadeInText(this.num);
    } else if (e.data.d === "p") {
      this.currdeg += 45;
      this.fadeOutText(this.num);
      this.num = this.num === 1 ? this.totalItems : this.num - 1;
      this.fadeInText(this.num);
    }

    this.carousel.css({
      "-webkit-transform": `rotateY(${this.currdeg}deg)`,
      "-moz-transform": `rotateY(${this.currdeg}deg)`,
      "-o-transform": `rotateY(${this.currdeg}deg)`,
      transform: `rotateY(${this.currdeg}deg)`,
    });
  }

  fadeOutText(num) {
    $(`.text${num}`).fadeOut();
  }

  fadeInText(num) {
    $(`.text${num}`).fadeIn();
  }
}
