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

    let timer = setInterval(() => {
      console.log('timeout!');
      this.moveSteps();
    }, 5000);

    this.#rootElement.querySelector('.back').addEventListener('click', (e) => {
      this.moveSteps(-1);
      clearInterval(timer);
      e.preventDefault();
      timer = setInterval(() => {
        console.log('timeout!');
        this.moveSteps();
      }, 5000);
    });

    this.#rootElement.querySelector('.forth').addEventListener('click', (e) => {
      this.moveSteps();
      clearInterval(timer);
      e.preventDefault();
      timer = setInterval(() => {
        console.log('timeout!');
        this.moveSteps();
      }, 5000);
    });
  }

  // eslint-disable-next-line no-void
  static #reflux() { void document.documentElement.offsetHeight; }

  moveSteps(steps = 1) {
    this.#rootElement.querySelector('.prog-bar').classList.remove('switch-anim');
    ImageCarousel.#reflux();
    console.log(`${this.#activeIdx * this.#OFFSET_SIZE}ch`);
    this.#activeIdx += steps;
    if (this.#activeIdx < 0) this.#activeIdx += this.#imageList.length;
    this.#activeIdx %= this.#imageList.length;
    this.#contentElement.style.right = (`${this.#activeIdx * this.#OFFSET_SIZE}ch`);
    this.#rootElement.querySelector('.prog-bar').classList.add('switch-anim');
    console.log(`${this.#activeIdx * this.#OFFSET_SIZE}ch`);
  }

  getRootElement() {
    return this.#rootElement;
  }
}

export default ImageCarousel;
