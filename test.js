// class Queue {
//   constructor() {
//     this.stackA = [];
//     this.stackB = [];
//   }

//   enqueue(value) {
//     while (this.stackB.length > 0) {
//       this.stackA.push(this.stackB.pop());
//     }
//     this.stackA.push(value);
//   }

//   // Removes and returns the front element of the queue
//   dequeue() {
//     while (this.stackA.length > 0) {
//       this.stackB.push(this.stackA.pop());
//     }
//     if (this.stackB.length > 0) return this.stackB.pop();
//     return null;
//   }

//   // Returns the front element without removing it
//   peek() {
//     while (this.stackA.length > 0) {
//       this.stackB.push(this.stackA.pop());
//     }
//     if (this.stackB.length > 0) return [...this.stackB].pop();
//     return null;
//   }
//   // Checks if the queue is empty
//   isEmpty() {
//     return this.stackA.length === 0 && this.stackB.length === 0;
//   }
// }

// let q = new Queue();
// q.enqueue(1);
// q.enqueue(3);
// q.enqueue(14);
// console.log(q);
// console.log(q.peek());
// console.log(q.isEmpty());
// q.dequeue();
// console.log(q);
// q.enqueue(12);
// q.dequeue();
// q.dequeue();
// q.dequeue();
// q.dequeue();
// console.log(q.isEmpty());
// console.log(q);

class QueueUsingStacks {
  constructor() {
    this.stack1 = []; // Stack 1 for enqueue operations
    this.stack2 = []; // Stack 2 for dequeue operations
  }

  // Enqueue operation: Push element onto stack1
  enqueue(element) {
    this.stack1.push(element);
  }

  // Dequeue operation: Remove and return the front element
  dequeue() {
    // If stack2 is empty, move elements from stack1 to stack2
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    // If stack2 is still empty, return "Queue is empty"
    if (this.stack2.length === 0) {
      return "Queue is empty";
    }

    return this.stack2.pop(); // Pop and return the front element of the queue
  }

  // Peek operation: Return the front element without removing it
  peek() {
    // If stack2 is empty, move elements from stack1 to stack2
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    // If stack2 is still empty, return "Queue is empty"
    if (this.stack2.length === 0) {
      return "Queue is empty";
    }

    return this.stack2[this.stack2.length - 1]; // Return the front element
  }

  // Check if the queue is empty
  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

// Example usage:
const queue = new QueueUsingStacks();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // Output: 10 (First element is removed)
console.log(queue.peek()); // Output: 20 (Front element is 20)
queue.enqueue(40);
console.log(queue.dequeue()); // Output: 20
console.log(queue.peek()); // Output: 30
console.log(queue.isEmpty()); // Output: false
