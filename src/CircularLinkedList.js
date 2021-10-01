import LinkedList, {Node} from "./LinkedList.js";

/**
 * Created by yh on 2021/10/1
 */
export default class CircularLinkedList extends LinkedList {
    constructor() {
        super();

    }

    push(element) {

        let node = new Node(element);
        if (this.head === undefined) {
            this.head = node;
        } else {
            let current = this.getElementAt(this.length - 1);
            current.next = node;
        }
        node.next = this.head;
        this.length++;
    }

    insert(position, element) {
        if (position < 0 || position >= this.length) return false;
        let node = new Node(element);
        if (position === 0) {
            node.next = this.head;
            let current = this.getElementAt(this.length - 1);
            current.next = node;
            this.head = node;
        } else {
            let previous = this.getElementAt(position - 1);
            node.next = previous.next;
            previous.next = node;
        }
        this.length++;
        return true;
    }

    removeAt(position) {
        if (position < 0 || position >= this.length) return false;
        let current = this.head;
        if (position === 0) {
            this.head = current.next;
        } else {
            let previous = this.getElementAt(position - 1);
            current = previous.next;
            previous.next = current.next;
        }
        this.length--;
        if (this.length > 1) {
            let last = this.getElementAt(this.length - 1);
            last.next = this.head;
        }
        return current.element;
    }

    toString() {
        let current = this.head;
        let s = '';

        for (let i = 0; i < this.length; i++) {
            let next = current.next;
            next = next ? next.element : 'null';
            s += `[element: ${current.element}, next: ${next}] `;
            current = current.next;
        }

        return s;
    }
}