/**
 * Created by yh on 2021/9/26
 */
import {defaultToString} from "./utils.js";


class ValuePairs {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString() {
        return `[#${this.key}: ${this.value}]`
    }
}

export default class Dictionary {
    constructor(toStringFn = defaultToString) {
        this._toStringFn = toStringFn;
        this.table = {};
    }

    /**
     * 向字典中添加新元素。如果key存在，那么已存在的value会被新的值覆盖
     * @param key
     * @param value
     */
    set(key, value) {
        let tableKey = this._toStringFn(key);
        this.table[tableKey] = new ValuePairs(key, value);
    }

    /**
     * 通过以键名作为参数查找特定数值并返回
     * @param key
     * @return {*}
     */
    get(key) {
        let valuePairs = this.table[this._toStringFn(key)];//获取所有[键，值]队类
        if (valuePairs) {
            return valuePairs.value;
        }
        return undefined;
    }

    /**
     * 通过使用键名作为参数从字典中移除键名对应的数据值
     * @param key
     * @return {boolean}
     */
    remove(key) {
        if (this.has(key)) {
            delete this.table[this._toStringFn(key)];
            return true;
        }
        return false;
    }

    /**
     * 如果某个键存在于字典中，返回true，否则返回false
     * @param key
     * @return {boolean}
     */
    has(key) {
        return Object.prototype.hasOwnProperty.call(this.table, this._toStringFn(key));
    }


    /**
     * 将字典中所有[键,值]对返回
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
     * 将字典所包含的所有数值以数组形式返回
     */
    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }

    /**
     * 将字典所包含的所有键名以数组形式返回
     * @return {string[]}
     */
    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }

    /**
     * 删除字典中所有值
     */
    clear() {
        this.table = {};
    }

    /**
     * 返回字典所包含值的数量
     * @return {number}
     */
    size() {
        return Object.keys(this.table).length;
    }

    /**
     * 判断是否是空字典
     * @return {boolean}
     */
    isEmpty() {
        return this.size() === 0;
    }


    /**
     * 矢代字典中所有的键值对。callback有两个参数：key和value。该方法可以在回调函数返回false时被终止
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
        let valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString},${valuePairs[i].toString()}`
        }
        return objString;
    }
}

