class Stack {
    firstNode;
    counter;
    constructor() {
        this.counter = 0;
        this.firstNode = null;
    }
    print() {
        let headNode = this.firstNode; 
        while (headNode != null) {
            console.log(headNode.value);
            headNode = headNode.nextNode;
        }
    }
    push(itemName) {
        if (this.firstNode == null) {
            let newNode = new Node(itemName);
            this.firstNode = newNode;
        }
        else {
            let newNode = new Node(itemName);
            newNode.nextNode = this.firstNode;
            this.firstNode = newNode;
        }
        this.counter++;
    }
    pop() {
        let tempVal = this.firstNode.value;
        this.firstNode = this.firstNode.nextNode;
        this.counter--;
        return tempVal;
    }
    top() {
        return this.firstNode.value;
    }
    isEmpty() {
        if (this.firstNode == null) {
            return true;
        }
        else {
            return false;
        }
    }
    size() {
        return this.counter;
    }
}

class Node {
    nextNode;
    value;
    constructor(inputValue) {
        this.nextNode = null;
        this.value = inputValue
    }
}

const stack1 = new Stack();

stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.pop();
stack1.print();
// console.log(stack1.top());
console.log(stack1.size());
console.log(stack1.isEmpty());