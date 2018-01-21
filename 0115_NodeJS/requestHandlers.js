
var exec = require("child_process").exec;

function start() {

    console.log("Request handler 'start' was called.");
    // function sleep(milliSeconds){
    //     var startTime = new Date().getTime();
    //     var i = 1;
    //     while(new Date().getTime() < startTime + milliSeconds);
    // }

    // sleep(10000);

    // return "Hello START";

    var content = "empty";
    
    exec("ls -lah", function(error, stdout, stderr){
        // console.log(error);
        // console.log("=================");
        // console.log(stdout);
        // console.log("=================");
        // console.log(stderr);
        content = stderr;
    });

    return content;
}
// 
function upload() {
    return "Hello UPLOAD";
}

exports.start = start;
exports.upload = upload;