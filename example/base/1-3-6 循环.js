/**
 * Created by yh on 2021/4/14
 */

var arr = ['张三', '李四', '王五', '赵六', '杨七'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i = 1; i < 10; i++) {
    console.log(i);
}


var studentScore = {chinese: 90, math: 93, english: 88};
for (let subject in studentScore){
    console.log(subject + '分数为：' + studentScore[subject]);
}

var num = 1;
// while (num < 10){
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}while (num < 10);

const setObj = new Set();
setObj.add('Java');
setObj.add('JavaFX');
setObj.add('JavaScript');
setObj.add('HBase');
const entries = setObj.entries();

for (let item of entries) {
    console.log(item)
}