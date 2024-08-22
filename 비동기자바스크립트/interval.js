//stopwatch

let counter =0;// setInterval 함수안에 넣으면 숫자가 안늘어나고 계속 1초임.
const intervalId=setInterval(()=> {
    counter +=1;
    console.log('counter',counter);
},1000);

setTimeout(()=> clearInterval(intervalId), 5000);//5초뒤에 setInterval 함수 멈춤
