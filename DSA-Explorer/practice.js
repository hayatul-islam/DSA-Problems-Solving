class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function push(head, data) {
  let newNode = new Node(data);
  newNode.next = head;

  return newNode;
}

function buildOneTwoThree() {
  let head = null;
  head = push(head, 3);
  head = push(head, 2);
  head = push(head, 1);

  return head;
}

function getNth(node, index) {
  if (!node) {
    throw new Error("List is empty.");
  }

  let current = node;
  let count = 0;

  while (current !== null) {
    if (index === count) {
      return current;
    }

    current = current.next;
    count++;
  }

  throw new Error("Index out of range.");
}

let list = buildOneTwoThree();

console.log(getNth(list, 1).data);
