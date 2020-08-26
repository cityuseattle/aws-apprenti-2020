var Stack = /** @class */ (function () {
    function Stack() {
        this.collection = [];
    }
    Stack.prototype.push = function (item) {
        this.collection.push(item);
    };
    Stack.prototype.pop = function () {
        if (this.collection.length !== 0)
            this.collection.pop();
        else
            throw new Error('Trying to pop without items in it.');
    };
    Stack.prototype.top = function () {
        if (this.collection.length !== 0)
            return this.collection[0];
        else
            return null;
    };
    return Stack;
}());
var queue = new Stack();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.top());
queue.pop();
console.log(queue.top());
queue.pop();
console.log(queue.top());
queue.pop();
