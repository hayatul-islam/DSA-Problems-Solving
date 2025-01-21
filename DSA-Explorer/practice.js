class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    const newNode = {
      value,
      next: null,
    };

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this.head;
    }

    let currentNode = this.head;
    let lastNode = this.tail;
    let newLastNode;

    while (currentNode) {
      if (currentNode.next === lastNode) {
        lastNode = currentNode;
        break;
      }

      currentNode = currentNode.next;
    }
    newLastNode.next = null;
    this.tail = newLastNode;
    this.length--;

    return lastNode;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return this.head;
    }

    let currentNode = this.head;
    let lastNode = this.tail;
    let newLastNode;

    while (currentNode) {
      if (currentNode.next === lastNode) {
        newLastNode = currentNode;
        break;
      }

      currentNode = currentNode.next;
    }

    newLastNode = null;
    this.tail = newLastNode;
    this.length--;

    return lastNode;
  }
}

const list = new SinglyLinkedList();

list.push(3);
list.push(39);
// console.log(list.isEmpty());
console.log(list);
