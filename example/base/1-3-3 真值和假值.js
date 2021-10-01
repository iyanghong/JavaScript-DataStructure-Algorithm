/**
 * Created by yh on 2021/4/13
 */
function demo(val){
    return val ? console.log('true') : console.log('false');
}

demo(true); // true
demo(false); // false
demo(new Boolean(false)); // true   (因为对象始终是true)

demo(''); // false  (因为长度为零的字符串为false)
demo('false'); // true (因为长度大于零的字符串都为true)
demo(new String('')); // true   (因为对象始终是true)

demo(1);    // true
demo(-1);   // true
demo(NaN);  //false
demo(new Number(NaN));// true   (因为对象始终是true)

demo({}); // true   (因为对象始终是true)

var obj = { name : '张三' };
demo(obj); // true
demo(obj.name); // true
demo(obj.sex);  // false (sex属性不存在为undefined)
