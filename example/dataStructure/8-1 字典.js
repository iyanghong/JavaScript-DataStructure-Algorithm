/**
 * Created by yh on 2021/9/26
 */
import Dictionary from "../../src/Dictionary.js";

let dictionary = new Dictionary();
dictionary.set("张三","Lu0@email.net");
dictionary.set("李四","UGFuT70lwe@email.com");

console.log(dictionary.size());
console.log(dictionary.toString());

console.log(dictionary.has("李四"));
console.log(dictionary.get('李四'));

dictionary.remove("李四");
dictionary.set("John","kGR2y@email.com")

console.log(dictionary.keys());
console.log(dictionary.values());

dictionary.forEach((key,value) => {
    console.log(`${key}的电子邮箱号码为：${value}`);
});