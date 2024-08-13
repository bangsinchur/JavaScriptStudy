//throw new TypeError('타입 에러가 났습니다.')// 의도적으로 타입에러를 낸것.
//console.log('OK');// 에러가 발생하면 그다음 코드는 진행되지 않음.

console.log('start-------------------------------')
try{
//에러가 날 소지가 있는 코드들... 
console.log('name', name);
console.log('try');
console.log('try again');
} catch (error){
console.log('error');
} finally {
    console.log('finally');
}
console.log('End------------------------------------');