/**
 * Created by yh on 2021/9/16
 */
class Stack {
    constructor() {
        this.items = [];
    }

    /**
     * 添加一个（或几个）新元素到栈顶
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

    toString() {
        return this.items.toString();
    }
}


// 从十进制到二进制
function decimalToBinary(number) {
    let stack = new Stack();
    let binaryString = '';
    while (number > 0) {
        stack.push(Math.floor(number % 2));
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
}

console.log(decimalToBinary(962464))

/**
 * 十进制转换任意进制
 * @param number
 * @param level
 * @return {string}
 */
function binaryConversion(number,level = 2) {
    let stack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(level < 2 || level > 36){
        return '';
    }
    let binaryString = '';
    while (number > 0){
        stack.push(Math.floor(number % level))
        number = Math.floor(number / level);
    }
    while (!stack.isEmpty()){
        binaryString += digits[stack.pop()];
    }
    return binaryString;
}

console.log(binaryConversion(10,2)); //1010