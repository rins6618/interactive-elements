import './styles/carousel.css';

class ImageCarousel {
  /** @type {Element} */
  #rootElement;

  /** @type {Element} */
  #contentElement;

  /** @type {Number} */
  #activeIdx;

  #OFFSET_SIZE;

  /** @type {Element[]} */
  #imageList;

  /** * @param {Element} rootElement */
  constructor(rootElement) {
    this.#rootElement = rootElement;
    this.#contentElement = this.#rootElement.querySelector('.content');
    this.#activeIdx = 0;
    this.#OFFSET_SIZE = parseInt(window.getComputedStyle(this.#rootElement).getPropertyValue('--img-width'), 10);

    this.#contentElement.style.right = (`${this.#activeIdx * this.#OFFSET_SIZE}ch`);

    this.#imageList = [...this.#contentElement.children];
  }

  moveSteps(steps = 1) {
    console.log(`${this.#activeIdx * this.#OFFSET_SIZE}ch`);
    this.#activeIdx += steps;
    this.#activeIdx %= this.#imageList.length;
    this.#contentElement.style.right = (`${this.#activeIdx * this.#OFFSET_SIZE}ch`);
    console.log(`${this.#activeIdx * this.#OFFSET_SIZE}ch`);
  }
}

export default ImageCarousel;
