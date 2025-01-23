class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newValue = new Node(value);
    if (this.length === 0) {
      this.head = newValue;
      this.tail = newValue;
    } else {
      this.tail.next = newValue;
      this.tail = newValue;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (this.length === 1) {
      const remove = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;

      return remove;
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

    newLastNode.next = null;
    this.tail = newLastNode;
    this.length--;

    return lastNode;
  }

  shift() {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    this.head = currentNode.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
  }

  unshift(value) {
    let newNode = new Node(value);

    let currentNode = this.head;
    if (currentNode) {
      newNode.next = currentNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    list.length++;
  }
}

const list = new SinglyLinkedList();

list.push(5);
list.push(3);
// list.push(30);
list.unshift(59);
// list.pop();
// list.shift();

console.log(list);
