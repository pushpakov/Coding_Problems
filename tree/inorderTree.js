// Make an inorder tree using given array.


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
let res = []

function inOrder(root){
    if(root!==null){
        inOrder(root.left)
        res.push(root.val)
        inOrder(root.right)
    }
    return res
}
let root = constructTree(arr,0)
console.log(inOrder(root))


