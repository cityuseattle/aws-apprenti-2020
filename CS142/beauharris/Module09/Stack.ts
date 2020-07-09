class Stack<T>{
    private collection: T[];
    constructor() {
        this.collection = [];
    }
    push(item: T){
        this.collection.push(item);
    }
    pop() {
        if(this.collection.length !== 0)
            this.collection.pop();
        else
            throw new Error('Trying to pop without items in it.');
    }
    top() {
        if(this.collection.length !== 0)
            return this.collection[0];
        else
            return null;
    }
}

let queue = new Stack();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.top());
queue.pop();
console.log(queue.top());
queue.pop();
console.log(queue.top());
queue.pop();