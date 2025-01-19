// Stack in Array
class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(12);
stack.push(13);
stack.push(15);
stack.push(17);
stack.pop();

// console.log(stack.isEmpty());
// console.log(stack.size());
// console.log(stack.peek());
// console.log(stack);

// Stack in Object
class AnotherStack {
  constructor() {
    this.database = {};
    this.count = 0;
  }

  push(item) {
    this.count++;
    this.database[this.count] = item;
  }

  pop() {
    const deleteItem = this.database[this.count];
    delete this.database[this.count];
    this.count--;

    return deleteItem;
  }

  peek() {
    return this.database[this.count];
  }
}

const s = new AnotherStack();

s.push(2);
s.push(4);

console.log(s.peek());
console.log(s.pop());
console.log(s);
