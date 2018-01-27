/** 
 * 具体处理函数（对应router），全在这里[这里就是处理区]
 */
// var exec = require("child_process").exec;
// var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(response, request){//异步处理函数（比如本函数中的exec）中放入响应、才能得到异步响应。
    // exec("dir", function(error, stdout, stderr){
    //     response.writeHead(200,{"Content-Type":"text/plain"});
    //     response.write(stdout);
    //     response.end();
    // });
    /**
     * 记住： JS中 hard-code HTML时，最好采用单引号
     */
    //<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />   熟记！
    //action属性 >> 动作路由
    //textarea 成对标签
    //以上是   先前对<HTML>相关的lesson
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="file" name="upload" />'+
        '<input type="submit" value="Upload File">'+
        '</form>'+
        '</body>'+
        '</html>';
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(body);
    response.end();
}

function upload(response, request){
    var form = new formidable.IncomingForm();
    form.uploadDir = "tmp";
    form.parse(request, function(error, fields, files){
        console.log("parsing >>");
        fs.renameSync(files.upload.path, "./tmp/3107.png");
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("received image: <br />");
        response.write("<img src='/show' />");
        response.end();
    });
    // response.writeHead(200,{"Content-Type":"text/plain"});
    // // response.write("u 've sent:  "+ querystring.parse(postData).text);
    // response.write("u 've sent:  "+ postData);
    // response.end();
}

//单跑 show函数的话，不需要去server里面的route函数；虽然还是需要server启起来的。
function show(response, request){
    fs.readFile("./tmp/3107.png", "binary", function(err, file){
        if(err){
            response.writeHead(500,{"Content-Type":"text/plain"});
            response.write(err + "\n");
            response.end();
        }else{
            response.writeHead(200,{"Content-Type":"image/png"});
            response.write(file, "binary");//要正常显示出图片，file文件名+"binary"
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;