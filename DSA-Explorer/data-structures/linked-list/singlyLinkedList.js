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
    let newNode = {
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
      const removeNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removeNode;
    }

    let currentNode = this.head;
    let lastNode = this.tail;
    let newLastNode;

    while (currentNode) {
      if (currentNode.next === this.tail) {
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

    // if (this.length === 1) {
    //   this.head = null;
    //   this.tail = null;
    //   this.length = 0;
    // } else {
    //   this.head = this.head.next;
    //   this.length--;
    // }
  }

  unshift(value) {
    const newNode = {
      value,
      next: null,
    };

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }
}

const list = new SinglyLinkedList();

list.push(4);
list.push(6);
list.push(10);
list.push(14);
list.pop();

// console.log(list.isEmpty());
console.log(list);
