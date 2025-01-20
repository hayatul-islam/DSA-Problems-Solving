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
}

const list = new SinglyLinkedList();

console.log(list.isEmpty());
list.push(4);
list.push(6);
list.push(10);

console.log(list);
