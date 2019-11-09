# 跨域
浏览器的安全策略：
两个服务需要遵守同源策略: 同协议，同域名，同端口号
同源才会发出请求
不同源就 跨域
http:localhost:8080/index.html
http:localhost.com/api/vi
baidu.com  api.baidu.com

## cors
cross-origin-resource-share
有个规范 允许服务器申明哪些源可以访问
Access-Control-Allow-Origin

## 请求的步骤
1. 简单请求 ：直接发起跨域请求
    表单可以构造的请求
2. 复杂请求 ：先发起一个预检（preFlight）请求,预先判断一下服务支不支持跨域，之后才会发起正式的跨域请求。

## josnP
link script img:不受同源策略的影响