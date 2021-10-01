/**
 * Created by yh on 2021/8/12
 */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reverseNumbers = numbers.reverse();
console.log(reverseNumbers) // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log(numbers.sort()) // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

let sortNumbers = numbers.sort((x, y) => x - y);
console.log(sortNumbers); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

const friends = [
    {name: '张三', age: 15},
    {name: '李四', age: 18},
    {name: '王五', age: 17}
];
let myFriendsSortByAge = friends.sort((a,b) => {
    if(a.age < b.age) return -1;
    if(a.age > b.age) return 1;
    return  0;
})
console.log(myFriendsSortByAge); /*
[
  { name: '张三', age: 15 },
  { name: '王五', age: 17 },
  { name: '李四', age: 18 }
]
*/