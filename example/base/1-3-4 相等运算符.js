/**
 * Created by yh on 2021/4/13
 */

console.log('张三' === true); // false (两者类型不相同)
console.log('张三' === '张三') // true

var person1 = { name : '张三' };
var person2 = { name : '张三' };

console.log(person1 === person2) // false (两者引用的是不同对象)