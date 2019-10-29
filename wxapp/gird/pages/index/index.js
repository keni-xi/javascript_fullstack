//index.js
//获取应用实例
const app = getApp()
const Grid = require('./grid.js');
Page({
  data: {
   num:null
  },
  onLoad:function(){
    const gameGrid = new Grid(4);
    this.game = gameGrid;
    //两个格子
    this.addRandomData();
    this.addRandomData();
    //console.log(gameGrid.grid)
    this.setData({
      num:gameGrid.grid
    })
  },
  addRandomData:function(){
    let cell = this.game.selectCell();
    console.log(cell);
    this.game.grid[cell.i][cell.j] = Math.random()>0.5?2:4;
  },
  game:null,
  startX:0,
  startY:0,
  endX:0,
  endY:0,
  touchstart:function(event){
    const touch = event.touches[0];
    this.startX = touch.clientX;
    this.startY = touch.clientY;
  },
  touchmove:function(event){
    const touch = event.touches[0];
    this.endX = touch.clientX;
    this.endY = touch.clientY;
  },
  touchend:function(){
    console.log(this.startX,this.startY,this.endX,this.endY);
    const disX=this.startX-this.endX;
    const disY=this.startY-this.endY;
    const absDisX=Math.abs(disX);
    const absDisY=Math.abs(disY);
    if(absDisX > 10 || absDisY >10){
      //0: up ,1:right ,2:down, 3:left
      var direction =absDisX>absDisY ? (disX <0?1:3) : (disY<0?2:0);
      console.log(direction);
      this.move(direction);
    }
    },
    move:function(dorection){
      //数字的合并
      this.combine()
   
  },
  combine:function(){
    //数字滑动 把数字靠左
    let res = this.slideNumber(['',2,'',2]);
    console.log('数字靠边',res);
  },
  slideNumber:function(arr){
    let current = 0;
    for(let i=1;i<arr.length;i++){
      if(arr[i]!==''){
        arr[current]=arr[i];
        current ++;
      }
    }
    //[2,2,'',2];
    for(let j=current;j<arr.length;j++){
      arr[j]='';
    }
    return arr;
  }
})