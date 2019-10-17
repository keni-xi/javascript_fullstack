let caculateBonus=null;

let categories={
    'S':(salary)=>{
        return salary*60
    },
    'A':(salary)=>{
        return salary*24
    },
    'B':(salary)=>{
        return salary*18
    },
    'C':(salary)=>{
        return salary*15
    },
    'D':(salary)=>{
        return salary*12
    }
}
//console.log(caculateBonus);
caculateBonus=(salary,type='C')=>{
    let bonuce= categories[type](salary)
   /* switch(type){
        case'A':
        bonuce=salary*24
        break;
        case'B':
        bonuce=salary*18
        break;
        case'C':
        bonuce=salary*15
        break;
        case'D':
        bonuce=salary*12
        break;
    }*/
   
    return bonuce;
}
console.log(caculateBonus(2000,'A'));