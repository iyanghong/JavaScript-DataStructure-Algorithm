/**
 * Created by yh on 2021/6/22
 */
let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
Array.prototype.insertFirst = function (value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
}

arr.insertFirst(14);
console.log(arr.length,arr)


Array.prototype.removeFirst = function () {
    for (let i = 0;i < this.length - 1;i++){
        this[i] = this[i + 1];
    }
}
arr.removeFirst();
console.log(arr.length,arr)

arr = [0,1,2,3,4,5,6];
// delete arr[2]
// arr.splice(2,2);
arr.splice(2,0,8,8,8);
console.log(arr)