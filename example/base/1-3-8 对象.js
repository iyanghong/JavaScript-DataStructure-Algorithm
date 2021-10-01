/**
 * Created by yh on 2021/4/15
 */

// var obj = {
//     name : '张三',
//     age : 18,
//     run : function () {
//         console.log(this.name + '开始奔跑');
//     }
// };
//
// obj.run(); // 张三开始奔跑


// function Person() {
//     this.name = '张三';
//     this.age = 18;
//
//     this.run = function () {
//         console.log(this.name + '开始奔跑');
//     }
//
//     console.log(this.name + '的年龄为' + this.age);
// }
//
//
// //实例化对象：
// var person = new Person();  // 打印：张三的年龄为18
// person.run();


// function Person() {
//
// }
//
// Person.prototype.name = '张三';
// Person.prototype.age = 18;
// Person.prototype.run = function () {
//     console.log(this.name + '开始奔跑');
// }
//
// var person = new Person();
// person.run(); // 张三的年龄为18

function Person(name) {
    this.name = name;
    this.sayHello = function () {
        console.log('我的名字叫' + name);
    }

    this.run = function () {
        console.log(name + '开始奔跑');
    }
}

// 定义学生类
function Student(name,age) {
    // 调用父类构造器, 确保(使用Function#call)"this" 在调用过程中设置正确
    Person.call(this,name);
    //初始化学生年龄
    this.age = age;

    /**
     * 更换Person类的sayHello方法
     */
    this.sayHello = function () {
        console.log('我的名字叫' + name + ',今年' + age + '岁')
    }
    this.squat = function () {
        console.log('蹲下来')
    }

}
// 建立一个由Person.prototype继承而来的Student.prototype对象
Student.prototype = Object.create(Person.prototype);
// 设置"constructor" 属性指向Student
Student.prototype.constructor = Student;

var student = new Student('张三',18);
student.sayHello(); // 我的名字叫张三,今年18岁
student.run();  // 张三开始奔跑
student.squat();    //蹲下来

console.log(student instanceof Person);  // true
console.log(student instanceof Student); // true