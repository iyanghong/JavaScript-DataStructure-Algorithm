import BinarySearchTree from '../../src/BinarySearchTree.js';
import {treePrint} from "./util.js";

let bst = new BinarySearchTree();

bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);

// console.log(bst.root)
treePrint(bst);

// const printNode = (value) => console.log(value);
// bst.inOrderTraverse(printNode)

// console.log(bst.search(1) ? '找到1' : '找不到1');
// console.log(bst.search(8) ? '找到8' : '找不到8');

bst.remove(6)
treePrint(bst);
bst.remove(5)
treePrint(bst);
bst.remove(15)
treePrint(bst);