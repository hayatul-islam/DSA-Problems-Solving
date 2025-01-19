class Queue {
  constructor() {
    this.queue = [];
  }

  push(item) {
    this.queue.unshift(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.stack.queue - 1];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}

const queue = new Queue();
queue.push(10);
queue.push(12);
queue.push(13);
queue.push(15);
queue.push(17);
queue.pop();

console.log(queue);
