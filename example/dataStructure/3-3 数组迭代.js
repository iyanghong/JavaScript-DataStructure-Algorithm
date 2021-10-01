/**
 * Created by yh on 2021/8/11
 */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let isAllEven = numbers.every(x => x % 2 === 0);

console.log(isAllEven)  // false


let hasEven = numbers.some(x => x % 2 === 0)
console.log(hasEven);  // true

numbers.forEach(x => {
    console.log(`数字${x}为${x % 2 === 0 ? '偶数' : '奇数'}`);
})

const myMap = numbers.map(x => x % 2 === 0);
console.log(myMap) // [false, true, false, true, false, true, false, true, false, true]


const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers) // [ 2, 4, 6, 8, 10 ]


const sum = numbers.reduce((previous,current) => previous + current)
console.log(sum) // 55


for(let n of numbers){
    console.log(n % 2 === 0 ? '偶数' : '奇数');
}

let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4

for (let n of iterator){
    console.log(n);
}