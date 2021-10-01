/**
 * Created by yh on 2021/9/25
 */
export class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

export default class LinkedList {
    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    /**
     * 向链表尾部添加节点
     * @param element
     */
    push(element) {
        let node = new Node(element);
        let current;
        if (this.head === undefined) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    /**
     * 在链表的指定位置插入节点
     * @param position
     * @param element
     */
    insert(position, element) {
        // position不能超出边界值
        if (position < 0 || position > this.length) return false;
        let node = new Node(element);
        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let previous = this.getElementAt(position - 1);
            let current = previous.next;
            node.next = current;
            previous.next = node;
        }
        this.length++;
        return true;
    }

    /**
     * 删除链表中指定位置的元素，并返回这个元素的值
     * @param position
     */
    removeAt(position) {
        if (position < 0 || position >= this.length) return undefined;
        let current = this.head;
        if (position === 0) {
            this.head = current.next;
        } else {
            let previous = this.getElementAt(position - 1);
            current = previous.next;
            previous.next = current.next;
        }
        this.length--;
        return current.element;
    }

    /**
     *  删除链表中对应的元素
     * @param element
     */
    remove(element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    /**
     * 在链表中查找给定元素的索引
     * @param element
     */
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current.element === element) return i;
            current = current.next;
        }
        return -1;
    }

    /**
     * 返回链表中索引所对应的元素
     * @param position
     */
    getElementAt(position) {
        if (position < 0 || position >= this.length) return undefined;
        let current = this.head;
        for (let i = 0; i < position; i++) {
            current = current.next;
        }
        return current;
    }

    /**
     * 判断链表是否为空
     */
    isEmpty() {
        return this.length === 0;
    }

    /**
     * 返回链表的长度
     */
    size() {
        return this.length;
    }

    /**
     * 返回链表的头元素
     */
    getHead() {
        return this.head;
    }

    /**
     * 清空链表
     */
    clear() {
        this.head = null;
        this.length = 0;
    }

    /**
     * 辅助方法，按指定格式输出链表中的所有元素，方便测试验证结果
     */
    toString() {
        let current = this.head;
        let content = '';
        while (current) {
            let next = current.next;
            next = next ? next.element : null;
            content += `{ element: ${current.element}, next: ${next} },`;
            current = current.next;
        }
        if (content) {
            content = content.substring(0, content.length - 1);
        }
        content = `[${content}]`;
        return content;
    }
}