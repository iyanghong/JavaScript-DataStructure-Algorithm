/**
 * Created by yh on 2021/10/1
 */
export default class Deque {
    _count = 0; //用来记队列的大小
    _lowestCount = 0;   //因为队列需要操作第一个元素，需要一个变量来帮助追踪第一个元素
    _items = {};    // 存储队列元素
    constructor() {
    }

    /**
     * 在双端队列前端添加新元素
     * @param element
     */
    addFront(element) {
        if (this.isEmpty()) {   //空队列
            this.addBack(element);
        } else if (this._lowestCount > 0) { // 一个元素已经被从双端队列的前端移除
            this._lowestCount--;
            this._items[this._lowestCount] = element;
        } else {
            //所有元素往后移动一位
            for (let i = this._count; i > 0; i--) {
                this._items[i] = this._items[i - 1];
            }
            this._count++;
            this._items[0] = element;
        }
    }

    /**
     * 在双端队列后端新增新的元素
     * @param element
     */
    addBack(element) {
        this._items[this._count] = element;
        this._count++;
    }

    /**
     * 从双端队列前端移除第一个元素，并返回该元素
     */
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        let result = this._items[this._lowestCount];
        delete this._items[this._lowestCount];
        this._lowestCount++;
        return result;
    }

    /**
     * 从双端队列后端移除第一个元素，并返回该元素
     */
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        this._count--
        let result = this._items[this._count];
        delete this._items[this._count];
        return result;
    }

    /**
     * 返回双端队列前端第一个元素
     */
    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this._items[this._lowestCount];
    }

    /**
     * 返回双端队列后端第一个元素
     */
    peekBack() {
        return this._items[this._count - 1];
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