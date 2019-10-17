//document process
const playAction=process.argv[2];
console.log(playAction);
if(playAction !='rock'&& playAction !='paper'&&playAction!='scissor'){
    throw new Error('出错了，请重出');
}else{
    let computerAction;
    let random=Math.random()*3;
    console.log(Math.random());
    if(random<1){
        computerAction='rock';
        console.log('电脑出了石头');

    }else if(random>2){
        computerAction='scissor'
        console.log('电脑出了剪刀');
    }
    else{
        computerAction='paper'
        console.log('电脑出了布');
    }
    if(playAction==computerAction){
        console.log('平局');

    }else if((playAction=='scissor'&&computerAction=='rock')||
    (playAction=='rock'&&computerAction=='paper')||
    (playAction=='paper'&&computerAction=='scissor')){
        console.log('you win');

    }else{
        console.log('you fail');
    }
}