var exec = require("child_process").exec;
var fs = require("fs");
var formidable = require("formidable");

function start(response, request){
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="file" name="upload" />'+
        '<input type="submit" value="Upload It!" />'+
        '</form>'+
        '</body>'+
        '</html>'

    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(body);
    response.end();
}

function upload(response, request){
    var form = new formidable.IncomingForm();
    form.uploadDir = "tmp";
    form.parse(request, function(error, fields, files){
        fs.renameSync(files.upload.path, "./tmp/test.png");
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write("the image is >>  \n"); // \n 和 <br /> 一个效果！
        response.write('<img src="/show" />');
        response.end();
    });
    
}

function show(response, request){
    //读用什么读？用binary！
    //so，readFile(址，码， 回调[err,file-文件本身])
    fs.readFile("./tmp/test.png", "binary", function(err, file){
        if(err){
            response.writeHead(500, {"Content-Type":"text/plain"});
            response.write("ERROR!!  kuwashi >>"+err);
            response.end();
        }else{
            response.writeHead(200, {"Content-Type":"image/png"});
            response.write(file, "binary");//写用什么写？也要binary！
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;