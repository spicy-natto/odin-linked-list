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

  at(index) {
    if (index >= this.size || index < 0) {
      return null;
    }

    let currNode = this.head;
    // don't loop if index is zero, since currNode is already the head
    for (let i = 1; i <= index; i++) {
      currNode = currNode.nextNode;
    }

    return currNode;
  }

  pop() {
    const popNode = this.#tail;

    // new tail will be second-to-last node
    let newTail = this.at(this.size - 2);
    this.#tail = newTail;
    newTail.nextNode = null;

    return popNode;
  }

  contains(value) {
    let currNode = this.#head;
    while (currNode) {
      if (currNode.value === value) {
        return true;
      } else {
        currNode = currNode.nextNode;
      }
    }
    return false;
  }

  find(value) {
    let currNode = this.#head;
    let i = 0;
    while (currNode) {
      if (currNode.value === value) {
        return i;
      } else {
        currNode = currNode.nextNode;
        i++;
      }
    }
    return null;
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    if (index === 0) {
      newNode.nextNode = this.#head;
      this.#head = newNode;
      this.#size++;
      return;
    }
    const nodeBeforeInsert = this.at(index - 1);
    if (nodeBeforeInsert) {
      newNode.nextNode = nodeBeforeInsert.nextNode;
      nodeBeforeInsert.nextNode = newNode;
      this.#size++;
    }
  }

  removeAt(index) {
    if (index >= this.size || index < 0) {
      return;
    }

    if (index === 0) {
      this.#head = this.#head.nextNode;
      this.#size--;
      return;
    }

    const nodeBeforeRemove = this.at(index - 1);
    nodeBeforeRemove.nextNode = nodeBeforeRemove.nextNode.nextNode;
    this.#size--;
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
