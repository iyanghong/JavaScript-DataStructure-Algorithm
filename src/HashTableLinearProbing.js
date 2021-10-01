/**
 * Created by yh on 2021/10/2
 */
import HashTable, {ValuePairs} from "./HashTable.js";


export default class HashTableLinearProbing extends HashTable {
    put(key, value) {
        if (key == null && value == null) return false;
        const position = this.hashCode(key);
        if (this.table[position] == null) {
            this.table[position] = new ValuePairs(key, value);
        } else {
            let index = position + 1;
            while (this.table[index] != null) {
                index++;
            }
            this.table[index] = new ValuePairs(key, value);
        }
        return true;
    }

    get(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                return this.table[position].value;
            } else {
                let index = position + 1;
                while (this.table[index] != null && this.table[index].key !== key) {
                    index++;
                }
                if (this.table[index] != null && this.table[index].key === key) {
                    return this.table[index].value;
                }
            }
        }
        return undefined;
    }

    remove(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                delete this.table[position];
                this._verifyRemoveSideEffect(key, position);
                return true;
            }
            let index = position + 1;
            while (this.table[index] != null && this.table[index].key !== key) {
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key) {
                delete this.table[index];
                this._verifyRemoveSideEffect(key, index);
                return true;
            }
        }
        return false;
    }

    _verifyRemoveSideEffect(key, removedPosition) {
        const hash = this.hashCode(key);
        let index = removedPosition + 1;
        while (this.table[index] != null) {
            const posHash = this.hashCode(this.table[index].key);
            if (posHash <= hash || posHash <= removedPosition) {
                this.table[removedPosition] = this.table[index];
                delete this.table[index];
                removedPosition = index;
            }
            index++;
        }
    }
}