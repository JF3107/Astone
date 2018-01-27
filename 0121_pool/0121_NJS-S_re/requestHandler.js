/** 
 * 具体处理函数（对应router），全在这里[这里就是处理区]
 */
var exec = require("child_process").exec;

function start(){
    // var content = "empty";
    // exec("dir", function(error, stdout, stderr){
    //     content = stdout;
    // });
    // return content;
    return "HEY!...IT IS START!!...in 0127, pu-tu-center!"
}

function upload(){
    return "OK, this is uuuuuPLOADDD!!"
}

exports.start = start;
exports.upload = upload;