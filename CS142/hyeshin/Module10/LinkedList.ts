class LinkedNode1<T>
{
    element: T;
    next: undefined | LinkedNode1<T>;
    prev: undefined | LinkedNode1<T>;
    constructor(element: T)
    {
        this.element = element;
    }
}

class LinkedList1<T>
{
    private head: undefined | LinkedNode1<T>;
    private tail: undefined | LinkedNode1<T>;
    private length: number = 0;

    size()
    {
        return this.length;
    }

    add(element: T)
    {
        let node = new LinkedNode1(element);
        if(!this.tail)
        {
            this.head = node;
            this.tail = node;
        }
        else if(this.head === this.tail)
        {
            node.prev = this.head;
            this.head.next = this.tail = node;
        }
        else
        {
            node.prev = this.tail;
            this.tail = this.tail.next = node;
        }
        this.length++;
    }

    remove()
    {
        if(this.tail)
        {
            if(this.tail.prev)
            {
                this.tail = this.tail.prev;
                this.tail.next = undefined;
            }
            else
                this.head = this.tail = undefined;
            this.length--;
        }
    }

    printList()
    {
        let stringToPrint = '[ ';
        let currNode = this.head;
        while(currNode)
        {
            stringToPrint += currNode.element;
            if(currNode.next)
            {
                stringToPrint += ', ';
                currNode = currNode.next;
            }
            else
                break;
        }
        stringToPrint += ' ]';
        console.log(stringToPrint);
    }
}

let list1 = new LinkedList1();
for(let i = 0; i < 10; i++) list1.add(i);
list1.printList();
for(let i = 0; i < 5; i++) list1.remove();
list1.printList();