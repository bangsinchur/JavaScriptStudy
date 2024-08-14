//반복문을 만들자 . 5번 반복
//(인덱스 변수 선언 및 초기화; 반복조건;인데스변수갱신)
let sum1 = 0
let i=3
for(i=1; i<=5 ; i++){
    console.log('i',i); 
    sum1 += i;
}
console.log(sum1);
console.log('i', i);

console.log('-------------------------------')
//var,let,const

const sum = 0;

function getSum(x, y) {
  const sum = x + y;

  return sum;//sum =x + y;
}

if (getSum(1, 5) > 3) {
  const sum = 4 + 6;//sum 10 
}

console.log(sum);
