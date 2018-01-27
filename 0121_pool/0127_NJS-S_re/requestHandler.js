var exec = require("child_process").exec;
var fs = require("fs");
var formidable = require("formidable");

//千万注意！！！   >>>>>> 文件上传的<input>，千万要有 name属性
//★！！！   >>>>并且在这里 name属性是：upload     >>>>   怀疑和files.upload.path有关！
//和 multiple=“multiple” 无关！！
//和 files.upload.path有关！
function start(response, request){
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="file" multiple="multiple" name="uploadss" />'+
        '<input type="submit" name="Upload It!">'+
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
    //当然是 “解析表”咯!!!
    //form.parse的回调 参数是：err fields files
    // form.parse(request, function(err, fields, files){
    //     fs.renameSync(files.upload.path, "./tmp/test.png");
    //     response.writeHead(200, {"Content-Type":"text/html"});
    //     response.write("the image is >>>  \n");
    //     response.write("<img src='/show' />");
    //     response.end();
    // });
    form.parse(request, function(error, fields, files){
        console.log("parsing >>");
        fs.renameSync(files.uploadss.path, "./tmp/test.png");
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("received image: <br />");
        response.write("<img src='/show' />");
        response.end();
    });
}

function show(response, request){
    //fs.readFile 回调函数 只有：err file
    fs.readFile("./tmp/test.png", "binary", function(err, file){
        if(err){
            response.writeHead(500, {"Content-Type":"text/plain"});
            response.write("!!  ERROR: "+err);
            response.end();
        }else{
            //首先，这里的头部指出类型 image/png
            //下面，不需要啰嗦、直接 res.write(file, "binary") << 不要write别的，不然就报错！
            response.writeHead(200, {"Content-Type":"image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;