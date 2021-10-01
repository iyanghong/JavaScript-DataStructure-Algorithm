/**
 * Created by yh on 2021/9/16
 */
class Stack {
    constructor() {
        this.items = [];
    }

    /**
     * 添加一个（或几个）新元素到栈顶
     * @param element
     */
    push(element) {
        this.items.push(element);
    }

    /**
     * 移除栈顶的元素，同时返回被移除的元素
     */
    pop() {
        return this.items.pop()
    }

    /**
     * 返回栈顶的元素，不对栈做任何修改
     */
    peek() {
        return this.items[this.items.length - 1];
    }

    /**
     * 如果栈里没有任何元素就返回true,否则返回false
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * 移除栈里所有元素
     */
    clear() {
        this.items = [];
    }

    /**
     * 返回栈里元素的个数
     */
    size() {
        return this.items.length;
    }

    /**
     * 转成字符串
     * @return {string}
     */
    toString(){
        return this.items.toString();
    }
}

let stack = new Stack();
stack.push(1);
stack.push(5);
stack.push(8);
stack.push(11);
console.log(stack.toString());

stack.pop();
stack.pop();
console.log(stack.toString());