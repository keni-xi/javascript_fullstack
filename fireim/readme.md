emmet vscode 内置的快捷输入方式
！+tab快速完成基本结构的输入
.key>.key>div+span.sound
div 标签可以省略
emmet语法以css选择器为依据
> 元素
+ 兄弟元素

- 写结构
DIV+CSS DIV换盒子
IMG 内容元素
职责分明
-类名 wrapper 前段专有命名词汇
-定位
找到离他最近的position:relativa|absolute父级定位
如果找不到就找最顶层的Body
-animation
animation-direction；reverse alternate
animation-timing-function: linear
animation-delay: 2s

## position
position;

1.向父级查找 设置了 position 的元素,
如果没有相对于整个body,
2.相对于 父级 第一个 非 static 定位元素。


position:
relative
absolute
fix:
static:默认 浏览器自己设置

-js是极具表现力的语言
中台概念 node + vue/react
-{} 对象字面量  {key:value,...} 
字符串 数值 布尔值 对象
-background-size:cover|contain;
cover 是以容器为主，等比例缩放 剪裁多余部分
contain 是以图片为主 在一个方向上等比例缩放图片
-rem
相对于 HTML font-size 来计算的
vw vh
-手写网页布局系统 Layout
row 行 弹性布局
列 column .col-${n}
rem 做 10rem 等分

-实现居中（五种以上）
display：flex;
align-item：center;
justify-content：center