var http = require('http');// node 的底层 核心库
var fs=require('fs'); //引入文件库
var path=require('path');//路径
//console.log(http);
//创建一个web服务 web 服务本质是 有N人来访问网站 request 
//网站的开发者 ，响应用户的需求 res 问答模式
http.createServer(function(req,res){
    console.log(req.url);
    if(req.url=='/image/image.png)'){
        console.log('图片');
        //将图片返回给用户
        res.writeHead(200,{'Content-Type':'image/png'});
        let imgStream=fs.createReadStream(
            path.join(_dirname,'image.png')
        );
        imgStream.pipe(res);
        return;

    }
    /*res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write("来日可期！")*/
    let fileStream=fs.createReadStream
    (path.join(_dirname,'index.html'))
    fileStream.pipe(res); //让结果流向request对象
})
.listen(2325)