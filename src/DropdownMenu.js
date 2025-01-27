import './styles/dropdown.css';
import DropdownItem from './DropdownItem';

/** @template {T} [T=String]
 *  @typedef {new (arg: Node) => T} Constructor
 * */

/** * @template {T} [T=String] */
class DropdownMenu {
  /** * @type {Element} */
  #textboxElement;

  #dropdownElements;

  /** * @type {DropdownItem<T> | null} */
  #activeElement = null;

  /** *
   * @param {Element} rootElement
   * @param {Element[]} elements
   * @param {Constructor<T>} ValueClass
   */
  constructor(rootElement, elements, ValueClass = String) {
    this.#dropdownElements = [...elements]
      .map((element) => (new DropdownItem(element, new ValueClass(element))));

    this.#dropdownElements.forEach((item) => {
      const itemNode = item.getNode();
      itemNode.addEventListener('click', () => {
        this.setActiveElement(itemNode);
      });
    });

    this.#textboxElement = rootElement.querySelector('.textbox');

    this.#textboxElement.addEventListener('click', (e) => {
      if (e.target !== e.currentTarget) return;
      rootElement.querySelector('.content').classList.toggle('active');
    });

    this.#activeElement = this.#dropdownElements.at(0) || null;
    this.#updateText();
  }

  #log() {
    this.#dropdownElements.forEach((elem) => console.log(elem.getValue().toString()));
  }

  #updateText() {
    const hasActive = this.#activeElement !== null;
    const strValue = hasActive ? this.#activeElement.getNode().textContent : '';
    this.#textboxElement.textContent = strValue;
    // console.log(
    // 'Active element of', this.#rootElement, `switched to ${this.#activeElement.getValue()}`
    // );
  }

  /** @param {Element} entry */
  setActiveElement(entry) {
    const idx = this.#dropdownElements.findIndex((val) => entry.isSameNode(val.getNode()));
    this.#activeElement = idx === -1 ? this.#activeElement : this.#dropdownElements.at(idx);
    this.#updateText();
  }

  /** * @returns {DropdownItem<T> | null} */
  getActiveElement() {
    return this.#activeElement ? this.#activeElement : null;
  }
}

export default DropdownMenu;
