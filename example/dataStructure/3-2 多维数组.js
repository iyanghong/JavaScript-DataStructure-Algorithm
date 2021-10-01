/**
 * Created by yh on 2021/8/4
 */
let averageDayTemperature1 = [25,26,23,21,26,25,27];
let averageDayTemperature2 = [28,25,27,29,24,31,26];
let averageDayTemperature3 = [27,24,25,24,25,27,24];


let averageDayTemperature = [];
averageDayTemperature[0] = [25,26,23,21,26,25,27];
averageDayTemperature[1] = [28,25,27,29,24,31,26];
averageDayTemperature[2] = [27,24,25,24,25,27,24];

for (let i = 0;i<averageDayTemperature.length;i++){ //遍历行
    for (let j = 0;j < averageDayTemperature[i].length;j++){ //遍历列
        console.log(`第${i + 1}周,第${j + 1}天的温度为：${averageDayTemperature[i][j]}℃`)
    }
}


let seats = [];
// 1班
seats[0] = []
// 1班第一排
seats[0][0] = ['牟登','辛瑄经','保东扈','倪那']
// 1班第二排
seats[0][1] = ['喻汤','蓝祥','曾月宓','兰谈'];


// 2班
seats[1] = [];
// 2班第一排
seats[0][0] = ['卞秉','尤品','朱蓉牛','解谕屠']
// 2班第二排
seats[0][1] = ['苏琪刚','费尧初','戴璇何','安翁宇'];