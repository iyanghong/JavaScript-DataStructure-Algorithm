/**
 * Created by yh on 2021/9/24
 */
import DoubleLinkedList from "../../src/DoubleLinkedList.js";




let doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.push(1);
doubleLinkedList.push(3);
doubleLinkedList.push(5);
doubleLinkedList.push(7);
doubleLinkedList.push(9);

console.log(doubleLinkedList.toString())
console.log(doubleLinkedList.size())
console.log(doubleLinkedList.getElementAt(1).element);
console.log(doubleLinkedList.getElementAt(2).element);
console.log(doubleLinkedList.getElementAt(3).element);

doubleLinkedList.insert('Jack',1)
console.log(doubleLinkedList.toString())
doubleLinkedList.removeAt(1)
console.log(doubleLinkedList.toString())