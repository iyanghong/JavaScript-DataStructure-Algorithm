/**
 * Created by yh on 2021/4/15
 */

fun(); // this is a function.
function fun() {
    console.log('this is a function.')
}
fun(); // this is a function.


demo(); // 报错：demo is not a function
var demo = function () {
    console.log('this is a function.')
}
demo(); // this is a function.

num = 1;

console.log(num);
var num;

console.log(num);  // undefined
var num = 1;

fun();
function fun(){
    console.log('this is a function.');
}
var fun = 2;

let constructor = new Function('name','age',"console.log(name + '的年龄为' + age);")
constructor('张三',18);

var fun1 = function () {
    return '返回一个字符串';
}

var fun2 = function () {

}

console.log(fun1()); // 打印：返回一个字符串
console.log(fun2()); // undefined