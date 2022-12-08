/* Make a singlyLinked List and print 10 numbers in reverse order from 20. 
*/

// Make Node 
class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}

// Make SinglyLinked List class with push print and reverse methods.
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // push method
    push(val){
        const node = new Node(val)     // assign node object to a variable
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    //print method
    print(){
        let curr = this.head
        let count = 0
        let res = ""
        while(curr){
           res = res+" "+curr.val
           count++
            curr = curr.next
            if(count==10) break
        }
        console.log(res)
    }

    //reverse method
    reverse(){
        let curr = this.head
        let prev = null
        let next;
        while(curr){
            next=curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
        return this.head
    }


}


let k  = new SinglyLinkedList()
for(let i=1;i<=20;i++){
    k.push(i) 
}
k.reverse()

k.print()




