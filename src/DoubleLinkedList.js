/**
 * Created by yh on 2021/10/1
 */

import LinkedList from "./LinkedList.js";
export class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.pre = null;
    }
}
export default class DoubleLinkedList extends LinkedList {
    constructor() {
        super();
        this.tail = null;
    }

    push(element) {
        let node = new Node(element);
        // 当链表为空
        if (this.head === undefined) {
            this.head = node;
            this.tail = node;
        } else {
            //否则将当前节点添加到链表尾部
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.length) {
            let node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (this.head === null) { // 如果链表为空
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    current.pre = node;
                    this.head = node;
                }
            } else if (index === this.length) {
                current = this.tail;
                current.next = node;
                node.pre = current;
                this.tail = node;
            } else {
                let previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.pre = node;
                node.pre = previous;
            }
            this.length++;
            return true;
        }
        return false
    }

    removeAt(position) {
        // position不能超出边界值
        if (position < 0 || position >= this.length) return null;
        let current = this.head;
        let previous;
        if (position === 0) { // 移除头部元素
            this.head = current.next;
            this.head.pre = null;
            if (this.length === 1) this.tail = null;
        } else if (position === this.length - 1) { // 移除尾部元素
            current = this.tail;
            this.tail = current.pre;
            this.tail.next = null;
        } else { // 移除中间元素
            current = this.getElementAt(position);
            previous = current.pre;
            previous.next = current.next;
            current.next.pre = previous;
        }
        this.length--;
        return current.element;
    }

    getTail() {
        return this.tail;
    }

    toString() {
        let current = this.head;
        let s = '';

        while (current) {
            let next = current.next;
            let previous = current.prev;
            next = next ? next.element : 'null';
            previous = previous ? previous.element : 'null';
            s += `[element: ${current.element}, prev: ${previous}, next: ${next}] `;
            current = current.next;
        }

        return s;
    }
}