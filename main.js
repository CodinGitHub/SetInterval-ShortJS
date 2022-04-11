number = 3;

const timer = setInterval(()=>{
    console.log(number);
    number--;
    if(number == 0){
        clearInterval(timer);
    }
},100);