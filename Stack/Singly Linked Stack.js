class Stack {
    firstNode;
    currentNode;
    counter;
    constructor() {
        this.counter = 0;
        this.currentNode = null;
    }
    print() {
        
        }
    }
    push(itemName) {
        if (this.currentNode == null) {
            const newNode = new Node(itemName);
            this.firstNode = newNode;
            this.currentNode = newNode;
        }
        else {
            const newNode = new Node(itemName);
            this.currentNode.nextNode = newNode;
            this.currentNode = newNode;
        }
    }
    pop() {
       return this.arrayStack.pop();
       // what would happen if stack was empty?
    }
    top() {
        return this.arrayStack[this.arrayStack.length - 1];
        // what would happen if stack was empty?
    }
    empty() {
        if (this.arrayStack.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    size() {
        return this.arrayStack.length;
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

