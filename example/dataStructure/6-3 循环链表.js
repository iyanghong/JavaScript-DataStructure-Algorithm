/**
 * Created by yh on 2021/9/25
 */
import CircularLinkedList from '../../src/CircularLinkedList.js'




let circularLinkedList = new CircularLinkedList();
circularLinkedList.push(1);
circularLinkedList.push(3);
console.log(circularLinkedList.toString());

circularLinkedList.insert(0, 7);
circularLinkedList.insert(3, 9);
console.log(circularLinkedList.toString());

console.log(circularLinkedList.removeAt(0));
console.log(circularLinkedList.toString());