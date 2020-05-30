
//Binary Search Trees

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key= key;
        this.value = value;
        this.parent - parent;
        this.left = null;
        this.right = null;
    }
    insert(key, value) {
        //If the tree is empty then this key being inserted is the root node of the tree
        if(this.key == null) {
            this.key = key;
            this.value = value;
        }
        //If the tree already exists then start at the root, and compare it to the key you want to insert. If the new key is less then the node's key then the nre node needs to live in the left-hand branch
        else if (key < this.key) {
            //If the existing node does not have a left child, meaning that if the 'left' pointer is empty, then we can just instantiate and insert the new node as the left child of that node, passing 'this' as the parent
            if(this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            //If the node had an existing left child, then we recursively call the 'insert' method so that the node is added further down the tree
            else {
                this.left.insert(key, value);
            }
        }
        //Similarly if the new key is greater than the node's key then you do the same thing, but on the right hand side.
        else {
            if(this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
        console.log(key, value);
    }
    
    find(key) {
        //If the item is found at the root, then return the value
        if( this.key == null) {
            return this.value;
        }
        //If the item you are looking for is less then the root the follow the left child. If there is an exisitng left child, then recursively check its left and/or right child until you find the item
        else if(key < this.key && this.left) {
            return this.left.find(key);
        }
        //If the item you are looking for is greater then the root then follow the right child. If there is an exisitng right child, then recursively check its left and/or right child until you find the item
        else if(key > this.key && this.right) {
            return this.right.find(key);
        }
        //You have searched the tree and the item is not in the tree
        else {
            throw new Error('Key Error');
        }
    }
    
    remove(key) {
        if(this.key == key) {
            if(this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            //If the node only has one left child, then you replace the node with its left child
            else if(this.left) {
                this._replaceWith(this.left);
            }
            //Similarly if the node only has a right child, then you replace it with its right child
            else if(this.right) {
                this._replaceWith(this.right)
            }
            //If the node has no children, then simply remove it and any references to it by calling "this._replaceWith(null)"
            else {
                this._replaceWith(null);
            }
        }
        else if(key < this.key && this.left) {
            this.left.remove(key);
        }
        else if(key > this.key && this.right) {
            this.right.remove(key)
        }
        else {
            throw new Error('Key Error');
        }
    }
    bst_height(tree) {
        return Math.max(tree.left && bst_height(tree.left),
        tree.right && this.bst_height(tree.right)) +1
    }
    isBST(bst) {
       if(bst.left) {
           if(bst.left.key > bst.key) {
               return false;
           }
           if(!this.isBST(bst.left)) {
               return false;
           }
       }
       if(bst.right) {
           if(bst.right.key < bst.key) {
               return false;
           }
           if(!this.isBST(bst.right)) {
               return false;
           }
       }
       return true;
    }
     thirdLargest(node, counter = 1) {
         if(!node) return console.log('Tree is too young, not enough digits');
         if(counter=== 3) return nnode.value;
         return thirdLargest(node.right, counter +1) || thirdLargest(node.left, counter +1)
     }
     _shortest(tree) {
         return Math.min(tree.left && bst_height(tree.left),
         tree.right && bst_height(tree.right)) + 1;
     }
     balanced(node) {
         return bst_height(node) - this._shortest(node) <= 1
     }
}
 const nst = new BinarySearchTree();

 nst.insert('1', '3');
 nst.insert('2','1');
 nst.insert('3', '4');
 nst.insert('4', '6');
 nst.insert('5', '9');
 nst.insert('6','2');
 nst.insert('7', '5');
 nst.insert('8', '7');

 nst.height();




