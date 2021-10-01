/**
 * Created by yh on 2021/10/1
 */

import HashTable from "./HashTable.js";
import LinkedList from "./LinkedList.js";

class ValuePairs {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString() {
        return `[#${this.key}: ${this.value}]`
    }
}

export default class HashTableSeparateChaining extends HashTable {
    put(key, value) {
        if (key == null && value == null) return false;
        const position = this.hashCode(key);
        // 如果当前位置为空，那就new一个链表进行赋值
        if (this.table[position] == null) {
            this.table[position] = new LinkedList();
        }
        // 往链表中添加元素
        this.table[position].push(new ValuePairs(key, value));
        return true;
    }

    get(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        // 验证在特定的位置是否有元素存在，且链表不为空
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            // 迭代链表元素寻找匹配key
            while (current != null) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }

    remove(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        // 验证在特定的位置是否有元素存在，且链表不为空
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            // 迭代链表元素寻找匹配key
            while (current != null) {
                if (current.element.key === key) {
                    linkedList.remove(current.element);
                    if (linkedList.isEmpty()) {
                        delete this.table[position];
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }

    size() {
        return this.keyValues().length;
    }

    keyValues() {
        let valuePairs = [];
        for (let i in this.table) {
            let linkedList = this.table[i];
            if (linkedList === undefined) continue;
            let current = linkedList.getHead();
            while (current) {
                valuePairs.push(current.element)
                current = current.next;
            }
        }
        return valuePairs;
    }

    toString() {
        let objString = "";
        for (let i in this.table) {
            let linkedList = this.table[i];
            if (linkedList === undefined) continue;
            objString += `${i}: `;
            let current = linkedList.getHead();
            while (current) {
                objString += current.element.toString();
                current = current.next;
                if (current) objString += ', ';
            }
            objString += '\r\n';
        }
        return objString;
    }

}