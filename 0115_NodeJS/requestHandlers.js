
// var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(response) {
    console.log("Request handler 'start' was called.");

    var body = '<hmtl>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="file" name="upload" multiple="multiple">' + 
        '<input type="submit" value="Upload Image" />'+ 
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response,  request) {
    // return "Hello UPLOAD";
    console.log("Request handler 'upload' was called.");

    var form = new formidable.IncomingForm();
    form.uploadDir = 'tmp';//写一个临时路径, 解决fs.renameSync() 会发生的“移动文件权限问题”

    console.log("about to parse");
    form.parse(request, function(error, fields, files){
        console.log("parsing done");
        fs.renameSync(files.upload.path, "./tmp/test.png");
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write("received image: <br />");
        response.write("<img src='/show' />");
        response.end();
    });
    // form.parse(request, function(error, fields, files){
    //     console.log("parsing done");
    //     // fs.renameSync(files.upload.path, "./tmp/test.png");
    //     var readStream = fs.createReadStream(files.upload.path);
    //     var writeStream = fs.createWriteStream("./tmp/test.png");
    //     readStream.pip(writeStream);
    //     readStream.on("end", function(){
    //         fs.unlinkSync(files.upload.path);
    //     });

    //     response.writeHead(200, {"Content-Type":"text/html"});
    //     response.write("received image: <br />");
    //     response.write("<img src='/show' />");
    //     response.end();
    // });
}

function show(response){
    console.log("Request handler 'show' was called.");
    fs.readFile("./tmp/test.png", "binary", function(error, file){
        if(error){
            response.writeHead(500, {"Content-Type":"text/plain"});
            response.write(error+"\n");
            response.end();
        }else{
            response.writeHead(200, {"Content-Type":"image/png"});//  >>  image/png
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;