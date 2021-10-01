/**
 * Created by yh on 2021/9/30
 */
import HashTable from '../../src/HashTable.js'

let hash = new HashTable();


hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'john@email.com');
hash.put('Jack', 'jack@email.com');

console.log(hash.toString())

console.log(hash.get('John'));
console.log(hash.get('Mane'));

hash.remove('John');
console.log(hash.get('John'));


