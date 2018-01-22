var formidable = require('formidable'),
    http = require('http'),
    sys = require('sys');//暂了解：sys.inspect({...}) << 插入对象

http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();//暂时使用formidable都要用IF！IF的使用：IF.parse(req, 回调函数[① ERR, ② fields字段信息, ③ files文件信息])
    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(sys.inspect({fields: fields, files: files}));//（响应结束时）插入对象[由key：fields、files构成]
    });
    return;
  }

  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(//下面，enctype：规定在将表单数据发送到服务器之前如何对其进行编码
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(9999);