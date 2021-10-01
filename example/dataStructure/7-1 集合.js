/**
 * Created by yh on 2021/9/25
 */
import Set from '../../src/Set.js'

let setA = new Set();
setA.add(1);
setA.add(2);

let setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

let setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));

/*let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

let differenceAB = setA.difference(setB);
console.log(differenceAB.values());*/

/*let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

let unionSet = setA.union(setB);
console.log(unionSet.values())*/

/*
let set = new Set();
set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());

set.add(3);
console.log(set.values());
console.log(set.has(3));
console.log(set.size());

set.delete(1);
console.log(set.values());

set.delete(3);
console.log(set.values());*/
