/**
 * Created by yh on 2021/4/12
 */
var myVariable = 'global';
myOtherVariable = 'global';

function myFunction(){
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction(){
    myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable); // 输出 global,因为它是一个全局变量
console.log(myFunction()); //输出 local,因为myVariable是在myFunction函数中声明的局部变量，所以作用域仅在myFunction

console.log(myOtherVariable); //输出 global,这里引用的是初始化的全局变量myOtherVariable
console.log(myOtherFunction()); //输出 local,在myOtherFunction里，因为没有使用var 关键字修饰，所以这里引用的是全局变量myOtherVariable，并将其复制为local
console.log(myOtherVariable); //输出 local 因为在myOtherFunction里修改了myOtherVariable的值