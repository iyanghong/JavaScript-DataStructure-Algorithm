/**
 * Created by yh on 2021/9/25
 */
export default class Set {
    constructor() {
        this.items = {};
    }

    /**
     * 向集合添加一个新元素
     * @param element
     * @return {boolean}
     */
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true
        }
        return false;
    }

    /**
     * 从集合添加一个新元素
     * @param element
     * @return {boolean}
     */
    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    /**
     * 返回一个包含集合中所有元素的数组
     * @return {unknown[]}
     */
    values() {
        return Object.values(this.items);
    }

    valuesLegacy() {
        let values = [];
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) values.push(key);
        }
        return values;
    }

    /**
     * 如果元素在集合中，返回true，否则返回false
     * @param element
     * @return {boolean}
     */
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    /**
     * 移除集合中所有元素
     */
    clear() {
        this.items = {};
    }

    /**
     * 返回集合所包含元素的数量，与数组的length属性类似
     * @return {number}
     */
    size() {
        return Object.keys(this.items).length
    }

    sizeLegacy() {
        let count = 0;
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) count++;
        }
        return count;
    }

    /**
     * 合并集合
     * @param otherSet
     */
    union(otherSet) {
        let unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }

    unionLegacy(otherSet) {
        let unionSet = new Set();
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    }

    /**
     * 交集
     * @param otherSet
     * @return {Set}
     */
    intersection(otherSet) {
        let intersectionSet = new Set();
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            //验证是否存在otherSet中,存在则添加
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }

    /**
     * 差集
     * @param otherSet
     * @return {Set}
     */
    difference(otherSet) {
        let differenceSet = new Set();
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }

    isSubsetOf(otherSet) {
        //当前set类的大小必须要大于otherSet实例大小
        if (this.size() > otherSet.size()) return false;

        let isSubset = true;
        this.values().every(value => {
            if (!otherSet.has(value)) {
                isSubset = false;
                return false;
            }
            return true;
        })
        return  isSubset;
    }
}

