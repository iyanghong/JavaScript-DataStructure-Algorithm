/**
 * Created by yh on 2021/9/16
 */

import Queue from "../../src/Queue.js";

let queue = new Queue();
console.log(queue.isEmpty()); // true
queue.enqueue('张三');
queue.enqueue('李四');
console.log(queue.toString()) // 张三,李四
console.log(queue.size());  // 2
console.log(queue.peek()); // 张三
queue.dequeue();
console.log(queue.toString()) // 李四

/**
 * 击鼓传花游戏
 * @param list 参与者列表
 * @param num 传花次数
 * @return {{winner: *, eliminate: []}}
 */
function hotPotato(list, num) {
    let queue = new Queue();
    let eliminatedList = [];
    //把所有参与者加入队列中
    for (let i = 0; i < list.length; i++) {
        queue.enqueue(list[i]);
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        eliminatedList.push(queue.dequeue());
    }
    return {
        eliminate: eliminatedList,
        winner: queue.dequeue()
    }
}

const names = ['张三','李四','王五','John','Jack'];
const result = hotPotato(names,8);
result.eliminate.forEach(name => {
    console.log(name + '在击鼓传花游戏中被淘汰。')
})
console.log('胜利者：' + result.winner)