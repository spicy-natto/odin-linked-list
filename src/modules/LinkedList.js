import Node from "./Node.js";

class LinkedList {
  #head = null;
  #tail = null;
  #size = 0;

  append(value) {
    const newNode = new Node(value);
    if (this.#size === 0) {
      this.#head = newNode;
    } else {
      this.#tail.nextNode = newNode;
    }
    this.#tail = newNode;
    this.#size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.#size === 0) {
      this.#tail = newNode;
    } else {
      newNode.nextNode = this.#head;
    }
    this.#head = newNode;
    this.#size++;
  }

  toString() {
    let string = "";
    let currNode = this.#head;
    while (currNode) {
      string += `( ${currNode.value} )`;
      if (currNode.nextNode) {
        string += " -> ";
      }
      currNode = currNode.nextNode;
    }
    return string;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  get size() {
    return this.#size;
  }
}

export default LinkedList;
