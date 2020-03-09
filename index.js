
   //创建一个简单的服务

var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain ;charset=utf8'});

    console.info("welcome to node......\n");
    console.log("install node ，you are success！\n");       
    // 发送响应数据 "Hello World"
    response.end('Hello World\n   这是我创建的第一个程序！。。。。。。。\n');

}).listen(8888) 