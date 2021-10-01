/**
 * Created by yh on 2021/10/1
 */

export function defaultToString(key) {
    if (key === null) {
        return 'NULL'
    } else if (key === undefined) {
        return 'UNDEFINED';
    } else if (typeof key === 'string' || key instanceof String) {
        return `${key}`;
    }
    return key.toString();
}