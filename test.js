class Queue {
  constructor() {
    this.q = [];
  }
  // constructor(queue){
  //     this.q=[...queue]
  // }
  enqueue(el) {
    this.q.push(el);
  }
  dequeue() {
    this.q.shift();
  }
  peek() {
    return this.q[0];
  }

  isEmpty() {
    return this.q.length === 0;
  }
  size() {
    return this.q.length;
  }
}

const newQ = new Queue();
newQ.enqueue(1);
newQ.enqueue(2);
newQ.enqueue(3);
console.log(newQ.peek());
console.log(newQ.isEmpty());
newQ.dequeue();
console.log(newQ);
newQ.dequeue();

newQ.dequeue();
console.log(newQ.isEmpty());

console.log(newQ);

// circular queue
class circularQueue {
  constructor(len) {
    this.q = new Array(len);
    this.size = len;
    this.f = -1;
    this.e = -1;
  }
  enqueue(el) {
    this.q.push(el);
    if (q.find(undefined) === 0) {
      this.f = q[0];
    } else if (q.find(undefined) === this.size - 1) {
      this.e = q[this.size - 1];
    }
  }
  dequeue() {
    this.q.shift();
  }
  peek() {
    return this.q[0];
  }

  isEmpty() {
    return this.q.length === 0;
  }
  size() {
    return this.q.length;
  }
}
