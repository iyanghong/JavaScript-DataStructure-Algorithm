class Node {
    constructor(value) {
        this.value = value; // 节点值
        this.left = null;   // 左侧子节点引用
        this.right = null;  // 右侧子节点引用
    }
}

export default class BinarySearchTree {
    constructor() {
        this.root = null; // 根节点
    }

    /**
     * 向树中插入一个新的键
     * @param value
     */
    insert(value) {
        if (this.root == null) {
            //如果树为空，则直接添加根节点
            this.root = new Node(value);
        } else {
            //否则使用递归寻找位置插入
            this.insertNode(this.root, value)
        }
    }

    insertNode(node, value) {
        //判断大小，小则往左边插入，大则往右边插入
        if (value < node.value) {
            if (node.left == null) {
                node.left = new Node(value);
            } else {
                //重新递归调用
                this.insertNode(node.left, value);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(value);
            } else {
                this.insertNode(node.right, value);
            }
        }
    }

    /**
     * 搜索特定值
     * @param value
     * @returns {boolean|boolean|*}
     */
    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node == null) {
            return false;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (node.value > value) {
            return this.searchNode(node.right, value);
        } else {
            return true;
        }
    }

    /**
     * 中序遍历
     */
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback)
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) { // 先检查传入的node是否为null，这就是停止递归继续的判断条件。
            this.inOrderTraverseNode(node.left, callback);
            callback(node.value);
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    /**
     * 先序遍历
     */
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }

    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.value);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    /**
     * 后序遍历
     */
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }

    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
            callback(node.value);
        }
    }

    /**
     * 寻找最小值
     * @returns {*}
     */
    min() {
        return this.minNode(this.root);
    }

    minNode(node) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }

    /**
     * 寻找最大值
     * @returns {*}
     */
    max() {
        return this.maxNode(this.root);
    }

    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }

    /**
     * 从树中移除某个键
     * @param value
     */
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    removeNode(node, value) {
        if (node == null) {
            return null;
        }
        if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        } else {
            //键等于key
            //第一种情况：左右节点都为空
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            //第二种情况：有一个子节点
            if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }
            //第三种情况：有两个子节点
            const aux = this.minNode(node.right);

            node.value = aux.value;
            node.right = this.removeNode(node.right, aux.value);
            return node;

        }
    }

    /**
     * 获取树的深度
     * @returns {number}
     */
    getDeep() {
        return this.getDeepNode(this.root);
    }

    getDeepNode(node) {
        let num = 0;
        if (node) {
            let left = this.getDeepNode(node.left);
            let right = this.getDeepNode(node.right);
            num = Math.max(left, right) + 1;
        }
        return num
    }

    getRoot() {
        return this.root;
    }

    /**
     * 将树转成数组
     * @returns {*[]}
     */
    toArray() {
        //前序遍历
        function NLR(tree, index) {
            if (tree == null) return;
            treeArray[index] = tree.value
            NLR(tree.left, 2 * index + 1);
            NLR(tree.right, 2 * index + 2);

        }
        let treeArray = []
        NLR(this.root, 0);
        return treeArray
    }

    /**
     * 按层自上往下获取二叉树数组，并包含空节点
     * @returns {*[]}
     */
    getLevelNodeWithEmpty() {
        if (this.root == null) return [];
        let treeArray = this.toArray();
        //二叉树的深度可以根据二叉树数组长度 + 1，获取以2为底数的对数，并向上取整
        let deep = Math.ceil(Math.log2(treeArray.length + 1));
        let result = [];
        for (let d = deep; d >= 1; d--) {
            let first = Math.pow(2, d - 1) - 1; //获取某一层的开始索引
            let last = Math.pow(2, d) - 1;         //获取某一层的结束索引
            result.unshift(treeArray.slice(first, last)); //截取数组
        }
        return result;
    }


    /**
     * 按层自上往下获取二叉树
     * @param root
     * @returns {*[]}
     */
    getLevelNode(root) {
        // 使用队列的方式进行二叉树的层次遍历
        if (root === null) return [];
        let queue = [];
        const result = [];
        queue.push(root);
        while (queue.length !== 0) {
            const temp = [];
            const test = [];
            for (let v of queue) {
                temp.push(v);
                test.push(v.value);
            }
            result.push(test);
            queue = [];
            for (let v of temp) {
                if (v.left !== null) {
                    queue.push(v.left)
                }
                if (v.right !== null) {
                    queue.push(v.right)
                }
            }

        }
        for (let i = 0; i < result.length; i++) {
            if (i % 2 !== 0) {
                result[i] = result[i].reverse()
            }
        }
        return result;
    }

}