var LinkedNode1 = /** @class */ (function () {
    function LinkedNode1(element) {
        this.element = element;
    }
    return LinkedNode1;
}());
var LinkedList1 = /** @class */ (function () {
    function LinkedList1() {
        this.length = 0;
    }
    LinkedList1.prototype.size = function () {
        return this.length;
    };
    LinkedList1.prototype.add = function (element) {
        var node = new LinkedNode1(element);
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        }
        else if (this.head === this.tail) {
            node.prev = this.head;
            this.head.next = this.tail = node;
        }
        else {
            node.prev = this.tail;
            this.tail = this.tail.next = node;
        }
        this.length++;
    };
    LinkedList1.prototype.remove = function () {
        if (this.tail) {
            if (this.tail.prev) {
                this.tail = this.tail.prev;
                this.tail.next = undefined;
            }
            else
                this.head = this.tail = undefined;
            this.length--;
        }
    };
    LinkedList1.prototype.printList = function () {
        var stringToPrint = '[ ';
        var currNode = this.head;
        while (currNode) {
            stringToPrint += currNode.element;
            if (currNode.next) {
                stringToPrint += ', ';
                currNode = currNode.next;
            }
            else
                break;
        }
        stringToPrint += ' ]';
        console.log(stringToPrint);
    };
    return LinkedList1;
}());
var list1 = new LinkedList1();
for (var i = 0; i < 10; i++)
    list1.add(i);
list1.printList();
for (var i = 0; i < 5; i++)
    list1.remove();
list1.printList();
