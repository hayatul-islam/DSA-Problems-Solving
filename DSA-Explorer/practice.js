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
  head = push(head, 6);
  head = push(head, 5);
  head = push(head, 4);
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

function getKthLastElement(head, k) {
  // head is the first Node in the list.
  // k is the 0-based index as counted from the end of the list.

  let arr = [];
  let current = head;

  while (current !== null) {
    arr.push(current);

    current = current.next;
  }

  let count = 0;
  let value;
  while (arr) {
    if (count === k) {
      const index = arr.length - 1 - count;
      value = arr[index];
      break;
    }
    count++;
  }

  return value;

  // return the list element corresponding to the index k
  // e.g.
  //   if k === 0 return the last element
  //   if k === 1 return the penultimate element
}

let list = buildOneTwoThree();

console.log(getKthLastElement(list, 0));
