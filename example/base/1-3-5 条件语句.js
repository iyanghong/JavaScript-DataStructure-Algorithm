/**
 * Created by yh on 2021/4/14
 */

// if 语句
var variable = 1;
if(variable === 1){
    console.log('variable 真的等于 1');
}

// else 语句

var elseVariable = 0;
if(elseVariable === 1){
    console.log('elseVariable 等于 1');
}else{
    console.log('elseVariable 不等于 1');
}

elseVariable === 1 ? console.log('elseVariable 等于 1') : console.log('elseVariable 不等于 1');

// elseif 语句

var month = 5;
if (month === 1){
    console.log('一月');
}else if (month === 2){
    console.log('二月');
}else if (month === 3){
    console.log('三月')
}else {
    console.log('月份不是一月，也不是二月或三月');
}

switch (month) {
    case 1:
        console.log('一月');
        break;
    case 2:
        console.log('二月');
        break;
    case 3:
        console.log('三月')
        break;
    default:
        console.log('月份不是一月，也不是二月或三月');
}