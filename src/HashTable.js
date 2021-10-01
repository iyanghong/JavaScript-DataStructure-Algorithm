/**
 * Created by yh on 2021/9/30
 */
function defaultToString(key) {
    if (key === null) {
        return 'NULL'
    } else if (key === undefined) {
        return 'UNDEFINED';
    } else if (typeof key === 'string' || key instanceof String) {
        return `${key}`;
    }
    return key.toString();
}

class ValuePairs {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString() {
        return `[#${this.key}: ${this.value}]`
    }
}

export default class HashTable {
    constructor(toStringFn = defaultToString) {
        this._toStringFn = toStringFn;
        this.table = {};
    }

    loseLoseHashCode(key) {
        //如果是一个数则直接返回
        if (typeof key === 'number') {
            return key;
        }
        // 把key转为一个字符串
        const tableKey = this._toStringFn(key);
        let hash = 0;   // 散列值的总和
        for (let i = 0; i < tableKey.length; i++) {
            // 从ASCII表中查到的每一个字符对应的ASCII值加到hash变量中。
            hash += tableKey.charCodeAt(i);
        }
        // 为了得到比较小的数值，我们会使用hash值和任意数做除法的余数，这样可以规避操作数超过数值变量变大表示范围的风险
        return hash % 37;
    }

    hashCode(key) {
        return this.loseLoseHashCode(key);
    }

    /**
     * 向散列表增加一个新的项（也能更新散列列表）
     * @param key
     * @param value
     */
    put(key, value) {
        if (key === null && value === null) return false;
        let position = this.hashCode(key);
        this.table[position] = new ValuePairs(key, value);
        return true;
    }

    /**
     * 根据键名从散列表中移除值
     * @param key
     */
    remove(key) {
        let hash = this.hashCode(key);
        let valuePairs = this.table[hash];
        if (valuePairs != null) {
            delete this.table[hash];
            return true;
        }
        return false;
    }

    /**
     * 返回根据键名检索到的特定的值
     * @param key
     */
    get(key) {
        let valuePairs = this.table[this.hashCode(key)];
        return valuePairs == null ? undefined : valuePairs.value;
    }

    /**
     * 如果某个键存在于散列表中，返回true，否则返回false
     * @param key
     * @return {boolean}
     */
    has(key) {
        return Object.prototype.hasOwnProperty.call(this.table, this.hashCode(key));
    }

    /**
     * 将散列表中所有[键,值]对返回
     * @return {[]}
     */
    keyValues() {
        let valuePairs = [];
        for (let key in this.table) {
            if (this.has(key)) {
                valuePairs.push(this.table[key]);
            }
        }
        return valuePairs;
    }

    /**
     * 将散列表所包含的所有数值以数组形式返回
     */
    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }

    /**
     * 将散列表所包含的所有键名以数组形式返回
     * @return {string[]}
     */
    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }

    /**
     * 删除散列表中所有值
     */
    clear() {
        this.table = {};
    }

    /**
     * 返回散列表所包含值的数量
     * @return {number}
     */
    size() {
        return Object.keys(this.table).length;
    }

    /**
     * 判断是否是空散列表
     * @return {boolean}
     */
    isEmpty() {
        return this.size() === 0;
    }


    /**
     * 矢代散列表中所有的键值对。callback有两个参数：key和value。该方法可以在回调函数返回false时被终止
     * @param callback
     */
    forEach(callback) {
        if (typeof callback !== 'function') return;
        let valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            let result = callback(valuePairs[i].key, valuePairs[i].value);
            if (result === false) {
                break;
            }
        }
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
        for (let i = 1; i < keys.length; i++) {
            objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`
        }
        return objString;
    }


}