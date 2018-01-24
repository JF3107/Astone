/** 
 * 具体处理函数（对应router），全在这里[这里就是处理区]
 */
var exec = require("child_process").exec;

function start(){
    var content = "empty";
    exec("dir", function(error, stdout, stderr){
        content = stdout;
    });
    return content;
}

function upload(){
    return "OK, this is uuuuuPLOADDD!!"
}

exports.start = start;
exports.upload = upload;