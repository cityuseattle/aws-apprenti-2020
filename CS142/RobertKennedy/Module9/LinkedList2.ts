class LinkedList<T>
{
    private head: undefined | LinkedNode<T>;
    private tail: Undefined | LinkedNode<T>;
    private length: number = 0;

    size()
    {
        return this.length;
    }

    add(element: T)
    {
        let node = new LinkedNode(element);
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