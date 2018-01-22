/* 每月复利  800+29.99元 */
var sum = 0;
var i = 0;
var m = 12;
var ben = 10000;
var rate = 0.08
while(i<m){
    sum = ben + (ben*rate)/m;
    console.log("第"+(i+1)+"个月末，本利和是："+sum);
    ben = sum;
    i++;
}

/* 每周复利  800+32.20元 */
// var sum = 0;
// var i = 0;
// var w = 52;
// var ben = 10000;
// var rate = 0.08;
// while(i<w){
//     sum = ben + (ben*rate)/w;
//     console.log("第"+(i+1)+"星期结束，本利和是："+sum);
//     ben = sum;
//     i++;
// }

/* 每天复利  800+32.77元 */
//var sum = 0;
// var i = 0;
// var d = 365;
// var ben = 10000;
// var rate = 0.08;
// while(i<d){
//     sum = ben + (ben*rate)/d;
//     console.log("第"+(i+1)+"天，本利和是："+sum);
//     ben = sum;
//     i++;
// }