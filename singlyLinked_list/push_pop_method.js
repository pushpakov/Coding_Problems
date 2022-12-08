class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){

        if(this.head == null) return ("No available node to delete")
        if(this.head.next==null){
            this.head = null;
        }
        let curr = this.head
        let prev = null
        while(curr){
            if(curr.next.next == null){
                curr.next = null
                prev = curr
            }
            curr = curr.next
        }
        this.tail = prev
        this.length--
    }

    print(){

    }
}

var list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(12)
list.push(21)
list.pop()
console.log(list)




