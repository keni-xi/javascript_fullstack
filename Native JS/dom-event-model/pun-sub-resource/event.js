const Event=require('events');
const ev=new Event();
//订阅
ev.on('price',()=>{
    console.log('123');
})
ev.on('price',()=>{
    console.log('345');
})
//发布
ev.emit('price');