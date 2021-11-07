export function isArray(arg) {
    if (typeof Array.isArray === 'undefined') {
        return Object.prototype.toString.call(arg) === '[object Array]'
    }
    return Array.isArray(arg)
}
export function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}
export const treePrint = function (tree) {
    const SPACE = 5
    /**
     * 二叉树索引与深度的关系 deep
     * Math.pow(2, deep-1) - 1) 至 Math.pow(2, deep) - 1)
     */
    function creatTextMatrix(treeArray) {
        let deep = Math.ceil(Math.log2(treeArray.length + 1))
        console.log('Deep:' + deep)
        let index = []
        let result = []
        for (let i = 1; i <= deep; i++) {
            result[i] = []
        }
        for (let d = deep; d >= 1; d--) {
            let first = Math.pow(2, d - 1) - 1
            let last = Math.pow(2, d) - 1
            let num = 0
            do {
                let mIndex
                let treeArrayIndex = first + num
                let val = treeArray[treeArrayIndex]
                if (val === undefined) {
                    val = 0
                    treeArray[treeArrayIndex] = val
                }
                if (d === deep) {
                    mIndex = SPACE * num + num
                } else {
                    let left = 2 * treeArrayIndex + 1
                    let right = 2 * treeArrayIndex + 2
                    mIndex = (index[left] + index[right]) / 2
                    if (val !== 0 && (treeArray[left] !== 0 || treeArray[right] !== 0)) {
                        result[d][index[left]] = '|'
                        result[d][index[right]] = '|'
                        for (let i = index[left] + 1; i < index[right]; i++) {
                            result[d][i] = '-'
                        }
                    }
                }
                result[d][mIndex] = val === 0 ? ' ' : val
                for (var i = 0; i < val.length; i++) {
                    result[d][mIndex + i] = val.charAt(i)
                }
                index[treeArrayIndex] = mIndex
                num++
            } while (first + num < last)
        }
        return result
    }

    function getText(textMatrix) {
        let str = ''
        for (let i in textMatrix) {
            str = str.concat('\n')
            for (var j = 0; j < textMatrix[i].length; j++) {
                var val = textMatrix[i][j]
                str = str.concat(val === undefined ? ' ' : val)
            }
        }
        return str
    }
    if(isObject(tree) && typeof tree.toArray === 'function'){
        tree = tree.toArray();
    }

    console.log(getText(creatTextMatrix(tree)));
}