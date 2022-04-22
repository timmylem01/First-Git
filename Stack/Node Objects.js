class Stack {
    currentNode;
    counter;
    constructor(inputArray) {
        this.counter = inputArray.length;
        if(!arguments.length) {
            this.arrayStack = [];
        }
        else if(arguments.length > 1) {
            this.arrayStack = [];
            console.log('Warning: Empty list created. Too many arguments.')
        }
        else {
            this.arrayStack = inputArray;
        }
    }
    print() {
        for(let i = this.arrayStack.length - 1; i >= 0; i--) {
            console.log(this.arrayStack[i]);
        }
    }
    push(itemName) {
        this.arrayStack.push(itemName);
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