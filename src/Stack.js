/**
 * Created by yh on 2021/10/1
 */
export default class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    /**
     * 添加一个（或几个）新元素到栈顶
     */
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    /**
     * 移除栈顶的元素，同时返回被移除的元素
     */
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--
        let result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    /**
     * 返回栈顶的元素，不对栈做任何修改
     */
    peek() {
        return this.items[this.count - 1];
    }

    /**
     * 如果栈里没有任何元素就返回true,否则返回false
     */
    isEmpty() {
        return this.count === 0;
    }

    /**
     * 移除栈里所有元素
     */
    clear() {
        while (!this.isEmpty()) {
            this.pop();
        }
    }

    /**
     * 返回栈里元素的个数
     */
    size() {
        return this.count;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let content = this.items[0];
        for (let i = 1; i < this.count; i++) {
            content += ',' + this.items[i];
        }
        return content;
    }
}