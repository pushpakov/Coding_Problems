// print level order traversal

class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

let arr = [ 1, 2, 3, 4, 5, 6, 6, 6, 6 ];

function constructTree(arr,i){
    let root = null;
        if (i < arr.length) {
            root = new Node(arr[i]);
            root.left = constructTree(arr, 2 * i + 1);
            root.right = constructTree(arr, 2 * i + 2);
        }
        return root;
}
let root = (constructTree(arr,0))

let array = []
function levelOrder(root){
    let queue = []
    queue.push(root)
    while(queue.length !==0){
        let m = queue.shift()
        array.push(m.val)
        if(m.left !== null){
            queue.push(m.left)
        }
        if(m.right !== null){
            queue.push(m.right)
        }
    }
    return array
}

console.log(levelOrder(root))

