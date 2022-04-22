class List {
    firstNode;
    counter;
    constructor() {
        this.counter = 0;
        this.firstNode = null;
    }
    printList() {
        let headNode = this.firstNode; 
        while (headNode != null) {
            console.log(headNode.value);
            headNode = headNode.nextNode;
        }
    }
    addItem(itemName) {
        if (this.firstNode == null) {
            let newNode = new Node(itemName);
            this.firstNode = newNode;
        }
        else {
            let newNode = new Node(itemName);
            newNode.nextNode = this.firstNode;
            this.firstNode = newNode;
        }
    }
    removeItem(itemNumber) {
        let itemNum = itemNumber - 1;
        for(let i = 0; i < this.arrayList.length; i++) {
            if (i === itemNum) {
                let spliced = this.arrayList.splice(i, 1); 
            }
        }
        this.counter--;
    }
    removeSpecificItem(itemName) {
        for(let i = 0; i < this.arrayList.length; i++) {
            if (this.arrayList[i] === itemName) {
                let spliced = this.arrayList.splice(i, 1);
            }
        }
        this.counter--;
    }
    getLength() {
        return this.counter;
    }
    combineLists(list2) {
        // get array from list 2
        let newArr = list2.arrayList
        // newArr = merge this.array with list 2 array
        newArr = [].concat(this.arrayList, list2.arrayList) 
        // set this.array to newArr
        this.arrayList = newArr;
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

const list1 = new List();

list1.addItem(1);
list1.addItem(2);
list1.addItem(3);
list1.printList();
