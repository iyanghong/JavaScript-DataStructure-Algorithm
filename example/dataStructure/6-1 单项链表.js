/**
 * Created by yh on 2021/9/18
 */
import LinkedList from "../../src/LinkedList.js";
let linkedList = new LinkedList();
linkedList.push('张三');
linkedList.push('李四');
linkedList.push('王五');
linkedList.push('Cat');
linkedList.push('Dog');
console.log(linkedList.toString())
linkedList.removeAt(2);
console.log(linkedList.toString())
linkedList.remove('张三')
console.log(linkedList.toString())
linkedList.insert(2,'阿狗')
console.log(linkedList.toString())
console.log(linkedList.indexOf('阿狗'))