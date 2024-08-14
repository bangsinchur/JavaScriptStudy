function printSquare(x){
    console.log(x * x);
    return x + x;
};

function getSquare(x){
    return x * x;
};

printSquare(5);//25 출력
getSquare(5);// 출력값 없음.

console.log(getSquare(9));//81 출력
console.log(printSquare(9));//undefined->18이 출력됨
//console.log 로 함수를 호출할때, 
//return 값이 없다면 반환해줄 값이 없으므로 undefined값이 나온다.