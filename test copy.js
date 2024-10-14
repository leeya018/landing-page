class CircularQueue {
  constructor(size) {
    this.queue = new Array(size); // Fixed-size array
    this.size = size; // Capacity of the queue
    this.front = -1; // Pointer to the front element
    this.rear = -1; // Pointer to the rear element
  }

  // Adds an element to the queue
  enqueue(value) {
    // Check if the queue is full
    if ((this.rear + 1) % this.size === this.front) {
      console.log("Queue is full");
      return false;
    }

    // If the queue is initially empty, set front to 0
    if (this.front === -1) {
      this.front = 0;
    }

    // Move rear to the next position and insert the new element
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
    return true;
  }

  // Removes and returns the front element of the queue
  dequeue() {
    // Check if the queue is empty
    if (this.front === -1) {
      console.log("Queue is empty");
      return null;
    }

    const dequeuedValue = this.queue[this.front];
    // If the queue becomes empty after dequeuing, reset pointers
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      // Move front to the next position
      this.front = (this.front + 1) % this.size;
    }

    return dequeuedValue;
  }

  // Returns the front element without removing it
  peek() {
    if (this.front === -1) {
      console.log("Queue is empty");
      return null;
    }
    return this.queue[this.front];
  }

  // Checks if the queue is empty
  isEmpty() {
    return this.front === -1;
  }

  // Checks if the queue is full
  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }

  // Returns the current size of the queue
  currentSize() {
    if (this.front === -1) return 0;
    return (this.size + this.rear - this.front + 1) % this.size;
  }
}

// Example usage:
const circularQueue = new CircularQueue(5);
circularQueue.enqueue(10); // Adds 10
circularQueue.enqueue(20); // Adds 20
circularQueue.enqueue(30); // Adds 30
circularQueue.enqueue(40); // Adds 40
circularQueue.enqueue(50); // Adds 50
console.log(circularQueue.enqueue(60)); // Queue is full, Output: false

console.log(circularQueue.dequeue()); // Removes 10, Output: 10
console.log(circularQueue.dequeue()); // Removes 20, Output: 20

circularQueue.enqueue(60); // Adds 60 to the queue
console.log(circularQueue.peek()); // Output: 30 (front element)
console.log(circularQueue.isFull()); // Output: true
console.log(circularQueue.isEmpty()); // Output: false
