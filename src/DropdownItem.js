/** * @template T */
class DropdownItem {
  /** * @type {Node} */
  #node;

  /** * @type {T} */
  #value;

  /**
   * @param {Node} node
   * @param {T} value
   */
  constructor(node, value) {
    this.#node = node;
    this.#value = value;
  }

  getNode() {
    return this.#node;
  }

  getValue() {
    return this.#value;
  }
}

export default DropdownItem;
