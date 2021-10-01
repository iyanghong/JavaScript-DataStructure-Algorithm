/**
 * Created by yh on 2021/9/16
 */
import Deque from "../../src/Deque.js";

let deque = new Deque();
console.log(deque.isEmpty()); //true
deque.addBack('张三');
deque.addBack('李四');
deque.addFront('王五');
console.log(deque.toString()) // 王五,张三,李四
deque.removeFront();
console.log(deque.toString()); // 张三,李四
deque.removeBack();
console.log(deque.toString()); // 张三

/**
 * 回文检查器
 * @param content 需要检查的字符串
 * @return {boolean}
 */
function palindromeDetector(content) {
    if (content === undefined || content === null || content.length === 0) {
        return false;
    }
    let deque = new Deque();
    let lowerString = content.toLocaleLowerCase().split(' ').join(''); // 全转成小写并移除空格
    let isEqual = true;
    let firstChar, lastChar;
    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i));
    }
    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }
    return isEqual;

}

console.log('a',palindromeDetector('a')); // true
console.log('aa',palindromeDetector('aa')); // true
console.log('kayak',palindromeDetector('kayak')); // true
console.log('hello',palindromeDetector('hello')); // false