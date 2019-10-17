var parent = document.getElementById('content-items')
//console.log(parent)
var send=document.getElementById('send')
send.addEventListener('click',function(){
    console.log(666)
    var li = document.createElement('li')
li.setAttribute('class','content-item')
//console.log(li)s

var divPic=document.createElement('div')
divPic.setAttribute('class','pic')
li.appendChild(divPic)
var img=document.createElement('img')
img.setAttribute('src','https://p1.ssl.qhimg.com/t0190d184f0158ad3a3.png')
divPic.appendChild(img)
var message=document.createElement('div')
message.setAttribute('class','message')
li.appendChild(message)

var p1=document.createElement('p')
p1.setAttribute('class','name')
var p1Text=document.createTextNode('李现')
p1.appendChild(p1Text)
message.appendChild(p1)

var p2=document.createElement('p')
p2.setAttribute('class','detail')
var p2Text=document.createTextNode('中午一起吃饭吗')
p2.appendChild(p2Text)
message.appendChild(p2)
parent.appendChild(li)
})



//console.log(li)
