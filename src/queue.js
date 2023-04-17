const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    return this.firstElement;
  }

  enqueue(value) {
    let item = new ListNode(value);
    if(this.firstElement === undefined){
      this.firstElement = item;
      this.lastElement = item;
    } else {
      this.lastElement.next = item;
      this.lastElement = item;
    }
  }

  dequeue() {
    let removedElement = this.firstElement;
    this.firstElement = this.firstElement.next;
    return removedElement.value;
  }
}

module.exports = {
  Queue
};
