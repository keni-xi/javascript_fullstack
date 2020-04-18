# vue-elementui-layout

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## babel
js的语法编译器
class 关键词  -> babel ->es5的代码
里面有丰富的插件机制
vue 提供了transform-vue-jax

<el-row>
	<el-col>12</el-col>
</el-row>

"use strict";

h("el-row", [h("el-col", ["12"])]);
