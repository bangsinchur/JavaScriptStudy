const cutOff= 80; // 상수

const passChecker = (score) => {
if(score > cutOff){
    return 'Pass!';
} else {
    return 'Fail!';
}
};

console.log(typeof passChecker)
console.log(passChecker(75));

const passChecker2 = (score) => {//if 를빼고 조건만쓰기
   return score > cutOff ?//? 뒤에참일때
'pass!' : 'Fail!' //콜론 뒤에는 거짓일때
};
console.log(passChecker2(75));

const passChecker3 = (score) => score>cutOff ? 'Pass!' : 'Fail!';
//if빼고 return 빼고
console.log(passChecker3(75));
const passChecker4 = score => score>cutOff ? 'Pass!' : 'Fail!';
//if,return,( )빼고
console.log(passChecker4(75));