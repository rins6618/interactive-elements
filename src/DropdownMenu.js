class DropdownMenu {
  #dropdownElements;

  constructor(nodeList) {
    this.#dropdownElements = [...nodeList];
  }

  log() {
    this.#dropdownElements.forEach((elem) => console.log(elem));
  }
}

export default DropdownMenu;
