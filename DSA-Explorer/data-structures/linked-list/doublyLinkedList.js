class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let lastNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = lastNode.prev;
      this.tail.next = null;
      lastNode.prev = null;
    }
    this.length--;

    return lastNode;
  }

  shift() {
    if (!this.head) {
      return null;
    }

    let firstNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = firstNode.next;
      firstNode.next = null;
      this.head.prev = null;
    }
    this.length--;

    return firstNode;
  }
}

const list = new DoublyLinkedList();

list.push(43);
list.push(4);
list.push(40);
list.shift();
// list.shift();

console.log(list);
