/**
 * Created by yh on 2021/10/1
 */

import HashTableSeparateChaining from "../../src/HashTableSeparateChaining.js";

let hash = new HashTableSeparateChaining();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'john@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');

console.log(hash.toString());
console.log(`size: ${hash.size()}`);
console.log(hash.get('John'));

console.log(hash.remove('Ana'));
console.log(hash.remove('John'));
console.log(hash.toString());


/*
console.log(hash.hashCode('Gandalf') + ' - Gandalf');
console.log(hash.hashCode('John') + ' - John');
console.log(hash.hashCode('Tyrion') + ' - Tyrion');
console.log(hash.hashCode('Aaron') + ' - Aaron');
console.log(hash.hashCode('Donnie') + ' - Donnie');
console.log(hash.hashCode('Ana') + ' - Ana');
console.log(hash.hashCode('Jamie') + ' - Jamie');
console.log(hash.hashCode('Sue') + ' - Sue');
console.log(hash.hashCode('Mindy') + ' - Mindy');
console.log(hash.hashCode('Paul') + ' - Paul');
console.log(hash.hashCode('Nathan') + ' - Nathan');
*/

