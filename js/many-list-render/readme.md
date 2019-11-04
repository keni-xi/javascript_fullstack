## 渲染
document.body.style.backgroundColor = 'red';
setTimeout(() => {
 document.body.style.backgroundColor = 'blue';
}, 0);

先看到red
再看到blue
说明在setTimeout 之前会发生一次 样式计算浏览器并渲染它