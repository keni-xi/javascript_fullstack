let listener=[
    ()=>{console.log(1)},
    ()=>{console.log(1)},
    1,2,3
];
const subPub={
    'price':[
        // ()=>{console.log(3)},
        // ()=>{console.log(4)}
    ],
    'parper':[]
}
for(let i=0;i<subPub.price.length;i++){
    console.log('---',subPub.price[i]);
    subPub.price[i]();
}
  
//price 对应的方法执行一遍
function foo(){
    console,log('foo');
}
//foo:[foo]
//在subPub上添加一个value 为数组的key
//把foo 放到数组
subPub.foo=[foo];
console.log(subPub);
class Events{
    constructor(){
        this.listener={};
    }
    on (key,fn){
        if(!this.listener[key]){
            this.listener[key]=[];
        }
    this.listener[key].push(fn);        
        // this.listener.push(fn);
    }
    emit(key){
        for(let i=0;i<this.listener[key].length;i++){
            console.log('---',this.listener[key][i]);
            this.listener[key][i]();
        }
    }
}
const ev=new Events();
ev.on('ab',()=>{
    console.log(1)
})
ev.on('ab',()=>{
    console.log(2)
})
ev.emit('ab');//执行