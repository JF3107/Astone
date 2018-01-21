
var exec = require("child_process").exec;

function start(response) {

    console.log("Request handler 'start' was called.");
    // function sleep(milliSeconds){
    //     var startTime = new Date().getTime();
    //     while(new Date().getTime() < startTime + milliSeconds);
    // }
    // sleep(10000);
    // return "Hello START";

    // var content = "empty";
    // return content;

    exec("dir", function (error, stdout, stderr) {//DOS(微软...)中就不要用linux来较劲了嘛...
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });
}
// 
function upload(response) {
    // return "Hello UPLOAD";
    console.log("Request handler 'upload' was called.");
    response.writeHead(200,{"content-Type":"text/plain"});
    response.write("hder:  UPLOAD>>");
    response.end();
}

exports.start = start;
exports.upload = upload;