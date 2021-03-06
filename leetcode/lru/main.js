//可以被运行的对象叫函数
function LRUCache(capacity){
    this.capacity=capacity;//容量
    this.obj={};//get set 储存数据
    // push splice pop unshift
    this.arr=[]; //优先级
}
LRUCache.prototype.get=function(key){
    return this.obj[key];

}
LRUCache.prototype.get=function(key){
    var index=this.arr.indexOf(key);
    this.arr.splice(index,1);
    this.arr.unshift(key);
    var val=this.obj[key];
    if(val){
        return val;
    }else{
        return -1;
    }

}
LRUCache.prototype.put=function(key,value){
    if(this.obj[key]){  //以存在
        this.obj[key]=value;//更新值
        // 调整优先级 在某个位置？ 删除 移到最前面
        var index=this.arr.indexOf(key);
        this.arr.splice(index,1);
        this.arr.unshift(key);
        return;
    }
    if(this.capacity===this.arr.length){  //放满了
        var k=this.arr.pop();
        this.obj[key]=undefined;
    }
    this.obj[key]=value;
    this.arr.unshift(key);//放到最前面  最前面最优先
}
let cache=new LRUCache(2);
cache.put(1,1);
cache.put(2,2);
cache.get(1);
cache.put(3,3);
console.log(cache.get(2));
cache.put(4,4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));