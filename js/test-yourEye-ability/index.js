const startBtn=document.querySelector('#page-one button');
const pageOne=document.querySelector('#page-one');
startBtn.addEventListener('click',
function(){
    //关掉第一屏
    pageOne.style.display='none';
})