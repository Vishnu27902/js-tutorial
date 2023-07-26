class Node {
    constructor(val) {
        this.value = val
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(val) {
        this.root = new Node(val)
    }
    addNode(val) {
        this.addElement(this.root, val)
    }
    addElement(root, val) {
        if (root.left === null) {
            root.left = new Node(val)
        } else if (root.right === null) {
            root.right = new Node(val)
        } else if (root.value < val) {
            this.addElement(root.right, val)
        } else {
            this.addElement(root.left, val)
        }
    }
    inOrderTraversal(root=this.root){
        if(root!=null){
            this.inOrderTraversal(root.left)
            console.log(root.value)
            this.inOrderTraversal(root.right)
        }
    }
    preOrderTraversal(root=this.root){
        if(root!=null){
            console.log(root.value)
            this.preOrderTraversal(root.left)
            this.preOrderTraversal(root.right)
        }
    }
    postOrderTraversal(root=this.root){
        if(root!=null){
            this.postOrderTraversal(root.left)
            this.postOrderTraversal(root.right)
            console.log(root.value)
        }
    }
}

let tree = new Tree(1)
tree.addNode(2)
tree.addNode(3)
tree.addNode(4)
tree.addNode(5)
console.log("InOrder")
tree.inOrderTraversal()
console.log("PreOrder")
tree.preOrderTraversal()
console.log("PostOrder")
tree.postOrderTraversal()