/**
 * Created by yh on 2021/10/1
 */
export default class Queue {
    _count = 0; //用来记队列的大小
    _lowestCount = 0;   //因为队列需要操作第一个元素，需要一个变量来帮助追踪第一个元素
    _items = {};    // 存储队列元素
    constructor() {
    }

    /**
     * 向队列尾部添加一个（或）多个新的项
     * @param element
     */
    enqueue(element) {
        this._items[this._count] = element;
        this._count++;
    }

    /**
     * 移除队列的第一项（即排在队列最前面的项）并返回被移除的元素
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        let result = this._items[this._lowestCount];
        delete this._items[this._lowestCount];
        this._lowestCount++;
        return result;
    }

    /**
     * 返回队列中第一个元素，即最先添加的元素
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this._items[this._lowestCount];
    }

    /**
     * 如果队列中不包含任何元素，返回true，否则返回false
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * 返回队列包含的元素个数
     */
    size() {
        return this._count - this._lowestCount;
    }

    /**
     * 清空队列
     */
    clear() {
        this._items = {};
        this._count = 0;
        this._lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let str = this._items[this._lowestCount];
        for (let i = this._lowestCount + 1; i < this._count; i++) {
            str += ',' + this._items[i];
        }
        return str;
    }
}